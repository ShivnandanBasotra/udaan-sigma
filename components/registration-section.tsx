import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export function RegistrationSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Card className="border-primary/20 overflow-hidden">
            <CardContent className="p-8 sm:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Register for Admission</h2>
                <p className="text-lg text-muted-foreground">Fill out the form to begin your journey towards success</p>
              </div>

              <div className="space-y-6">
                <div className="aspect-video bg-gradient-to-br from-destructive/90 to-destructive rounded-lg flex items-center justify-center border border-destructive/30 shadow-lg">
                  <div className="text-center p-6">
                    <a href="https://forms.gle/LoJzLTheoSzWJPnv7" target="_blank" rel="noopener noreferrer">
                      <Button
                        size="lg"
                        className="bg-white hover:bg-white/90 text-destructive px-16 py-6 text-lg font-semibold shadow-xl"
                      >
                        <ExternalLink className="mr-2 h-5 w-5" />
                        Open Registration Form
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <p className="text-sm text-muted-foreground">
                    Need help? Call us at <span className="font-semibold text-foreground">7780966332</span> or{" "}
                    <span className="font-semibold text-foreground">9186162194</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
