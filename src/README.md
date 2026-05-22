# ✈️ Flight Management App

A modern flight booking web application built using Next.js 14, Supabase, Tailwind CSS, and Zustand.

This application allows users to:

- Search flights
- View available flight results
- Book flights
- Create accounts and login
- Confirm bookings
- Experience a responsive modern UI

---

# 🚀 Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Supabase
- Zustand
- Vercel

---

# 📌 Features Implemented

## Authentication
- User Signup
- User Login
- Supabase Authentication

## Flight Booking
- Flight Search
- Flight Results Page
- Dynamic flight filtering
- Booking Page
- Booking Confirmation Page

## Database
- Supabase PostgreSQL integration
- Flights table
- Bookings table
- RLS Policies enabled

## UI
- Responsive modern interface
- Hero landing page
- Styled cards and forms
- Mobile-friendly layout

---

# 🗄️ Database Tables

## flights
Stores available flights.

Fields:
- airline
- from_city
- to_city
- departure_time
- price

## bookings
Stores user bookings.

Fields:
- passenger_name
- email
- airline
- from_city
- to_city
- departure_time
- price

---

# 🔐 Row Level Security (RLS)

RLS policies were enabled in Supabase for:

- flights table
- bookings table

Policies created:
- Public read access for flights
- Insert access for bookings

---

# 🧠 Zustand Store Structure

The application uses Zustand for state management.

Implemented:
- Selected flight storage
- Booking flow state

Future improvements:
- Persist middleware
- User session persistence
- Seat selection state

---

# ⚙️ Local Setup

Clone the repository:
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env.local` file

---

# 🌍 Deployment

The application is deployed on Vercel.

---

# 📖 Future Improvements

Due to time constraints, the following advanced features from the assignment are partially implemented or planned:

- Interactive seat selection
- Realtime seat updates
- Flight rescheduling
- Cancellation system
- Advanced Zustand persist middleware
- PWA support
- RPC seat locking
- Full booking management dashboard

---

# 👩‍💻 Author

Rajshree Shende
