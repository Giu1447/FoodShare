'use client';

import Link from 'next/link';

export default function Navbar() {
    const isLoggedIn = typeof window !== "undefined" && !!localStorage.getItem("token");

    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between">
            <div className="space-x-4">
                <Link href="/">Home</Link>
                <Link href="/recipe/page">Recipes</Link>
                <Link href="/categories">Categories</Link>
                <Link href="/comments">Comments</Link>
                <Link href="/ingredients">Ingredients</Link>
                <Link href="/likes">Likes</Link>
                <Link href="/users/page">Users</Link>
            </div>
        </nav>
    );
}
