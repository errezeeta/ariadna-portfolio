"use client"

import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-10 px-6 py-2 bg-black bg-opacity-50 backdrop-blur-md rounded-full shadow-lg flex items-center space-x-6">
      <nav>
        <ul className="flex space-x-4">
          <Link href="#portfolio" className="text-white hover:text-primary-400 transition-colors font-sans">Portfolio</Link>
          <Link href="#about" className="text-white hover:text-primary-400 transition-colors font-sans">About Me</Link>
          <Link href="#contact" className="text-white hover:text-primary-400 transition-colors font-sans">Contact</Link>
        </ul>
      </nav>
    </header>
  )
}
