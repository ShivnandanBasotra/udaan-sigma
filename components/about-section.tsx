import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6">
              About UDAAN SIGMA
            </h2>
            <p className="text-pretty text-lg text-muted-foreground leading-relaxed mb-6">
              UDAAN SIGMA is India's premium academic coaching institute delivering disciplined, results-driven
              education for IIT-JEE, NEET, Olympiad, and Foundation courses. With our tagline{" "}
              <span className="font-semibold text-secondary">"Rise Beyond Limits"</span>, we empower students to unlock
              their full potential and achieve academic excellence.
            </p>
            <p className="text-pretty text-lg text-muted-foreground leading-relaxed mb-8">
              Our experienced faculty combines quality education with conceptual clarity, discipline, and personalized
              mentorship. We don't just prepare students for exams—we shape future engineers, doctors, and leaders who
              make meaningful contributions to society.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="border-primary/20 bg-primary/5 hover-lift">
                <CardContent className="p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-card-foreground">Our Mission</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Deliver quality education with conceptual clarity, discipline, and mentorship to help every student
                    achieve their dreams.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 bg-accent/5 hover-lift">
                <CardContent className="p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <Eye className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="mb-2 font-semibold text-card-foreground">Our Vision</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Create future engineers, doctors, and achievers who excel in their chosen fields and drive
                    nation-building.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-secondary/30 bg-secondary/5 sm:col-span-2 hover-lift">
                <CardContent className="p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                    <Heart className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-card-foreground">Our Values</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Trust, Excellence, Results, and Mentorship define our approach. We build strong foundations and
                    nurture academic discipline in every student.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative perspective-1000">
            <div className="aspect-square overflow-hidden rounded-2xl bg-muted shadow-2xl hover-scale transition-transform duration-500">
              <img
                src="/indian-students-in-classroom-studying-physics-chem.jpg"
                alt="Students learning at UDAAN SIGMA - disciplined academic environment"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
