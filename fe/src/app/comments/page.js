"use client";
import { useEffect, useState } from "react";

export default function CommentsPage() {
    const [comments, setComments] = useState([]);
    const [text, setText] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/comments").then(res => res.json()).then(setComments);
    }, []);

    function createComment(e) {
        e.preventDefault();
        fetch("http://localhost:8080/comments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text })
        })
            .then(res => res.json())
            .then(newComment => setComments(prev => [...prev, newComment]));
    }

    function deleteComment(id) {
        fetch(`http://localhost:8080/comments/${id}`, { method: "DELETE" });
        setComments(prev => prev.filter(c => c.id !== id));
    }

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Comments</h1>
            <ul>
                {comments.map(c => (
                    <li key={c.id} className="flex justify-between border-b py-1">
                        {c.text}
                        <button onClick={() => deleteComment(c.id)} className="text-red-500">Delete</button>
                    </li>
                ))}
            </ul>
            <form onSubmit={createComment} className="mt-4 flex gap-2">
                <input value={text} onChange={e => setText(e.target.value)} placeholder="Comment text" className="border p-1" />
                <button className="bg-blue-500 text-white px-2 py-1">Create</button>
            </form>
        </div>
    );
}