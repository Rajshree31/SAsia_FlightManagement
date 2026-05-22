import Link from "next/link"

export default function HomePage() {

  return (

    <main className="flex-1 relative overflow-hidden">

      <div className="absolute inset-0">

        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
          alt="Flight"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] text-center px-6">

        <h1 className="text-7xl font-extrabold text-white mb-6">
          Flight Management App
        </h1>

        <p className="text-2xl text-gray-200 mb-10 max-w-2xl">
          Search, compare and book flights easily with a modern experience.
        </p>

        <Link href="/search">

          <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-10 py-5 rounded-2xl text-2xl shadow-2xl">

            Search Flights

          </button>

        </Link>

      </div>

    </main>

  )
}