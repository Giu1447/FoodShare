"use client";
import { useEffect, useState } from "react";

export default function RecipesPage() {
    const [recipes, setRecipes] = useState([]);
    const [name, setName] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/recipes").then(res => res.json()).then(setRecipes);
    }, []);

    function createRecipe(e) {
        e.preventDefault();
        fetch("http://localhost:8080/recipes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name })
        })
            .then(res => res.json())
            .then(newRecipe => setRecipes(prev => [...prev, newRecipe]));
    }

    function deleteRecipe(id) {
        fetch(`http://localhost:8080/recipes/${id}`, { method: "DELETE" });
        setRecipes(prev => prev.filter(r => r.id !== id));
    }

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Recipes</h1>
            <ul>
                {recipes.map(r => (
                    <li key={r.id} className="flex justify-between border-b py-1">
                        {r.name}
                        <button onClick={() => deleteRecipe(r.id)} className="text-red-500">Delete</button>
                    </li>
                ))}
            </ul>
            <form onSubmit={createRecipe} className="mt-4 flex gap-2">
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Recipe name" className="border p-1" />
                <button className="bg-blue-500 text-white px-2 py-1">Create</button>
            </form>
        </div>
    );
}