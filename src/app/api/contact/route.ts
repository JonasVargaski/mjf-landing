import { NextResponse } from 'next/server'
import { schema } from '@/components/contact-form/validation'

export async function POST(req: Request) {
  try {
    const { name, email, message, phone } = schema.parse(await req.json())

    return NextResponse.json({
      user: { name, email, message, phone },
    })
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({ status: 'error', message: error.message }),
      { status: 403 },
    )
  }
}
