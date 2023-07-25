import Image from 'next/image'

export function BannerSection() {
  return (
    <main
      id="inicio"
      className="container w-full h-full flex flex-col items-center justify-between  py-10 md:py-28  text-white"
    >
      <h1 className="text-2xl md:text-4xl font-medium  text-center">
        Descubra a excelência em serralheria com a{' '}
        <b className="block">MJF Soluções Metálicas!</b>
      </h1>
      <div>
        <span className="text-center mt-4 block">Nosos parceiros:</span>
        <div className="flex items-center gap-6">
          {Array.from({ length: 5 }).map((_, i) => (
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
