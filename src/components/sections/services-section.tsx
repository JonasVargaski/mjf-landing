import { Carousel } from '../carousel'

const images = Array.from({ length: 6 }).map(
  (_, i) => `https://swiperjs.com/demos/images/nature-${i + 1}.jpg`,
)

const services = [
  { title: 'Venda e manutenção de portas de rolo.', images },
  { title: 'Portões basculantes, deslizantes e guilhotina', images },
  { title: 'Projetos especiais', images },
  { title: 'ACM', images },
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
