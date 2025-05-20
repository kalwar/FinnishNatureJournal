import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Link, usePage } from '@inertiajs/react';

const categories = {
    Wildlife: '🦌',
    Scenery: '🏞️',
    Plants: '🌱',
};

export default function Index({ observations }) {
    const { flash } = usePage().props;
    return (
        <div className="max-w-3xl mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">My Nature Observations</h1>
            {flash.success && <div className="mb-4 p-2 bg-green-100 text-green-800 rounded">{flash.success}</div>}
            <div className="mb-6 text-right">
                <Link href={route('observations.create')} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">+ Log New Observation</Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
                {observations.length === 0 && <div className="col-span-2 text-gray-500">No observations yet.</div>}
                {observations.map(obs => (
                    <div key={obs.id} className="bg-white shadow rounded-lg p-4 flex flex-col gap-2 relative">
                        <div className="absolute top-2 right-2 flex gap-2">
                            <Link href={route('observations.edit', obs.id)} className="text-blue-600 hover:underline">Edit</Link>
                            <button
                                onClick={() => {
                                    if (confirm('Delete this observation?')) {
                                        Inertia.delete(route('observations.destroy', obs.id));
                                    }
                                }}
                                className="text-red-600 hover:underline"
                            >Delete</button>
                        </div>
                        <div className="text-2xl">{categories[obs.category] || '🌿'}</div>
                        <div className="font-semibold text-xl">{obs.title}</div>
                        <div className="text-gray-500">{obs.date} &mdash; {obs.location}</div>
                        <div className="text-sm text-gray-700">{obs.category}</div>
                        <div className="text-gray-800 mt-2 whitespace-pre-line">{obs.notes}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
