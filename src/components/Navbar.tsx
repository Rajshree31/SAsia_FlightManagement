import Link from "next/link"

export default function Navbar() {

  return (

    <nav className="bg-black/70 backdrop-blur-md text-white px-10 py-5 flex justify-between items-center sticky top-0 z-50">

      <Link
        href="/"
        className="text-4xl font-bold tracking-wide"
      >
        Flight App
      </Link>

      <div className="flex gap-8 text-xl">

        <Link href="/">
          Home
        </Link>

        <Link href="/login">
          Login
        </Link>

        <Link href="/signup">
          Signup
        </Link>

      </div>

    </nav>

  )
}