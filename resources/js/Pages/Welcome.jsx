import { Head, Link } from '@inertiajs/react';

// Finnish Nature Journal Welcome Page
const natureImages = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', // forest
    'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80', // lake
    'https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=600&q=80', // bear
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80', // plants
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80', // scenery
];
function getRandomImage() {
    return natureImages[Math.floor(Math.random() * natureImages.length)];
}

export default function Welcome({ auth }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    // Finnish Nature Journal custom welcome page
    const isLoggedIn = !!auth.user;
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-50 flex flex-col items-center justify-center">
            <Head title="Finnish Nature Journal" />
            <div className="max-w-2xl w-full mx-auto p-8 bg-white/80 shadow-lg rounded-xl mt-10">
                <h1 className="text-4xl font-bold text-green-900 mb-4 text-center">Finnish Nature Journal</h1>
                <p className="text-lg text-gray-700 mb-6 text-center">Log your nature observations from the wilds of Finland! Keep track of wildlife, scenery, and plant discoveries. Join a community of nature lovers and start your personal journal today.</p>
                <div className="flex justify-center mb-6">
                    <img src={getRandomImage()} alt="Finnish nature" className="rounded-lg shadow-md max-h-64 object-cover" />
                </div>
                {isLoggedIn ? (
                    <div className="flex flex-col items-center gap-4">
                        <Link href={route('observations.index')} className="w-full px-6 py-3 bg-green-700 text-white rounded-lg shadow hover:bg-green-800 text-lg font-semibold transition text-center">Go to My Nature Journal</Link>
                        <Link href={route('observations.create')} className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 text-lg font-semibold transition text-center">Create Observation</Link>
                        <Link href={route('profile.edit')} className="w-full px-6 py-3 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 text-lg font-semibold transition text-center">View Profile</Link>
                        <Link
                            href={route('logout')}
                            method="post"
                            as="button"
                            className="w-full px-6 py-3 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 text-lg font-semibold transition text-center"
                        >
                            Log Out
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-4">
                        <Link href={route('login')} className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 text-lg font-semibold transition">Log In</Link>
                        <Link href={route('register')} className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 text-lg font-semibold transition">Register</Link>
                    </div>
                )}
            </div>
            <footer className="mt-10 text-gray-500 text-sm">&copy; {new Date().getFullYear()} Finnish Nature Journal</footer>
        </div>
    );
}
