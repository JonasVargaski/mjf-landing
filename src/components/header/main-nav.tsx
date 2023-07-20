import { cn } from '@/lib/utils'

type NavItem = {
  label: string
  path: string
}

const navItems: NavItem[] = [
  { label: 'Serviços', path: '#servicos' },
  { label: 'Sobre', path: '#sobre' },
  { label: 'Dúvidas', path: '#duvidas' },
  { label: 'Orçamento', path: '#orcamento' },
  { label: 'Contato', path: '#contato' },
]

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn('flex items-center gap-4 lg:gap-6', className)}
      {...props}
    >
      {navItems.map((nav) => (
        <a
          key={nav.label}
          href={nav.path}
          className={cn(
            'text-lg font-medium transition-transform hover:text-white/80 hover:font-semibold',
          )}
        >
          {nav.label}
        </a>
      ))}
    </nav>
  )
}
