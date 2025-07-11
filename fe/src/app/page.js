'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/categories')
        .then(res => res.json())
        .then(data => setRecipes(data))
        .catch(() => setRecipes([]))
  }, [])

  return (
      <div className="p-6 max-w-4xl mx-auto">
        <nav className="mb-6">
          <Link href="/">Home</Link>
          <Link href="/users/page">Users</Link>
        </nav>
        <h1 className="text-3xl mb-4 font-bold">Rezepte</h1>
        {recipes.length === 0 && <p>Keine Rezepte gefunden.</p>}
        <ul className="space-y-3">
          {recipes.map(recipe => (
              <li key={recipe.id} className="border p-4 rounded shadow-sm hover:shadow-md">
                <h2 className="text-xl font-semibold">{recipe.name}</h2>
                <p>{recipe.description}</p>
              </li>
          ))}
        </ul>
      </div>
  )
}
