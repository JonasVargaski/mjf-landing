import { z } from '@/lib/zod'

export const schema = z.object({
  name: z.string().trim().min(4, 'Informe seu nome completo'),
  email: z
    .string()
    .email()
    .transform((email) => email.toLowerCase()),
  phone: z
    .string()
    .min(13, 'O telefone precisa ser válido')
    .transform((phone) => phone.replace(/\D/g, '')),
  message: z.string().trim().min(3, 'Nos conte mais sobre sua necessidade'),
})
