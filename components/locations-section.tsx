import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"

export function LocationsSection() {
  const locations = [
    {
      name: "UDAAN SIGMA Vijaypur",
      address: "Near Arvind Ghosh Hr. Sec. School, Vijaypur",
      isMain: true,
    },
    {
      name: "Vinod Vidya Mandir Centre",
      address: "Ghagwal",
      isMain: false,
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Centres & Locations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit us at our conveniently located coaching centres
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto mb-12">
          {locations.map((location, index) => (
            <Card
              key={index}
              className={`border-border/50 hover-lift ${location.isMain ? "border-primary/50 ring-2 ring-primary/20" : ""}`}
            >
              <CardContent className="p-6">
                {location.isMain && (
                  <div className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
                    Main Centre
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{location.name}</h3>
                    <p className="text-sm text-muted-foreground">{location.address}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" />
            <a href="tel:7780966332" className="text-muted-foreground hover:text-primary transition-colors">
              7780966332, 9186162194
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            <a href="mailto:info@udaansigma.in" className="text-muted-foreground hover:text-primary transition-colors">
              info@udaansigma.in
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
