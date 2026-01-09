import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { CoursesSection } from "@/components/courses-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { LocationsSection } from "@/components/locations-section";
import { RegistrationSection } from "@/components/registration-section";
import { ResultsSection } from "@/components/results-section";
import { ScholarshipSection } from "@/components/scholarship-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { WhyChooseSection } from "@/components/why-choose-section";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection/>
      <CoursesSection />
      <ScholarshipSection />
      <WhyChooseSection/>
      {/* <ResultsSection/> */}
      <TestimonialsSection />
      <LocationsSection />
      <RegistrationSection />
      <ContactSection />
      <Footer/>
      <WhatsAppButton />
    </main>
  )
}
