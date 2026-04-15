'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const Carousel = dynamic(async () => {
  const { Carousel: Component } = await import('@/components/carousel')
  return { default: Component }
})

const services = [
  { title: 'Portas de rolo', path: 'portas-de-rolo' },
  { title: 'Portas seccionadas', path: 'seccionadas' },
  { title: 'Projetos especiais', path: 'especiais' },
  { title: 'ACM', path: 'acm' },
  { title: 'Estruturas metálicas', path: 'estruturas' },
  { title: 'Mezanino', path: 'mezanino' },
]

export function ServicesSection() {
  const [images, setImages] = useState<Record<string, string[]>>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all(
      services.map(async (s) => {
        const res = await fetch(`/api/services?path=${s.path}`)
        const data: string[] = await res.json()
        return [s.path, data] as const
      }),
    )
      .then((results) => {
        setImages(Object.fromEntries(results))
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="servicos" className="w-full bg-slate-100 py-20">
      <div className="container text-center">
        <h3 className="text-4xl mt-1 font-medium">Nossos serviços</h3>
        <p className="text-lg mt-2">
          Abaixo apresentamos alguns dos principais serviços oferecidos pela MJF
          soluções metálicas.
        </p>
      </div>

      <ol className="container w-full grid grid-cols-1 md:grid-cols-2 justify-around gap-20 mt-14">
        {services.map((service) => {
          const imgs = loading ? [] : images[service.path] ?? []
          const hasImages = !loading && imgs.length > 0
          return (
            <li
              key={service.title}
              className="relative rounded-sm shadow-2xl w-full group"
            >
              {loading && <Skeleton className="w-full h-96 rounded-lg" />}
              {hasImages && <Carousel images={imgs} />}
              <div className="absolute -right-5 top-[90%] bg-orange-400 rounded-sm px-7 py-3 group-hover:translate-y-8 group-hover:-translate-x-2 transition-transform duration-500 shadow-lg z-10 max-w-[85%]">
                <p className="text-xl font-medium text-white">
                  {service.title}
                </p>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
