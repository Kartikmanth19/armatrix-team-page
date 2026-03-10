"use client"

import Link from "next/link"
import Navbar from "../components/Navbar"

export default function Home() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">

      <Navbar />

      <main className="flex flex-col items-center justify-center text-center px-6 py-32">

        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Building the Future <br />
          with <span className="text-blue-400">Armatrix</span>
        </h1>

        <p className="text-lg text-gray-300 max-w-2xl mb-10">
          Armatrix is a technology-driven company focused on building innovative
          solutions and empowering teams to create impactful products.
        </p>

        <div className="flex gap-6">

          <Link
            href="/team"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Meet Our Team
          </Link>

          <Link
            href="/team"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            Learn More
          </Link>

        </div>

      </main>

    </div>
  )
}