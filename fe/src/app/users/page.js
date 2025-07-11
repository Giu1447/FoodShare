"use client";
import { useEffect, useState } from "react";

export default function UsersPage() {
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({ email: "", password: "", name: "" });

    useEffect(() => {
        fetch("http://localhost:8080/users")
            .then((res) => res.json())
            .then(setUsers);
    }, []);

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:8080/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        })
            .then((res) => res.json())
            .then((newUser) => setUsers((prev) => [...prev, newUser]));
    }

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-2">Users</h1>
            <ul className="mb-4">
                {users.map((u) => (
                    <li key={u.id} className="border-b">{u.email}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <input name="email" placeholder="Email" onChange={handleChange} className="border p-1" />
                <input name="password" placeholder="Password" onChange={handleChange} className="border p-1" />
                <input name="name" placeholder="Name" onChange={handleChange} className="border p-1" />
                <button className="bg-blue-500 text-white px-2 py-1">Add User</button>
            </form>
        </div>
    );
}
