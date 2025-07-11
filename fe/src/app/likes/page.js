"use client";
import { useEffect, useState } from "react";

export default function LikesPage() {
    const [likes, setLikes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/likes").then(res => res.json()).then(setLikes);
    }, []);

    function addLike() {
        fetch("http://localhost:8080/likes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({})
        })
            .then(res => res.json())
            .then(newLike => setLikes(prev => [...prev, newLike]));
    }

    function deleteLike(id) {
        fetch(`http://localhost:8080/likes/${id}`, { method: "DELETE" });
        setLikes(prev => prev.filter(l => l.id !== id));
    }

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Likes</h1>
            <button onClick={addLike} className="mb-4 bg-blue-500 text-white px-2 py-1">Add Like</button>
            <ul>
                {likes.map(l => (
                    <li key={l.id} className="flex justify-between border-b py-1">
                        Like {l.id}
                        <button onClick={() => deleteLike(l.id)} className="text-red-500">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}