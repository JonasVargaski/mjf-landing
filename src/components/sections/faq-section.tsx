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
    title: 'O que é ACM?',
    description: (
      <>
        O ACM é composto por duas folhas finas de alumínio que são unidas por um
        núcleo de polietileno ou outro material termoplástico. Esse núcleo
        proporciona ao ACM uma excelente resistência e rigidez, enquanto as
        camadas externas de alumínio oferecem proteção contra intempéries e
        durabilidade.
        <span className="mt-2 block">
          As principais características do ACM incluem:
        </span>
        <ol className="mt-2 space-y-1">
          <li>
            <b>Leveza: </b>O ACM é relativamente leve em comparação com outros
            materiais de revestimento, o que facilita a sua instalação e
            transporte.
          </li>
          <li>
            <b>Resistência: </b>O material é resistente a impactos, arranhões,
            corrosão e degradação causada por exposição ao sol e chuva.
          </li>
          <li>
            <b>Versatilidade:</b> O ACM está disponível em uma ampla variedade
            de cores, acabamentos e texturas, permitindo uma infinidade de
            possibilidades de design e personalização.
          </li>
          <li>
            <b>Facilidade de manutenção:</b> É de fácil limpeza e não requer
            manutenção complexa ao longo do tempo.
          </li>
          <li>
            <b>Isolamento térmico e acústico:</b> O núcleo termoplástico do ACM
            contribui para um bom isolamento térmico e acústico quando utilizado
            como parte do sistema de isolamento de fachadas.
          </li>
        </ol>
      </>
    ),
  },
  {
    title: 'O que é uma Porta Seccionada? ',
    description:
      'As portas seccionadas são portas fabricadas em painéis de chapa de aço com acabamento galvanizado e preenchido com PU injetado que, além de suportar temperaturas extremas, é ecologicamente correta. São muito utilizadas em garagens residenciais e indústrias.',
  },
  {
    title: 'Quais serviços a empresa oferece?',
    description:
      'Nossa empresa oferece uma ampla gama de serviços como venda e manutenção de portas de rolo automática; portões basculante, deslizante e guilhotina; grades de proteção; projetos especiais; projetos com acabamento em ACM.',
  },
  {
    title: 'Os serviços incluem garantia?',
    description:
      'Sim, todos os nossos serviços são acompanhados por garantia. A duração da garantia varia de acordo com o serviço prestado. Fique tranquilo(a), pois estamos comprometidos em oferecer serviços de alta qualidade e garantir a sua satisfação.',
  },
  {
    title: 'Qual é o prazo de entrega?',
    description:
      'O prazo de entrega pode variar dependendo da complexidade do projeto e da nossa demanda atual de trabalho. Na maioria dos casos, tentamos ser o mais ágeis possível e cumprir os prazos acordados com nossos clientes. Faremos o melhor para entregar o projeto dentro do prazo estabelecido.',
  },
  {
    title: 'Posso fornecer meu próprio design para um projeto personalizado?',
    description:
      'Com certeza! Aceitamos projetos personalizados fornecidos por nossos clientes. Nossa equipe trabalhará em estreita colaboração com você para transformar suas ideias em realidade, garantindo que o resultado final atenda às suas expectativas.',
  },
  {
    title: 'Os produtos podem receber acabamentos personalizados?',
    description:
      'Sim, oferecemos opções de acabamentos personalizados proporcionando o visual desejado. Discuta suas preferências de acabamento conosco para que possamos atender às suas necessidades.',
  },
  {
    title: 'Quais tipos de clientes vocês atendem?',
    description:
      'Atendemos todos os tipos de clientes. Nossa versatilidade nos permite fornecer soluções sob medida para projetos de todos os tamanhos e tipos, garantindo um serviço de qualidade a todos os nossos clientes.',
  },
  {
    title: 'Vocês fazem visita para orçamentos?',
    description: 'Sim, realizamos visitas no local.',
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
