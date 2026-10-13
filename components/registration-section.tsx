import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

const registrationUrl = "https://itslancer.com/udaan-sigma"
const posterUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1580b0cb-8091-48ac-8955-3d1256946edd-lyhyXRyd1Ki97XyaVe7NgbAplTCfN4.jpeg"

export function RegistrationSection() {
  return (
    <section className="bg-gradient-to-b from-primary/5 to-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="mx-auto max-w-6xl overflow-hidden border-primary/20 bg-card/95 shadow-xl">
          <CardContent className="p-0">
            <div className="flex flex-col">
              <div className="relative aspect-[2/1] w-full overflow-hidden bg-muted">
                <Image
                  src={posterUrl}
                  alt="Udaan Sigma Super Scholar Challenge poster"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 767px) 100vw, 62vw"
                  priority
                />
              </div>

              <div className="flex flex-col justify-center gap-5 p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col gap-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Admissions open</p>
                  <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">US TSE Super Scholar Challenge</h2>
                  <p className="text-muted-foreground">A prestigious talent search and scholarship examination for students of Classes 8, 9, and 10.</p>
                </div>

                <div className="grid gap-3 text-sm text-foreground sm:grid-cols-2 lg:grid-cols-1">
                  <div className="rounded-lg bg-muted/70 p-4"><strong>Scholarship:</strong> Up to ₹2,100 per month</div>
                  <div className="rounded-lg bg-muted/70 p-4"><strong>Exam sessions:</strong> November and April</div>
                  <div className="rounded-lg bg-muted/70 p-4"><strong>Recognition:</strong> 6 super scholars across Classes 8–10</div>
                </div>

                <a href={registrationUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button size="lg" className="w-full text-base font-semibold">
                    Register now at itslancer.com
                    <ExternalLink data-icon="inline-end" />
                  </Button>
                </a>

                <p className="text-center text-xs text-muted-foreground">Need help? Call 9797979693, 7780966332, or 9186162194.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
