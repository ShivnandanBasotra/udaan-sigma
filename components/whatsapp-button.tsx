"use client"

import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919186162194?text=Hi, I want to know more about UDAAN SIGMA courses", "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg p-0 animate-whatsapp-pulse"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 48 48" className="h-9 w-9" fill="currentColor">
        <path d="M24 0C10.745 0 0 10.745 0 24c0 4.243 1.107 8.229 3.041 11.688L.238 46.476l11.032-2.893C14.651 45.86 19.182 47 24 47c13.255 0 24-10.745 24-24S37.255 0 24 0zm11.13 33.758c-.458 1.293-2.701 2.507-3.711 2.652-1.01.145-1.01.676-6.425-1.334-5.415-2.01-8.882-7.555-9.15-7.902-.268-.347-2.186-2.908-2.186-5.547 0-2.639 1.384-3.935 1.875-4.47.491-.535 1.072-.668 1.429-.668.357 0 .714.003 1.027.019.329.015.771-.125 1.205.92.438 1.054 1.5 3.66 1.63 3.926.131.267.221.579.045.926-.176.347-.265.564-.533.873-.268.308-.563.688-.804.923-.268.262-.547.546-.235.1.312.535 1.384 2.284 2.974 3.699 2.043 1.817 3.764 2.381 4.298 2.649.534.268.846.223 1.157-.134.312-.357 1.339-1.563 1.696-2.098.357-.535.714-.446 1.205-.268.491.179 3.125 1.473 3.66 1.742.534.268.891.402 1.018.626.128.223.128 1.293-.33 2.586z" />
      </svg>
    </Button>
  )
}
