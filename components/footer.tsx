"use client"

import { Instagram, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="fixed bottom-4 right-4 z-10 px-6 py-2 bg-black bg-opacity-50 backdrop-blur-md rounded-full shadow-lg flex items-center space-x-4">
      <div className="flex items-center space-x-2 mr-6">
        <Mail className="text-white" />
        <Link href="mailto:azamoranaranjo@gmail.com" className="text-white hover:text-primary-400 transition-colors font-sans">
          azamoranaranjo@gmail.com
        </Link>
      </div>
      <div className="flex items-center space-x-2">
        <Instagram className="text-white" />
        <Link href="https://www.instagram.com/ariadnazamoranaranjo" target="_blank" className="text-white hover:text-primary-400 transition-colors font-sans">
          <p>@ariadnazamoranaranjo</p>
        </Link>
      </div>
    </footer>
  )
}
