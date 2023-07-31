import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { RootProviders } from './providers'
import { WhatsAppFloat } from '@/components/ui/whatsapp-float'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MJF Soluções Metálicas',
  description: 'Projetos sob medida e montagens de portas e portões',
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
