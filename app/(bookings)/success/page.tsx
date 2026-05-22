export default function SuccessPage() {

  return (

    <main className="flex-1 bg-gray-100 flex items-center justify-center p-10">

      <div className="bg-white p-16 rounded-3xl shadow-lg text-center max-w-2xl w-full">

        <h1 className="text-6xl font-bold text-green-600 mb-8">
          Booking Confirmed!
        </h1>

        <p className="text-2xl text-gray-700 mb-10">
          Your flight has been booked successfully.
        </p>

        <a
          href="/search"
          className="bg-blue-600 text-white px-10 py-5 rounded-xl text-2xl inline-block"
        >
          Book Another Flight
        </a>

      </div>

    </main>
  )
}