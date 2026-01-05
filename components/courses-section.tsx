"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Target } from "lucide-react"
import { useRef, useEffect } from "react"

const courses = [
  {
    title: "Foundation Course",
    description:
      "Build strong fundamentals for competitive exams from early grades. Comprehensive coverage of Science and Mathematics with conceptual clarity.",
    level: "Class 8-10",
    subjects: "Science, Mathematics",
    outcome: "Strong foundation for JEE/NEET preparation",
    image: "/foundation-students-learning-science-mathematics.jpg",
  },
  {
    title: "IIT-JEE Foundation & Advanced",
    description:
      "Complete preparation for JEE Main and Advanced with expert faculty. Daily practice problems, regular tests, and doubt-clearing sessions.",
    level: "Class 11-12",
    subjects: "Physics, Chemistry, Mathematics",
    outcome: "Crack JEE with top ranks",
    image: "/iit-jee-physics-mathematics-preparation.jpg",
  },
  {
    title: "NEET Foundation & Preparation",
    description:
      "Comprehensive NEET coaching with focus on Biology, Physics, and Chemistry. NCERT-based teaching with previous year questions practice.",
    level: "Class 11-12",
    subjects: "Biology, Physics, Chemistry",
    outcome: "Secure admission in top medical colleges",
    image: "/neet-medical-biology-preparation.jpg",
  },
  {
    title: "Olympiad Preparation",
    description:
      "Specialized training for Science and Mathematics Olympiads. Advanced problem-solving techniques and competition strategies.",
    level: "Class 8-12",
    subjects: "Science, Mathematics",
    outcome: "Excel in national and international Olympiads",
    image: "/young-students-foundation-mathematics-learning.jpg",
  },
]

export function CoursesSection() {
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

      const rotateX = ((y - centerY) / centerY) * -10
      const rotateY = ((x - centerX) / centerX) * 10

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    }

    const handleMouseLeave = (index: number) => () => {
      const card = cardRefs.current[index]
      if (!card) return
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    }

    cardRefs.current.forEach((card, index) => {
      if (card) {
        const moveHandler = handleMouseMove(index)
        const leaveHandler = handleMouseLeave(index)
        card.addEventListener("mousemove", moveHandler)
        card.addEventListener("mouseleave", leaveHandler)

        card.dataset.moveHandler = "attached"
      }
    })

    return () => {
      cardRefs.current.forEach((card) => {
        if (card && card.dataset.moveHandler) {
          card.removeEventListener("mousemove", () => {})
          card.removeEventListener("mouseleave", () => {})
        }
      })
    }
  }, [])

  return (
    <section id="courses" className="py-20 sm:py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Courses Offered
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground leading-relaxed">
            Comprehensive programs designed to help you excel in competitive exams
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {courses.map((course, index) => (
            <Card
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className="flex flex-col overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-300"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative h-56 overflow-hidden bg-muted group">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground border-0">
                  {course.level}
                </Badge>
              </div>
              <CardHeader className="pb-4">
                <h3 className="text-xl font-bold text-card-foreground">{course.title}</h3>
              </CardHeader>
              <CardContent className="flex-1 pb-4">
                <p className="text-muted-foreground leading-relaxed mb-4">{course.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <BookOpen className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Subjects: </span>
                      <span className="text-muted-foreground">{course.subjects}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Target className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Outcome: </span>
                      <span className="text-muted-foreground">{course.outcome}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                  <a href="https://forms.gle/LoJzLTheoSzWJPnv7" target="_blank" rel="noopener noreferrer">
                    Enroll Now
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
