import React, { useRef, useEffect } from 'react'

import { Fancybox as NativeFancybox } from '@fancyapps/ui'
import { ComponentOptionsType as FancyboxOptionsType } from '@fancyapps/ui/types/Fancybox/options'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

type TFancyBoxProps = {
  children?: React.ReactNode
  delegate?: string
  options?: Partial<FancyboxOptionsType>
}

export function Fancybox({
  children,
  delegate = '[data-fancybox]',
  options = {},
}: TFancyBoxProps) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current

    NativeFancybox.bind(container, delegate, options)

    return () => {
      NativeFancybox.unbind(container)
      NativeFancybox.close()
    }
  })

  return <div ref={containerRef}>{children}</div>
}
