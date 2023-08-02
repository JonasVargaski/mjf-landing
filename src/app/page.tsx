import { Header } from '@/components/header'
import { AboutSection } from '@/components/sections/about-section'
import { BannerSection } from '@/components/sections/banner-section'
import { ContactSection } from '@/components/sections/contact-section'
import { FaqSection } from '@/components/sections/faq-section'
import { FooterSection } from '@/components/sections/footer-section'

import { ServicesSection } from '@/components/sections/services-section'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen w-full">
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
    </>
  )
}
