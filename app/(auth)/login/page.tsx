"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/src/lib/supabase"

export default function LoginPage() {

  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleLogin() {

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      alert(error.message)
      return
    }

    alert("Login Successful!")

    router.push("/")
  }

  return (

    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-white p-10">

      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-xl">

        <h1 className="text-5xl font-bold mb-8 text-center">
          Login
        </h1>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-2 border-gray-200 p-4 rounded-xl"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border-2 border-gray-200 p-4 rounded-xl"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl text-xl"
          >
            Login
          </button>

        </div>

      </div>

    </main>
  )
}