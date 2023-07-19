import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

type TFaq = {
  title: string
  description: React.ReactNode
}
const faqs: TFaq[] = [
  {
    title: 'Quais os serviços vocês realizam?',
    description:
      'Esquadrias de alumínio, vidros temperados e decoração (espelhos, cristaleiras e etc.',
  },
  {
    title: 'Vocês fazem visita para orçamentos?',
    description: 'Sim, realizamos visitas no local.',
  },
  {
    title: 'Quanto tempo leva pra ficar pronto?',
    description:
      'Cada serviço tem um prazo determinado pra ficar pronto (a princípio leva-se 25 a 35 dias em média',
  },
  {
    title: 'Quais os diferenciais de uma porta de enrrolar?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quos voluptatem beatae blanditiis animi, omnis suscipit accusamus mollitia odio cumque assumenda aspernatur ducimus laborum amet alias modi inventore veritatis optio! Iste inventore possimus, aliquam error, iure libero quod enim distinctio itaque illum natus! Nulla voluptatem, asperiores provident architecto et inventore, libero autem magni repellat iste pariatur? Harum eum quis at.',
  },
]

export function FaqSection() {
  return (
    <section id="duvidas" className="w-full bg-slate-100">
      <div className="container flex flex-col items-center gap-14 py-20">
        <div className="text-center">
          <span className="text-orange-400 font-medium">FAQ</span>
          <h3 className="text-4xl mt-1 font-medium">Perguntas frequentes</h3>
        </div>

        <Accordion type="single" collapsible className="w-full shadow-sm">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.title} value={`item-${i}`}>
              <AccordionTrigger>{faq.title}</AccordionTrigger>
              <AccordionContent>{faq.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
