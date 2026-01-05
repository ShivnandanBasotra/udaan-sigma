"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Star, TrendingUp } from "lucide-react"
import { useRef, useEffect } from "react"

export function ResultsSection() {
  const achievements = [
    {
      name: "Rajesh Kumar",
      achievement: "AIR 145 in JEE Advanced",
      course: "IIT-JEE Preparation",
      image: "/indian-male-student-smiling-portrait.jpg",
    },
    {
      name: "Priya Sharma",
      achievement: "AIR 89 in NEET",
      course: "NEET Preparation",
      image: "/indian-female-student-happy-portrait.jpg",
    },
    {
      name: "Amit Singh",
      achievement: "98.5% in Class 10 Boards",
      course: "Foundation Program",
      image: "/indian-male-teenager-student-confident.jpg",
    },
    {
      name: "Neha Patel",
      achievement: "Gold Medal in National Science Olympiad",
      course: "Olympiad Preparation",
      image: "/indian-female-student-glasses-smiling.jpg",
    },
  ]

  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleMouseEnter = (index: number) => () => {
      const card = cardRefs.current[index]
      if (!card) return
      card.style.transform = "translateY(-10px) scale(1.05) rotateY(5deg)"
    }

    const handleMouseLeave = (index: number) => () => {
      const card = cardRefs.current[index]
      if (!card) return
      card.style.transform = "translateY(0) scale(1) rotateY(0deg)"
    }

    cardRefs.current.forEach((card, index) => {
      if (card) {
        const enterHandler = handleMouseEnter(index)
        const leaveHandler = handleMouseLeave(index)
        card.addEventListener("mouseenter", enterHandler)
        card.addEventListener("mouseleave", leaveHandler)
      }
    })
  }, [])

  return (
    <section id="results" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 mb-4 animate-float">
            <Trophy className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Our Pride</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Results & Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our students' success is our greatest achievement
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {achievements.map((student, index) => (
            <Card
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className="border-border/50 overflow-hidden hover:shadow-lg transition-all duration-300"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="aspect-square bg-muted overflow-hidden group">
                <img
                  src={student.image || "/placeholder.svg"}
                  alt={student.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 text-accent fill-accent" />
                  <h3 className="font-bold text-foreground">{student.name}</h3>
                </div>
                <p className="text-sm font-semibold text-primary mb-1">{student.achievement}</p>
                <p className="text-xs text-muted-foreground">{student.course}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-lg bg-primary/5 border border-primary/20 hover-scale animate-pulse">
            <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold text-foreground mb-1">500+</div>
            <div className="text-sm text-muted-foreground">Students Qualified</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-accent/5 border border-accent/20 hover-scale animate-pulse">
            <Trophy className="h-8 w-8 text-accent mx-auto mb-3" />
            <div className="text-3xl font-bold text-foreground mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Top 100 Rankers</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-primary/5 border border-primary/20 hover-scale animate-pulse">
            <Star className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold text-foreground mb-1">95%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}
