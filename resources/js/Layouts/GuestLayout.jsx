import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0 relative w-full">
            {/* Top right nav for guests */}
            <nav className="absolute top-4 right-8 flex gap-4 z-10">
                <Link href={route('login')} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 font-semibold transition">Log In</Link>
                <Link href={route('register')} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold transition">Register</Link>
            </nav>
            <div>
                <Link href="/">
                    <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
