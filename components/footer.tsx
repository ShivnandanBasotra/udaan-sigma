import Image from "next/image"
import { Mail, Phone, MapPin, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="UDAAN SIGMA" width={32} height={32} className="h-8 w-8" />
              <span className="text-xl font-bold text-card-foreground">UDAAN SIGMA</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-2">Rise Beyond Limits</p>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              Premier Institute for IIT-JEE | NEET | Olympiad | Foundation
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-card-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#courses" className="text-muted-foreground hover:text-foreground transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#scholarship" className="text-muted-foreground hover:text-foreground transition-colors">
                  Scholarship Test
                </a>
              </li>
              <li>
                <a href="#results" className="text-muted-foreground hover:text-foreground transition-colors">
                  Results
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-card-foreground">Courses</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#courses" className="text-muted-foreground hover:text-foreground transition-colors">
                  IIT-JEE Foundation & Advanced
                </a>
              </li>
              <li>
                <a href="#courses" className="text-muted-foreground hover:text-foreground transition-colors">
                  NEET Foundation & Preparation
                </a>
              </li>
              <li>
                <a href="#courses" className="text-muted-foreground hover:text-foreground transition-colors">
                  Foundation (Class 8-10)
                </a>
              </li>
              <li>
                <a href="#courses" className="text-muted-foreground hover:text-foreground transition-colors">
                  Olympiad Preparation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-card-foreground">Contact Details</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Near Arvind Ghosh Hr. Sec. School, Vijaypur</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <div>
                  <div>7780966332</div>
                  <div>9186162194</div>
                </div>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <span>info@udaansigma.in</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Globe className="h-4 w-4 flex-shrink-0 text-primary" />
                <span>www.udaansigma.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} UDAAN SIGMA. All rights reserved.</p>
          <p className="mt-1 text-xs text-accent font-medium">Rise Beyond Limits</p>
        </div>
      </div>
    </footer>
  )
}
