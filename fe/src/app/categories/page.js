"use client";
import { useEffect, useState } from "react";

export default function CategoriesPage() {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/categories").then(res => res.json()).then(setCategories);
    }, []);

    function createCategory(e) {
        e.preventDefault();
        fetch("http://localhost:8080/categories", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name })
        })
            .then(res => res.json())
            .then(newCat => setCategories(prev => [...prev, newCat]));
    }

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Categories</h1>
            <ul>
                {categories.map(c => (
                    <li key={c.id} className="border-b py-1">{c.name}</li>
                ))}
            </ul>
            <form onSubmit={createCategory} className="mt-4 flex gap-2">
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Category name" className="border p-1" />
                <button className="bg-blue-500 text-white px-2 py-1">Create</button>
            </form>
        </div>
    );
}