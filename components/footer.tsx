"use client"

import { Instagram, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="fixed bottom-4 right-4 z-10 px-6 py-2 bg-black bg-opacity-50 backdrop-blur-md rounded-full shadow-lg flex items-center space-x-6">
      <Mail className="text-white"/><Link href="mailto:ariadnzm@gmail.com" className="text-white hover:text-primary-400 transition-colors font-sans">
        ariadnzm@gmail.com
      </Link>
      <Instagram className="text-white"/><Link href="https://www.instagram.com/arizamora" target="_blank" className="text-white hover:text-primary-400 transition-colors font-sans">
        Instagram
      </Link>
    </footer>
  )
}
