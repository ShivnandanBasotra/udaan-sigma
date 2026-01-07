"use client"

import { useEffect, useRef } from "react"

export function ImageParallax() {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const xPos = (clientX / innerWidth - 0.5) * 20
      const yPos = (clientY / innerHeight - 0.5) * 20

      imageRef.current.style.transform = `perspective(1000px) rotateY(${xPos}deg) rotateX(${-yPos}deg) scale3d(1.05, 1.05, 1.05)`
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="relative hidden lg:block">
      <div
        ref={imageRef}
        className="aspect-square overflow-hidden rounded-2xl bg-muted transition-transform duration-300 ease-out shadow-2xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        <img
          src="/diverse-indian-students-studying-together-in-moder.jpg"
          alt="Udaan Sigma Jammu - IIT-JEE, NEET, Olympiad coaching students"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}