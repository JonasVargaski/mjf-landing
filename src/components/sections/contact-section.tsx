import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Button } from '../ui/button'
import { Icons } from '../ui/icons'

const ContactForm = dynamic(() => import('../contact-form'))

export function ContactSection() {
  return (
    <section
      id="orcamento"
      className="w-full overflow-hidden text-white relative"
    >
      <div className="absolute -z-[1] -inset-2 blur-sm shadow-none">
        <Image
          src="/banco.jpg"
          alt="form-bg"
          className="object-cover"
          fill
          loading="lazy"
          quality={60}
        />
      </div>
      <div className="container grid items-center gap-8 py-20 md:items-start md:grid-cols-2 md:gap-14">
        <div className="flex text-center flex-col gap-2 md:text-left">
          <h4 className="text-4xl font-medium">Solicite um orçamento</h4>
          <p className="text-lg mt-8">
            Preencha o formulário ao lado e entraremos em contato com um
            orçamento personalizado.
          </p>
          <p>ou entre em contato via WhatsApp</p>
          <Button
            variant="success"
            size="lg"
            className="mt-4 max-w-max"
            asChild
          >
            <a
              href="https://wa.me/5548988126955?text=Olá, vim através do site e gostaria de solicitar um orçamento"
              target="_blank"
            >
              <Icons.WhatsApp className="w-6 h-6" />
              Solicitar Orçamento
            </a>
          </Button>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
