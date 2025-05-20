import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import SecondaryButton from "@/Components/SecondaryButton";
import TextareaInput from "@/Components/TextareaInput";

export default function Edit({ auth, post }) {
    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            title: post.title,
            content: post.content,
        });

    const submit = (e) => {
        e.preventDefault();
        patch(route("posts.update", { id: post.id }));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Post
                </h2>
            }
        >
            <Head title="Create Post" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <form onSubmit={submit} className="mt-6 space-y-6">
                        <div>
                            <InputLabel htmlFor="title" value="Title" />

                            <TextInput
                                id="title"
                                className="mt-1 block w-full"
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                                required
                                isFocused
                                autoComplete="title"
                            />

                            <InputError
                                className="mt-2"
                                message={errors.title}
                            />
                        </div>

                        <div>
                            <InputLabel htmlFor="content" value="Content" />

                            <TextareaInput
                                id="content"
                                className="mt-1 block w-full"
                                value={data.content}
                                onChange={(e) =>
                                    setData("content", e.target.value)
                                }
                                required
                                autoComplete="content"
                                rows={10}
                            />

                            <InputError
                                className="mt-2"
                                message={errors.content}
                            />
                        </div>

                        <div className="flex items-center gap-4">
                            <Link href={route("posts.index")}>
                                <SecondaryButton disabled={processing}>
                                    Cancel
                                </SecondaryButton>
                            </Link>
                            <PrimaryButton disabled={processing}>
                                Save
                            </PrimaryButton>
                            <Transition
                                show={recentlySuccessful}
                                enter="transition ease-in-out"
                                enterFrom="opacity-0"
                                leave="transition ease-in-out"
                                leaveTo="opacity-0"
                            >
                                <p className="text-sm text-gray-600">Saved.</p>
                            </Transition>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
