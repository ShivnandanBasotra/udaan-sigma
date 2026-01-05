import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award } from "lucide-react"

export function WhyChooseSection() {
  const features = [
    {
      icon: Users,
      title: "Experienced Faculty",
      description: "Learn from IIT and medical college alumni with proven teaching expertise and mentorship",
    },
    {
      icon: Target,
      title: "Regular Tests & Mentorship",
      description: "Weekly assessments with detailed performance analysis and personalized guidance",
    },
    {
      icon: Award,
      title: "Result-Oriented Learning",
      description: "Proven strategies and systematic approach that consistently delivers outstanding results",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose UDAAN SIGMA</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect blend of trust, discipline, and academic excellence
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/50 transition-all hover-lift preserve-3d"
              >
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
