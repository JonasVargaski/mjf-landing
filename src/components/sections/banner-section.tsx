import dynamic from 'next/dynamic'

const Carousel = dynamic(async () => {
  const { Carousel: Component } = await import('@/components/carousel')
  return { default: Component }
})

export function BannerSection() {
  return (
    <main
      id="inicio"
      className="container w-full items-center grid grid-cols-2 gap-16 py-28 text-white"
    >
      <div className="flex flex-col gap-4">
        <h4 className="text-4xl font-medium">
          Vidraçaria, Esquadrias e decoração para sua casa ficar do jeito que
          sonhou
        </h4>
        <p className="text-lg mt-4">
          Vidraçaria, Esquadrias e decoração para sua casa ficar do jeito que
          sonhou Somos a solução para você que deseja mudar sua casa para um
          projeto dos sonhos, com nossos serviços de vidraçaria, esquadrias e
          decorações.
        </p>
      </div>

      <Carousel className="aspect-video" />
    </main>
  )
}
