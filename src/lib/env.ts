import { z } from '@/lib/zod'

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
  MAILCHIMP_API_KEY: z.string().nonempty(),
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
