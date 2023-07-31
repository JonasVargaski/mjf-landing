import { Icons } from './icons'

export function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-4 z-50 text-white">
      <a
        className="inline-block group h-16 w-h-16 rounded-full shadow-lg bg-green-400 p-3"
        href="https://wa.me/5548988126955?text=Olá, vim através do site e gostaria de solicitar um orçamento"
        target="_blank"
        aria-label="Whatsapp"
      >
        <span className="absolute hidden group-hover:flex -left-4 -top-3 -translate-y-full px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
          Precisa de ajuda?
        </span>
        <Icons.WhatsApp />
      </a>
    </div>
  )
}
