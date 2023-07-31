import Image from 'next/image'

export function AboutSection() {
  return (
    <section id="sobre" className="w-full bg-white">
      <div className="container flex flex-col gap-3 py-20">
        <h4 className="text-4xl mt-1 font-medium">Sobre nós</h4>
        <div className="w-full gap-8 mt-2 grid grid-cols-1 md:grid-cols-6">
          <div className="md:col-span-4 text-gray-800 text-lg">
            <p>
              Com mais de 15 anos de experiência, a nossa empresa tem se
              destacado no mercado ao oferecer serviços de venda e manutenção de
              portas automáticas, assim como o desenvolvimento de projetos
              especiais. Especializados em uma variedade de sistemas, incluindo
              portas basculantes, deslizantes, guilhotina, grades de proteção e
              acabamentos em ACM, estamos comprometidos em fornecer soluções
              personalizadas e de alta qualidade para as necessidades
              específicas de cada cliente.
            </p>
            <p className="mt-3">
              Nossa missão é proporcionar aos nossos clientes uma experiência
              excepcional, desde o atendimento inicial até a conclusão de cada
              projeto. Trabalhamos em estreita colaboração com os clientes,
              compreendendo suas necessidades específicas e fornecendo soluções
              que atendam a todas as suas expectativas.
            </p>
          </div>
          <div className="md:col-span-2 w-full h-64 relative overflow-hidden rounded-lg">
            <Image
              src="/fachada.jpg"
              alt="fachada"
              className="object-cover"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  )
}
