import nodemailer from 'nodemailer'
import { env } from './env'

export const mail = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: env.NODEMAILER_USER,
    pass: env.NODEMAILER_PASSWORD,
  },
})
