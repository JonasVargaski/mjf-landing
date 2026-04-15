import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

export function Skeleton({ className, ...props }: ComponentProps<'span'>) {
  return (
    <span
      className={cn(
        'block animate-pulse rounded bg-gradient-to-r from-gray-200 to-gray-100',
        className,
      )}
      {...props}
    />
  )
}
