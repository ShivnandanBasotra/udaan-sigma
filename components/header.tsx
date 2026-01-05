"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Udaan Sigma Logo" width={40} height={40} className="h-10 w-10" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground leading-none">UDAAN SIGMA</span>
              <span className="text-[10px] text-secondary font-semibold leading-none">Rise Beyond Limits</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("courses")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection("scholarship")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Scholarship
            </button>
            <button
              onClick={() => scrollToSection("results")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Results
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>
          <div className="flex items-center gap-3">
            <Button
              className="text-sm bg-destructive hover:bg-destructive/90 text-destructive-foreground font-semibold"
              asChild
            >
              <a href="https://forms.gle/LoJzLTheoSzWJPnv7" target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/40">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("courses")}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Courses
              </button>
              <button
                onClick={() => scrollToSection("scholarship")}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Scholarship
              </button>
              <button
                onClick={() => scrollToSection("results")}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Results
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
