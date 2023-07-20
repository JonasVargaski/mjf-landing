import { Header } from '@/components/header'
import { AboutSection } from '@/components/sections/about-section'
import { BannerSection } from '@/components/sections/banner-section'
import { ContactSection } from '@/components/sections/contact-section'
import { FaqSection } from '@/components/sections/faq-section'
import { FooterSection } from '@/components/sections/footer-section'

import { ServicesSection } from '@/components/sections/services-section'
import { Icons } from '@/components/ui/icons'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="relative h-screen w-full">
        <Image
          src="/bg-mjf.jpg.webp"
          alt="bg-banner"
          fill
          className="absolute -z-[2] inset-0"
        />
        <div className="absolute -z-[1] inset-0 opacity-90 bg-gradient-to-r from-black 53% to-[#0b0b0bc0]" />
        <Header />
        <BannerSection />
      </div>
      <ServicesSection />
      <AboutSection />
      <FaqSection />
      <ContactSection />
      <FooterSection />
      <div className="fixed bottom-6 right-4 z-50 text-white">
        <a
          className="inline-block group h-16 w-h-16 rounded-full shadow-lg bg-green-400 p-3"
          href="https://wa.me/5548988126955?text=Olá, vim através do site e gostaria de solicitar um orçamento"
          target="_blank"
          aria-label="Whatsapp"
        >
          <span className="absolute hidden group-hover:flex -left-4 -top-3 -translate-y-full px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
            Precisa de ajuda?
          </span>
          <Icons.WhatsApp />
        </a>
      </div>
    </div>
  )
}
