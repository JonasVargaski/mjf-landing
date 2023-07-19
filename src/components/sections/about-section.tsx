import Image from 'next/image'

export function AboutSection() {
  return (
    <section id="sobre" className="w-full bg-white">
      <div className="container flex flex-col gap-3 py-20">
        <h3 className="text-4xl mt-1 font-medium">Sobre nós</h3>
        <div className="w-full gap-8 mt-2 grid grid-cols-1 md:grid-cols-6">
          <div className="md:col-span-4 text-gray-800 text-lg">
            <p>
              A MJF é uma empresa que atua no ramo do ferro, nas construções e
              coberturas, há mais de 50 anos em Itajubá. Contudo, apesar do nome
              MJF ser novo, já estamos no ramo desde a época em que o Sr. Eli
              Gusmão expandiu o ramo na nossa região. A partir daí foi ele o
              mestre que ensinou a arte da solda para diversos construtores em
              ferro da nossa cidade.
            </p>
            <p className="mt-3">
              A MJF conta com uma equipe qualificada e estruturada, com pessoas
              experientes e respaldada por engenheiro que auxilia nos projetos.
              Nossa maior preocupação é trazer, pra você cliente amigo a
              confiança de ter o melhor produto, com qualidade e dentro do prazo
              estipulado. Lembrando que somos sempre gratos por você cliente,
              para estarmos até hoje no mercado com essa credibilidade.
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
