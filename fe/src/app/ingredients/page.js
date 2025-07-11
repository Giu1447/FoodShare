"use client";
import { useEffect, useState } from "react";

export default function IngredientsPage() {
    const [ingredients, setIngredients] = useState([]);
    const [name, setName] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/ingredients").then(res => res.json()).then(setIngredients);
    }, []);

    function createIngredient(e) {
        e.preventDefault();
        fetch("http://localhost:8080/ingredients", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name })
        })
            .then(res => res.json())
            .then(newIng => setIngredients(prev => [...prev, newIng]));
    }

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Ingredients</h1>
            <ul>
                {ingredients.map(i => (
                    <li key={i.id} className="border-b py-1">{i.name}</li>
                ))}
            </ul>
            <form onSubmit={createIngredient} className="mt-4 flex gap-2">
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Ingredient name" className="border p-1" />
                <button className="bg-blue-500 text-white px-2 py-1">Create</button>
            </form>
        </div>
    );
}