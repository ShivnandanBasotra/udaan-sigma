import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Trophy, Gift, Award } from "lucide-react"

export function ScholarshipSection() {
  return (
    <section id="scholarship" className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            UDAAN SIGMA Scholarship & Admission Test
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Unlock your potential with our scholarship program. Win exciting prizes and get up to 100% scholarship!
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
                  <h3 className="text-xl font-bold text-foreground">Test Details</h3>
                  <p className="text-sm text-muted-foreground">Important information</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">Exam Dates</p>
                  <p className="text-lg font-bold text-foreground">31 January & 1 February</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">Eligibility</p>
                  <p className="text-lg font-bold text-foreground">Classes 8 | 9 | 10 | 11</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">Exam Pattern</p>
                  <p className="text-base text-foreground">Objective Type (MCQs)</p>
                  <p className="text-sm text-muted-foreground">Olympiad & JEE/NEET Foundation Oriented</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-accent/20 bg-gradient-to-br from-accent/5 to-background hover-lift">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Prizes & Scholarships</h3>
                  <p className="text-sm text-muted-foreground">Rewards for excellence</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">1st Prize</p>
                    <p className="text-sm text-muted-foreground">Apple iPad + 100% Scholarship</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">2nd Prize</p>
                    <p className="text-sm text-muted-foreground">Sports Cycle + 75% Scholarship</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">3rd–5th Prize</p>
                    <p className="text-sm text-muted-foreground">Smart Watch + 50% Scholarship</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pt-2 border-t border-border">
                  <Gift className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-destructive">Special Offer</p>
                    <p className="text-sm text-muted-foreground">
                      Flat 10% discount for all participants (No minimum marks condition)
                    </p>
                  </div>
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
            <a href="https://forms.gle/LoJzLTheoSzWJPnv7" target="_blank" rel="noopener noreferrer">
              Register Now for Scholarship Test
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
