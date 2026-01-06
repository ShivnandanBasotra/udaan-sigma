"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"

export function HeroSection() {
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
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm animate-float">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
              </span>
              <span className="text-muted-foreground">Scholarship Test on 31 Jan & 1 Feb</span>
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl animate-fade-in-up">
              UDAAN SIGMA
            </h1>

            <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-accent animate-fade-in-up animation-delay-200">
              Rise Beyond Limits
            </h2>

            <p className="mb-10 text-pretty text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up animation-delay-400">
              Premier Institute for <span className="font-semibold text-foreground">IIT-JEE</span> |{" "}
              <span className="font-semibold text-foreground">NEET</span> |{" "}
              <span className="font-semibold text-foreground">Olympiad</span> |{" "}
              <span className="font-semibold text-foreground">Foundation</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up animation-delay-600">
              <Button
                size="lg"
                className="text-base group bg-destructive hover:bg-destructive/90 text-destructive-foreground hover-lift"
                asChild
              >
                <a href="https://forms.gle/LoJzLTheoSzWJPnv7" target="_blank" rel="noopener noreferrer">
                  Register for Scholarship Test
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-lift"
                asChild
              >
                <a href="https://wa.me/919186162194" target="_blank" rel="noopener noreferrer">
                  Contact Us
                </a>
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 text-center">
              <div className="animate-fade-in-up animation-delay-800 hover-scale">
                <div className="text-3xl sm:text-4xl font-bold text-foreground">1500+</div>
                <div className="mt-1 text-sm text-muted-foreground">Students Enrolled</div>
              </div>
              <div className="animate-fade-in-up animation-delay-1000 hover-scale">
                <div className="text-3xl sm:text-4xl font-bold text-foreground">15+</div>
                <div className="mt-1 text-sm text-muted-foreground">Expert Faculty</div>
              </div>
              <div className="animate-fade-in-up animation-delay-1200 hover-scale">
                <div className="text-3xl sm:text-4xl font-bold text-foreground">95%</div>
                <div className="mt-1 text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div
              ref={imageRef}
              className="aspect-square overflow-hidden rounded-2xl bg-muted transition-transform duration-300 ease-out shadow-2xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              <img
                src="/diverse-indian-students-studying-together-in-moder.jpg"
                alt="Confident Indian students in academic environment"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
