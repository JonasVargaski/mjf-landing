import { z } from '@/lib/zod'

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
  NODEMAILER_USER: z.string().nonempty(),
  NODEMAILER_PASSWORD: z.string().nonempty(),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error(
    '\n\n🚨🚨🚨 Invalid environment variables: ',
    _env.error.format(),
    '\n\n\n',
  )

  throw new Error('Invalid environment variables')
}

export const env = _env.data
