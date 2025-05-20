import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Link, useForm, usePage } from '@inertiajs/react';

const categories = ['Wildlife', 'Scenery', 'Plants'];

export default function Edit({ observation }) {
    const { data, setData, put, processing, errors } = useForm({
        title: observation.title || '',
        date: observation.date || '',
        location: observation.location || '',
        category: observation.category || 'Wildlife',
        notes: observation.notes || '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        put(route('observations.update', observation.id));
    }

    return (
        <div className="max-w-xl mx-auto py-8">
            <h1 className="text-2xl font-bold mb-6">Edit Observation</h1>
            <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow rounded-lg p-6">
                <div>
                    <label className="block mb-1 font-medium">Title</label>
                    <input type="text" className="w-full border rounded p-2" value={data.title} onChange={e => setData('title', e.target.value)} />
                    {errors.title && <div className="text-red-600 text-sm">{errors.title}</div>}
                </div>
                <div>
                    <label className="block mb-1 font-medium">Date</label>
                    <input type="date" className="w-full border rounded p-2" value={data.date} onChange={e => setData('date', e.target.value)} />
                    {errors.date && <div className="text-red-600 text-sm">{errors.date}</div>}
                </div>
                <div>
                    <label className="block mb-1 font-medium">Location</label>
                    <input type="text" className="w-full border rounded p-2" value={data.location} onChange={e => setData('location', e.target.value)} />
                    {errors.location && <div className="text-red-600 text-sm">{errors.location}</div>}
                </div>
                <div>
                    <label className="block mb-1 font-medium">Category</label>
                    <select className="w-full border rounded p-2" value={data.category} onChange={e => setData('category', e.target.value)}>
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                    {errors.category && <div className="text-red-600 text-sm">{errors.category}</div>}
                </div>
                <div>
                    <label className="block mb-1 font-medium">Notes</label>
                    <textarea className="w-full border rounded p-2" rows={4} value={data.notes} onChange={e => setData('notes', e.target.value)} />
                    {errors.notes && <div className="text-red-600 text-sm">{errors.notes}</div>}
                </div>
                <div className="flex gap-4 justify-end">
                    <Link href={route('observations.index')} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Cancel</Link>
                    <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700" disabled={processing}>Update</button>
                </div>
            </form>
        </div>
    );
}
