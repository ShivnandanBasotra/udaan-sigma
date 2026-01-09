import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ImageParallax } from "./hero-section-image"

export function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 sm:py-32 lg:py-15"
      itemScope 
      itemType="https://schema.org/EducationalOrganization"
    >
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

            <h1 
              className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl animate-fade-in-up"
              itemProp="name"
            >
              UDAAN SIGMA
            </h1>

            <h2 
              className="mb-4 text-2xl sm:text-3xl font-bold text-accent animate-fade-in-up animation-delay-200"
              itemProp="slogan"
            >
              Rise Beyond Limits
            </h2>

            <p 
              className="mb-10 text-pretty text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up animation-delay-400"
              itemProp="description"
            >
              Premier Coaching Institute in <strong>Vijaypur</strong>, <strong>Jammu</strong> for{" "}
              <strong>IIT-JEE</strong> | <strong>NEET</strong> | <strong>Olympiad</strong> |{" "}
              <strong>Foundation</strong> courses.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up animation-delay-600">
              <Button
                size="lg"
                className="text-base group bg-destructive hover:bg-destructive/90 text-destructive-foreground hover-lift"
                asChild
              >
                <a 
                  href="https://forms.gle/LoJzLTheoSzWJPnv7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Register for Scholarship Test at Udaan Sigma"
                >
                  Register for Scholarship Test
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-lift"
                asChild
              >
                <a 
                  href="https://wa.me/919186162194" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  itemProp="contactPoint"
                  aria-label="Contact Udaan Sigma on WhatsApp"
                >
                  Contact Us
                </a>
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 text-center" role="list" aria-label="Udaan Sigma Statistics">
              <div className="animate-fade-in-up animation-delay-800 hover-scale" role="listitem">
                <div className="text-3xl sm:text-4xl font-bold text-foreground">1500+</div>
                <div className="mt-1 text-sm text-muted-foreground">Students Enrolled</div>
              </div>
              <div className="animate-fade-in-up animation-delay-1000 hover-scale" role="listitem">
                <div className="text-3xl sm:text-4xl font-bold text-foreground">15+</div>
                <div className="mt-1 text-sm text-muted-foreground">Expert Faculty</div>
              </div>
              <div className="animate-fade-in-up animation-delay-1200 hover-scale" role="listitem">
                <div className="text-3xl sm:text-4xl font-bold text-foreground">95%</div>
                <div className="mt-1 text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          <ImageParallax/>
        </div>
      </div>
    </section>
  )
}