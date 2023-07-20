import Image from 'next/image'
import { Icons } from '@/components/ui/icons'
import { IconButton } from '@/components/ui/icon-button'
import { ContactScaffold } from '@/components/ui/contact-item'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

export function FooterSection() {
  return (
    <>
      <section
        id="contato"
        className="w-full text-white bg-black  overflow-hidden"
      >
        <div className="container pt-28 pb-12 gap-6 grid grid-cols-1 md:grid-cols-3 relative">
          <div className="flex flex-col gap-8 z-[1] items-center md:items-start">
            <div className="flex flex-col gap-3 items-center text-center md:items-start md:text-left">
              <div className="p-3 rounded-full h-[100px] w-[100px] grid place-items-center bg-white">
                <Image
                  src="/only-logo.png"
                  alt="mjf logo"
                  width={100}
                  height={100}
                />
              </div>
              <h2 className="text-3xl mt-4 font-medium">
                MJF Soluções Metálicas
              </h2>
            </div>
            <div className="flex gap-14">
              <IconButton asChild>
                <a
                  href="https://www.instagram.com/mjf.metalicas/"
                  aria-label="Instagram"
                  target="_blank"
                >
                  <Icons.Instagram />
                </a>
              </IconButton>
              <IconButton asChild>
                <a
                  href="https://www.facebook.com/profile.php?id=100072283255038"
                  aria-label="Facebook"
                  target="_blank"
                >
                  <Icons.Facebook />
                </a>
              </IconButton>
              <IconButton asChild>
                <a
                  href="https://wa.me/5548988126955?text=Olá, vim através do site e gostaria de solicitar um orçamento"
                  aria-label="Whatsapp"
                  target="_blank"
                >
                  <Icons.WhatsApp />
                </a>
              </IconButton>
            </div>
            <a
              href="https://wa.me/5548988126955?text=Olá, vim através do site e gostaria de saber sobre as oportunidades em aberto."
              target="_blank"
              role="button"
            >
              <span className="text-lg">
                <u>Trabalhe conosco</u>
              </span>
            </a>
          </div>

          <div className="flex flex-col gap-8 z-[1] items-center md:items-start">
            <ContactScaffold
              icon={<Phone />}
              title="Telefone"
              description={
                <a href="tel:+5548988126955" target="_blank">
                  (48) 98812-6955
                </a>
              }
            />
            <ContactScaffold
              icon={<Icons.WhatsApp />}
              title="WhatsApp"
              description={
                <a
                  href="https://wa.me/5548988126955?text=Olá, vim através do site e gostaria de solicitar um orçamento"
                  target="_blank"
                >
                  (48) 98812-6955
                </a>
              }
            />
            <ContactScaffold
              icon={<Mail />}
              title="Email"
              description={
                <a
                  href="mailto:mjfsolucoesmetalicas@gmail.com"
                  target="_blank"
                  className="break-all"
                >
                  mjfsolucoesmetalicas@gmail.com
                </a>
              }
            />
            <ContactScaffold
              icon={<Clock />}
              title="Horário de atendimento"
              description={'  Segunda a sexta: 07:00hs às 17:00hs'}
            />
          </div>

          <div className="flex flex-col gap-4 z-[1]">
            <ContactScaffold
              icon={<MapPin />}
              title="Endereço"
              description={
                <>
                  <a
                    href="https://goo.gl/maps/swUSBf7F9JSMTDP8A"
                    target="_blank"
                  >
                    R. Juliana Hilbert Cascaes - Corridas
                    <br />
                    Orleans - SC
                    <br />
                    CEP 88870-000
                  </a>

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1516.6843141012173!2d-49.27764948217998!3d-28.378659644106364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95210df01dbd0f07%3A0x4c2cbd13dd3d1c8e!2zTUpGIFNvbHXDp8O1ZXMgTWV0w6FsaWNhcw!5e0!3m2!1spt-BR!2sbr!4v1689867137201!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bairro Corridas, Orleans SC - 88870-000"
                    aria-label="Bairro Corridas, Orleans SC - 88870-000"
                    className="w-full mt-4 h-64"
                  />
                </>
              }
            />
          </div>

          <div className="hidden md:block absolute w-full -left-[37%] mix-blend-lighten opacity-10 top-0 bottom-0 rotate-[250deg] ">
            <Image src="/bg-chapa.jpg.webp" alt="bg-chapa" fill />
          </div>
        </div>
      </section>
      <footer className="w-full text-center bg-black h-[80px] grid place-items-center">
        <div className="container flex items-center justify-center">
          <p className="text-white text-sm">
            MJF Soluções Metálicas CNPJ: 45.853.432/0001-83 © Todos os direitos
            reservados
          </p>
        </div>
      </footer>
    </>
  )
}
