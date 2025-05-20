import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Show({ auth, post }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    View Post
                </h2>
            }
        >
            <Head title="Create Post" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <p className="text-3xl">{post.title}</p>
                    <p>{post.content}</p>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
