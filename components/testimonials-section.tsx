"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"
import { useRef, useEffect } from "react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "JEE Advanced Qualifier, Class 12",
    avatar: "/indian-male-student-smiling-portrait.jpg",
    content:
      "UDAAN SIGMA's teaching methodology is exceptional. The faculty's dedication and regular tests helped me understand difficult concepts easily. The mentorship program guided me throughout my preparation journey.",
    type: "Student",
  },
  {
    name: "Priya Sharma",
    role: "NEET Qualifier, Class 12",
    avatar: "/indian-female-student-happy-portrait.jpg",
    content:
      "Joining UDAAN SIGMA was the best decision for my NEET preparation. The Biology faculty explained every topic with clarity. The regular mock tests and performance analysis helped me improve consistently.",
    type: "Student",
  },
  {
    name: "Mrs. Sunita Verma",
    role: "Parent of Amit Verma (Class 10)",
    avatar: "/indian-mother.jpg",
    content:
      "As a parent, I'm impressed with UDAAN SIGMA's disciplined environment and regular communication. My son's grades improved significantly, and he developed a genuine interest in Science and Mathematics.",
    type: "Parent",
  },
  {
    name: "Vikram Singh",
    role: "Foundation Student, Class 9",
    avatar: "/indian-male-teenager-student-confident.jpg",
    content:
      "The Foundation course at UDAAN SIGMA built my concepts from scratch. Teachers make complex topics easy to understand. The safe and friendly atmosphere helps me focus on studies better.",
    type: "Student",
  },
  {
    name: "Mr. Rajendra Patel",
    role: "Parent of Neha Patel (Class 11)",
    avatar: "/indian-father.jpg",
    content:
      "UDAAN SIGMA provides excellent mentorship and individual attention to students. The result-oriented approach and experienced faculty give us confidence in our daughter's academic future.",
    type: "Parent",
  },
  {
    name: "Ananya Reddy",
    role: "Olympiad Gold Medalist, Class 10",
    avatar: "/indian-female-student-glasses-smiling.jpg",
    content:
      "The Olympiad preparation program is outstanding. Faculty taught us advanced problem-solving techniques that helped me win a gold medal in the National Science Olympiad. Thank you, UDAAN SIGMA!",
    type: "Student",
  },
]

export function TestimonialsSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleMouseMove = (index: number) => (e: MouseEvent) => {
      const card = cardRefs.current[index]
      if (!card) return

      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = ((y - centerY) / centerY) * -8
      const rotateY = ((x - centerX) / centerX) * 8

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`
    }

    const handleMouseLeave = (index: number) => () => {
      const card = cardRefs.current[index]
      if (!card) return
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)"
    }

    cardRefs.current.forEach((card, index) => {
      if (card) {
        const moveHandler = handleMouseMove(index)
        const leaveHandler = handleMouseLeave(index)
        card.addEventListener("mousemove", moveHandler)
        card.addEventListener("mouseleave", leaveHandler)
      }
    })
  }, [])

  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Student & Parent Testimonials
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground leading-relaxed">
            Hear what our students and their parents say about UDAAN SIGMA
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className="border-border bg-card hover:shadow-lg transition-all duration-300"
              style={{ transformStyle: "preserve-3d" }}
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-accent/20 mb-4" />
                <p className="mb-6 text-muted-foreground leading-relaxed italic">{testimonial.content}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
