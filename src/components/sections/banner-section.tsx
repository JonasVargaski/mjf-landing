import Image from 'next/image'

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
        <span className="text-center text-lg font-medium mt-4 block">
          Nossos parceiros:
        </span>
        <div className="flex items-center gap-6 mt-4 pb-7">
          {Array.from({ length: 4 }).map((_, i) => (
            <Image
              key={i.toString()}
              src="/megadoors-logo.png"
              alt="parceiro"
              width={120}
              height={80}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
