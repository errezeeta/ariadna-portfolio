"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Component() {
  // const [isPlaying, setIsPlaying] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [fade, setFade] = useState(true)
  const images = [
    "https://mir-s3-cdn-cf.behance.net/project_modules/fs/5a0ab2183225387.653b9b463b953.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/fs/374091183223293.653b93714bcd2.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/fs/3aa4ab183223835.653b95aad1607.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/disp/3e6d8c183229191.653ba91048f1e.png"
  ]
  const router = useRouter()

  // useEffect(() => {
  //   let interval: NodeJS.Timeout
  //   if (isPlaying) {
  //     interval = setInterval(() => {
  //       setFade(false)
  //       setTimeout(() => {
  //         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  //         setFade(true)
  //       }, 500)
  //     }, 3000)
  //   }
  //   return () => clearInterval(interval)
  // }, [isPlaying, images.length])

  const handlePlayButtonClick = () => {
    router.push("/videobook")
  }

  return (
    <div className="relative min-h-screen bg-black text-white">
      <header className="absolute top-0 left-0 right-0 z-10 px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">AZ</div>
        <nav>
          <ul className="flex space-x-4">
            <Link href="#portfolio" className="hover:text-primary-400 transition-colors font-sans">Portfolio</Link>
            <Link href="#about" className="hover:text-primary-400 transition-colors font-sans">Sobre mí</Link>
            <Link href="#contact" className="hover:text-primary-400 transition-colors font-sans">Contacto</Link>
          </ul>
        </nav>
      </header>
      <main className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={images[currentImageIndex]}
            alt="Trabajo de diseño de Ariadna Zamora"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className={`transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">Ariadna Zamora</h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
            Diseñadora Gráfica & Comunicadora Audiovisual
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in-up animation-delay-400">
          <Link href="https://www.behance.net/ariadnazamora2" className="hover:text-primary-400 transition-colors">
          <Button className="bg-primary-500 hover:bg-primary-600 text-white font-sans">
              Mi Behance
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
            <Button variant="outline" className="border-white text-black hover:bg-gray font-sans" onClick={handlePlayButtonClick}>
              <Play className="mr-2 h-4 w-4" />
              Play Showreel
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
