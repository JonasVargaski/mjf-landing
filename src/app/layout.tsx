import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { RootProviders } from './providers'
import { WhatsAppFloat } from '@/components/ui/whatsapp-float'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MJF Soluções Metálicas',
  description:
    'Projetos sob medida, montagens de portas e portões basculante, rolo e deslizante. Toda linha de estruturas metálicas.',
  keywords: [
    'mjf',
    'mjf metalicas',
    'mjf solucoes metalicas',
    'orleans',
    'serralheiria orleans',
    'portas de enrrolar',
    'portao orleans',
    'estruturas metálicas',
    'metálicas orleans',
    'projetos especiais',
    'porta de enrrolar',
    'portao de enrrolar',
    'portao de rolo',
    'portao elétrico',
    'moveis industriais',
  ],
  authors: {
    name: 'Jonas Vargaski',
    url: 'www.github.com/jonasvargaski',
  },
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    noimageindex: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        <RootProviders>{children}</RootProviders>
        <WhatsAppFloat />
      </body>
    </html>
  )
}
