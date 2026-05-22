import Link from "next/link"
import { supabase } from "@/src/lib/supabase"

export default async function ResultsPage({
  searchParams,
}: {
  searchParams: Promise<{
    from?: string
    to?: string
  }>
}) {

  const params = await searchParams

  let query = supabase
    .from("flights")
    .select("*")

  if (params.from) {
    query = query.ilike("from_city", `%${params.from}%`)
  }

  if (params.to) {
    query = query.ilike("to_city", `%${params.to}%`)
  }

  const { data: flights, error } = await query

  if (error) {
    return (
      <main className="p-10">
        <h1>Error loading flights</h1>
      </main>
    )
  }

  return (

    <main className="flex-1 bg-gradient-to-br from-gray-100 to-blue-100 p-10 min-h-screen">

      <h1 className="text-6xl font-extrabold mb-12 text-center">
        Available Flights
      </h1>

      <div className="space-y-8 max-w-6xl mx-auto">

        {flights && flights.length === 0 ? (

          <div className="bg-white p-12 rounded-3xl shadow-xl text-center">

            <h2 className="text-4xl font-bold mb-5">
              No Flights Found
            </h2>

            <p className="text-gray-600 text-xl">
              Try searching for another route.
            </p>

          </div>

        ) : (

          flights?.map((flight) => (

            <div
              key={flight.id}
              className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 flex justify-between items-center border border-gray-200 hover:scale-[1.02] transition duration-300"
            >

              <div>

                <div className="flex items-center gap-4 mb-5">

                  <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                    ✈
                  </div>

                  <h2 className="text-4xl font-bold text-gray-800">
                    {flight.airline}
                  </h2>

                </div>

                <p className="text-2xl text-gray-700 mb-3">

                  {flight.from_city} → {flight.to_city}

                </p>

                <p className="text-lg text-gray-500">

                  Departure: {flight.departure_time}

                </p>

              </div>

              <div className="text-right">

                <h2 className="text-4xl font-extrabold text-blue-600 mb-5">

                  ₹{flight.price}

                </h2>

                <Link
                    href={`/booking?airline=${flight.airline}&from=${flight.from_city}&to=${flight.to_city}&departure=${flight.departure_time}&price=${flight.price}`}
                >

                  <button
                    className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-2xl text-xl shadow-lg"
                  >
                    Select Flight
                  </button>

                </Link>

              </div>

            </div>

          ))

        )}

      </div>

    </main>

  )
}