import { cn } from '@/lib/utils'
import Image from 'next/image'

const partners = [
  {
    site: 'https://www.airduto.com.br/site/',
    name: 'Airduto',
    image: '/parceiros/airduto.png',
  },
  {
    site: 'https://more-sc.com.br/',
    name: 'More sinalização',
    image: '/parceiros/more-sinalizacao.png',
  },
  {
    site: 'https://maniacsroupasesportivas.com.br/maniacs-arena/',
    name: 'Maniacs arena',
    image: '/parceiros/maniacs-arena.webp',
  },
  {
    site: 'https://www.instagram.com/novamec1/',
    name: 'Nova mec tornearia',
    image: '/parceiros/novamec.png',
  },
  {
    site: '#',
    name: 'Mix som',
    image: '/parceiros/mix-som.png',
  },
  {
    site: 'https://www.instagram.com/moveis_hildo/',
    name: 'Móveis hildo',
    image: '/parceiros/moveis hildo.png',
  },
  {
    site: 'https://www.instagram.com/epicprint_ltd/',
    name: 'Epic print comunicação visual',
    image: '/parceiros/epic_print.png',
  },
]

export function BannerSection() {
  return (
    <main
      id="inicio"
      className="container w-full min-h-[86vh] flex flex-1 flex-col items-center justify-between text-white"
    >
      <span />
      <h1 className="text-2xl md:text-4xl font-medium  text-center">
        Descubra a excelência em serralheria com a{' '}
        <b className="block">MJF Soluções Metálicas!</b>
      </h1>
      <div>
        <span className="text-center font-medium mt-4 block">
          Nossos parceiros:
        </span>
        <div className="flex items-center relative w-full snap-x snap-mandatory overflow-x-auto px-2 gap-7 mt-3 pb-7 no-scrollbar">
          {partners.map((partner) => (
            <a
              className="snap-center shrink-0"
              aria-label={`parceiro comercial ${partner.name}`}
              href={partner.site}
              target="_blank"
            >
              <Image
                className={cn(
                  'transition-all hover:scale-125 min-w-max',
                  partner.name.includes('Móveis hildo') && `h-16 w-16`,
                  partner.name.includes('Maniacs arena') && `h-14 w-16`,
                )}
                key={partner.name}
                src={partner.image}
                alt={partner.name}
                width={90}
                height={60}
              />
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
