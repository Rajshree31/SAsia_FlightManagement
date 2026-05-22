"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { supabase } from "@/src/lib/supabase"

export default function BookingPage() {

  const router = useRouter()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  async function handleBooking() {

    const { error } = await supabase
      .from("bookings")
      .insert([
        {
          passenger_name: name,
          email: email,
          airline: "IndiGo",
          from_city: "Pune",
          to_city: "Bangalore",
          departure_time: "10:00 AM",
          price: 4500,
        },
      ])

    if (error) {
      alert("Booking Failed")
      return
    }

    router.push("/success")
  }

  return (

    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-10">

      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-2xl">

        <h1 className="text-5xl font-bold mb-10 text-center">
          Confirm Booking
        </h1>

        <div className="bg-gray-50 rounded-2xl p-8 mb-8 shadow">

          <div className="space-y-5">

            <p className="text-3xl font-bold">
              ✈️ Airline: IndiGo
            </p>

            <p className="text-2xl">
              📍 Route: Pune → Bangalore
            </p>

            <p className="text-2xl">
              🕒 Departure: 10:00 AM
            </p>

            <p className="text-4xl font-bold text-blue-600">
              ₹4500
            </p>

          </div>

        </div>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Passenger Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-2 border-gray-200 p-4 rounded-xl"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-2 border-gray-200 p-4 rounded-xl"
          />

          <button
            onClick={handleBooking}
            className="w-full bg-green-600 hover:bg-green-700 text-white p-4 rounded-xl text-xl"
          >
            Confirm Booking
          </button>

        </div>

      </div>

    </main>
  )
}