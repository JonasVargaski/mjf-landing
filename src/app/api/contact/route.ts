import { NextResponse } from 'next/server'
import { z } from '@/lib/zod'

import { mail } from '@/lib/nodemailer'

const schema = z.object({
  name: z.string().trim().min(4, 'Informe seu nome completo'),
  email: z
    .string()
    .email()
    .transform((email) => email.toLowerCase()),
  phone: z.string().transform((phone) => phone.replace(/\D/g, '')),
  message: z.string().trim().min(3, 'Nos conte mais sobre sua necessidade'),
})

export async function POST(req: Request) {
  try {
    const { name, email, message, phone } = schema.parse(await req.json())

    await mail.sendMail({
      from: 'MJF site <mjfsite@hotmail.com>',
      to: 'mjfsolucoesmetalicas@gmail.com',
      subject: 'NOVO PEDIDO DE ORÇAMENTO SITE',
      html: `
     <div style="padding:20px; border-radius: 6px; border: 1px solid #ccc;">
      <h3>Novo pedido de orçamento</h3>
      <div style="display: flex; flex-direction: column; gap:12px">
        <div>
          <b>Nome:</b>
          ${name}
        </div>
        <div>
          <b>E-mail:</b>
          ${email}
        </div>
        <div>
          <b>Telefone:</b>
          ${phone}
        </div>
        <div>
          <b>Mensagem:</b>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    </div>
      `,
    })
    return NextResponse.json(null, { status: 200 })
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({ status: 'error', message: error.message }),
      { status: 403 },
    )
  }
}
