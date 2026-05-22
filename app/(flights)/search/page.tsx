"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SearchPage() {

  const router = useRouter()

  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")

  const handleSearch = () => {

    router.push(
      `/results?from=${from}&to=${to}`
    )
  }

  return (

    <main className="flex-1 bg-gray-100 p-12">

      <div className="bg-white p-12 rounded-3xl shadow max-w-6xl mx-auto">

        <h1 className="text-6xl font-bold mb-12">
          Search Flights
        </h1>

        <div className="grid grid-cols-4 gap-6">

          <input
            type="text"
            placeholder="Origin"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="border p-5 rounded-xl text-2xl"
          />

          <input
            type="text"
            placeholder="Destination"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="border p-5 rounded-xl text-2xl"
          />

          <input
            type="date"
            className="border p-5 rounded-xl text-2xl"
          />

          <input
            type="number"
            placeholder="Passengers"
            className="border p-5 rounded-xl text-2xl"
          />

        </div>

        <button
          onClick={handleSearch}
          className="mt-10 bg-blue-600 text-white px-10 py-5 rounded-xl text-2xl"
        >
          Search Flights
        </button>

      </div>

    </main>

  )
}