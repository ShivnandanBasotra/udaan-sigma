import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, BookOpen, CheckCircle2, Users } from "lucide-react"

export function WorkshopSection() {
  return (
    <section id="workshop" className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            21 Day Mind Training & Career Counselling Workshop
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transform your future with focused training, career clarity, and practical techniques to unlock your potential!
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-12">
          <Card className="border-primary/20 hover-lift">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Workshop Details</h3>
                  <p className="text-sm text-muted-foreground">Important information</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">Program Duration</p>
                  <p className="text-lg font-bold text-foreground">21 Days (11 March - 31 March 2026)</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">Eligibility</p>
                  <p className="text-lg font-bold text-foreground">Classes 8 | 9 | 10 | 11</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">Who Should Attend?</p>
                  <ul className="text-sm text-foreground space-y-1">
                    <li>✓ Students seeking career clarity</li>
                    <li>✓ Focused discipline development</li>
                    <li>✓ Exam stress management</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-accent/20 bg-gradient-to-br from-accent/5 to-background hover-lift">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">What You'll Learn</h3>
                  <p className="text-sm text-muted-foreground">Workshop delivers</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-foreground">Clear Career Roadmap & Stream Selection</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-foreground">Focus & Self-Discipline Development</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-foreground">Exam Stress Management System</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-foreground">Smart Study Techniques</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-foreground">Decision-Making Confidence</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="text-lg px-8 bg-destructive hover:bg-destructive/90 text-destructive-foreground font-semibold hover-lift"
            asChild
          >
            <a href="https://forms.gle/RrAR2kiHo3QAHL1NA" target="_blank" rel="noopener noreferrer">
              Register Now for Workshop
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
