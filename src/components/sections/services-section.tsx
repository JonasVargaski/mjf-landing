import dynamic from 'next/dynamic'

const Carousel = dynamic(async () => {
  const { Carousel: Component } = await import('@/components/carousel')
  return { default: Component }
})

const services = [
  {
    title: 'Portas de rolo',
    images: [
      '/servicos/portao-1.jpeg',
      '/servicos/portao-4.jpeg',
      '/servicos/portao-5.jpeg',
      '/servicos/portao-6.jpeg',
      '/servicos/portao-7.jpeg',
    ],
  },
  {
    title: 'Portas seccionadas',
    images: [
      '/servicos/seccionada-1.jpeg',
      '/servicos/seccionada-2.jpeg',
      '/servicos/seccionada-3.jpeg',
      '/servicos/seccionada-4.jpeg',
      '/servicos/seccionada-5.jpeg',
    ],
  },
  {
    title: 'Portões basculantes, deslizantes e guilhotina',
    images: [
      '/servicos/portao-2.jpeg',
      '/servicos/portao-correr-1.webp',
      '/servicos/portao-3.jpeg',
    ],
  },
  {
    title: 'Projetos especiais',
    images: [
      '/servicos/especial-0.jpeg',
      '/servicos/especial-1.jpeg',
      '/servicos/especial-2.jpeg',
      '/servicos/especial-3.jpeg',
      '/servicos/especial-4.jpeg',
      '/servicos/especial-5.jpeg',
      '/servicos/especial-6.jpeg',
      '/servicos/especial-7.jpeg',
      '/servicos/especial-8.jpeg',
      '/servicos/especial-9.jpeg',
      '/servicos/especial-10.jpeg',
      '/servicos/especial-11.jpeg',
    ],
  },
  {
    title: 'ACM',
    images: [
      '/servicos/acm-0.jpeg',
      '/servicos/acm-1.jpeg',
      '/servicos/porta-1.jpeg',
    ],
  },
  {
    title: 'Revestimentos especiais',
    images: [
      '/servicos/revestimento-1.jpeg',
      '/servicos/revestimento-2.jpeg',
      '/servicos/revestimento-3.jpeg',
      '/servicos/revestimento-4.jpeg',
      '/servicos/revestimento-5.jpeg',
    ],
  },
]

export function ServicesSection() {
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
        {services.map((service) => (
          <li
            key={service.title}
            className="relative rounded-sm shadow-2xl w-full group"
          >
            <Carousel images={service.images} />
            <div className="absolute -right-5 top-[90%] bg-orange-400 rounded-sm px-7 py-3 group-hover:translate-y-8 group-hover:-translate-x-2 transition-transform duration-500 shadow-lg z-10 max-w-[85%]">
              <p className="text-xl font-medium text-white">{service.title}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
