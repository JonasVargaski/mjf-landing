import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(
          'cursor-pointer transition-all text-gray-400 hover:scale-110 hover:text-gray-300',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
IconButton.displayName = 'IconButton'

export { IconButton }
