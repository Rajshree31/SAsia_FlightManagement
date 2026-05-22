"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { supabase } from "@/src/lib/supabase"

export default function BookingPage() {

  const router = useRouter()
  const searchParams = useSearchParams()

  const airline = searchParams.get("airline")
  const from = searchParams.get("from")
  const to = searchParams.get("to")
  const departure = searchParams.get("departure")
  const price = searchParams.get("price")

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  async function handleBooking() {

    const { error } = await supabase
      .from("bookings")
      .insert([
        {
          passenger_name: name,
          email: email,
          airline: airline,
          from_city: from,
          to_city: to,
          departure_time: departure,
          price: price,
        },
      ])

    if (error) {
      alert("Booking Failed")
      console.log(error)
      return
    }

    router.push("/success")
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-100 p-10">

      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-2xl">

        <h1 className="text-6xl font-bold mb-10 text-center">
          Confirm Booking
        </h1>

        <div className="space-y-5 mb-10 bg-gray-50 p-8 rounded-2xl">

          <p className="text-2xl">
            ✈️ Airline:
            <span className="font-bold ml-2">
              {airline}
            </span>
          </p>

          <p className="text-2xl">
            📍 Route:
            <span className="font-bold ml-2">
              {from} → {to}
            </span>
          </p>

          <p className="text-2xl">
            🕒 Departure:
            <span className="font-bold ml-2">
              {departure}
            </span>
          </p>

          <p className="text-3xl font-bold text-blue-600">
            ₹{price}
          </p>

        </div>

        <div className="space-y-6">

          <input
            type="text"
            placeholder="Passenger Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-2 border-gray-200 p-5 rounded-xl text-lg focus:outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-2 border-gray-200 p-5 rounded-xl text-lg focus:outline-none focus:border-blue-500"
          />

          <button
            onClick={handleBooking}
            className="w-full bg-green-600 hover:bg-green-700 text-white p-5 rounded-xl text-2xl font-semibold transition"
          >
            Confirm Booking
          </button>

        </div>

      </div>

    </main>
  )
}