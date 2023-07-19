'use client'

import { useForm } from 'react-hook-form'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

import { z } from '@/lib/zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputFormField } from '@/components/hook-form-fields/input'
import { toast } from '@/components/ui/use-toast'
import { TextAreaFormField } from '../hook-form-fields/textarea'
import { schema } from './validation'

type ContactFormProps = React.HTMLAttributes<HTMLFormElement>

type RegisterFormFields = z.infer<typeof schema>
const defaultValues: RegisterFormFields = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

export default function ContactForm({ className, ...props }: ContactFormProps) {
  const { control, handleSubmit, formState, reset } =
    useForm<RegisterFormFields>({
      resolver: zodResolver(schema),
      defaultValues,
    })

  async function onSubmit(data: RegisterFormFields) {
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
    })

    if (!res.ok)
      return toast({
        title: 'Ocorreu um erro ao enviar seu contato. Tente novamente.',
        description: (await res.json()).message,
      })

    reset(defaultValues)
    toast({
      title: 'Recebemos seu contato!',
      description: 'Aguarde, em breve entraremos em contato.',
    })
  }

  return (
    <form
      {...props}
      className={cn(
        'grid gap-4 bg-[#000000bb] rounded-lg px-5 py-9 shadow-lg',
        className,
      )}
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputFormField
        control={control}
        name="name"
        placeholder="Nome completo"
        autoComplete="name"
      />
      <InputFormField
        control={control}
        name="email"
        placeholder="E-mail"
        autoComplete="email"
      />
      <InputFormField
        control={control}
        mask={[{ mask: '(00) 0000-0000' }, { mask: '(00) 00000-0000' }]}
        name="phone"
        placeholder="Telefone"
      />
      <TextAreaFormField
        rows={4}
        control={control}
        name="message"
        placeholder="Mensagem"
      />

      <Button
        className="mt-4"
        variant="warning"
        size="lg"
        type="submit"
        disabled={formState.isSubmitting}
      >
        Solicitar Orçamento
      </Button>
    </form>
  )
}
