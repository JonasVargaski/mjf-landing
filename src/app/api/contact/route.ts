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
      <!DOCTYPE html>
      <html>

      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email de Contato</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            background-color: #f1f1f1;
            margin: 0;
            padding: 0;
          }

          .email-container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 5px;
            border: 1px solid #ddd;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }

          .header {
            text-align: center;
            background-color: #444444;
            color: white;
            padding: 10px;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
          }

          .contact-info {
            margin-bottom: 20px;
          }

          .label {
            font-weight: bold;
          }

          .message {
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 10px;
            min-height: 100px;
            white-space: pre-wrap;
          }

          .footer {
            text-align: center;
            background-color: #f1f1f1;
            color: #777;
            padding: 10px;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            margin-top: 20px;
          }
        </style>
      </head>

      <body>
        <div class="email-container">
          <div class="header">
            <h2>Novo Contato pelo site</h2>
          </div>
          <div class="contact-info">
            <p class="label">Nome:</p>
            <p>${name}</p>
            <p class="label">E-mail:</p>
            <p>${email}</p>
            <p class="label">Telefone:</p>
            <p>${phone.replace(/^(\d{2})(\d{4,5})(\d{4})$/, '($1) $2-$3')}</p>
          </div>
          <div class="message">
            <p class="label">Mensagem:</p>
            <p>${message}</p>
          </div>
          <div class="footer">
            <p>Este é um e-mail recebido do formulário de contato do site.</p>
          </div>
        </div>
      </body>
      </html>
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
