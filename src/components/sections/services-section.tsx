import Image from 'next/image'

const services = [
  {
    title: 'Venda e manutenção de portas de rolo.',
    image:
      'https://www.aunidas.com.br/imagens/informacoes/portao-enrolar-garagem-02.jpg',
  },
  {
    title: 'Portões basculantes, deslizantes e guilhotina',
    image:
      'https://www.aunidas.com.br/imagens/informacoes/portao-enrolar-garagem-02.jpg',
  },
  {
    title: 'Projetos especiais',
    image:
      'https://www.aunidas.com.br/imagens/informacoes/portao-enrolar-garagem-02.jpg',
  },
  {
    title: 'ACM',
    image:
      'https://www.aunidas.com.br/imagens/informacoes/portao-enrolar-garagem-02.jpg',
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="w-full bg-slate-100">
      <div className="container flex flex-col items-center gap-14 py-20">
        <div className="text-center">
          <h3 className="text-4xl mt-1 font-medium">Nossos serviços</h3>
          <p className="text-lg mt-2">
            Abaixo apresentamos alguns dos principais serviços oferecidos pela
            MJF soluções metálicas.
          </p>
        </div>
        <ol className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-around gap-16">
          {services.map((service) => (
            <li
              key={service.title}
              className="relative rounded-sm shadow-2xl w-full aspect-square group"
            >
              <div className="w-full h-full rounded-sm shadow-md relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  quality={100}
                  className="object-fill group-hover:scale-110 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500"
                  fill
                />
              </div>
              <div className="absolute -right-5 top-[80%] bg-orange-400 rounded-sm px-7 py-3 group-hover:translate-y-3 group-hover:-translate-x-2 transition-transform duration-500 shadow-lg z-10 max-w-[85%]">
                <p className="text-xl font-medium text-white">
                  {service.title}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
