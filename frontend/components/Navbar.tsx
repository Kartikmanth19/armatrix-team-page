"use client"

import Link from "next/link"

export default function Navbar() {

  return (

    <header className="w-full sticky top-0 z-50 backdrop-blur-lg bg-white/10 border-b border-white/20">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <div className="flex items-center gap-2">

          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
            A
          </div>

          <h1 className="text-xl font-bold text-white tracking-wide">
            Armatrix
          </h1>

        </div>

        <nav className="flex items-center gap-8">

          <Link
            href="/"
            className="text-gray-300 hover:text-white transition duration-200"
          >
            Home
          </Link>

          <Link
            href="/team"
            className="text-gray-300 hover:text-white transition duration-200"
          >
            Team
          </Link>

          <Link
            href="/team"
            className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Meet the Team
          </Link>

        </nav>

      </div>

    </header>

  )
}