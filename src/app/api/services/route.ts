import { readdirSync } from 'fs'
import { join } from 'path'
import { NextResponse } from 'next/server'

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif'])

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const path = searchParams.get('path')

  if (!path) {
    return NextResponse.json(
      { error: 'Missing path parameter' },
      { status: 400 },
    )
  }

  const normalized = path.replace(/\.\./g, '')
  const dir = join(process.cwd(), 'public', 'servicos', normalized)

  try {
    const files = readdirSync(dir)
    const images = files
      .filter((f) =>
        IMAGE_EXTENSIONS.has(f.substring(f.lastIndexOf('.')).toLowerCase()),
      )
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((f) => `/servicos/${normalized}/${f}`)

    return NextResponse.json(images)
  } catch {
    return NextResponse.json([], { status: 200 })
  }
}
