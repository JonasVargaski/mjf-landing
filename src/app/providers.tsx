'use client'

import dynamic from 'next/dynamic'

const Toaster = dynamic(async () => {
  const { Toaster: Component } = await import('@/components/ui/toaster')
  return { default: Component }
})

type RootProvidersProps = {
  children: React.ReactNode
}

export function RootProviders({ children }: RootProvidersProps) {
  return (
    <>
      <Toaster />
      {children}
    </>
  )
}
