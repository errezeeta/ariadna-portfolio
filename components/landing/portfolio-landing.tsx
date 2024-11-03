"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Component() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [fade, setFade] = useState(true)
  const [images, setImages] = useState([
    "https://mir-s3-cdn-cf.behance.net/project_modules/fs/5a0ab2183225387.653b9b463b953.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/fs/8d495e183225387.653b9b46397a2.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/fs/5904df183225387.653b9b4635704.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/fs/14874d183228135.653ba5517515d.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/fs/2ee1c0183228135.653ba5f018a4c.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/fs/f92d22183223835.653b95aac89f1.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/fs/b322e3183223835.653b95aacd937.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/fs/daf952183223835.653b95aac7be7.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/fs/3aa4ab183223835.653b95aad1607.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/fs/1e9167183223835.653b95aad0b15.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/fs/6f2adc183223835.653b95aace447.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/fs/374091183223293.653b93714bcd2.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/fs/cf10c9183223293.653b93714cc61.jpg"
  ])
  const router = useRouter()

  // Mezcla aleatoriamente el array de imágenes al inicio
  useEffect(() => {
    const shuffledImages = [...images].sort(() => Math.random() - 0.5)
    setImages(shuffledImages)
  }, [])

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined
    if (isPlaying) {
      interval = setInterval(() => {
        setFade(false)
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
          setFade(true)
        }, 500)
      }, 3000)
    }
    return () => clearInterval(interval)
  }, [isPlaying, images.length])

  const handlePlayButtonClick = () => {
    router.push("/videobook")
  }

  return (
    <>
      <Header />
      <div className="relative min-h-screen bg-black text-white">
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
              Audiovisual & Graphic Designer
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
      <Footer />
    </>
  )
}
