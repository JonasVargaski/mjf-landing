import { IconButton } from './icon-button'

type TContactScaffoldProps = {
  icon: React.ReactNode
  title: React.ReactNode
  description: React.ReactNode
}

export function ContactScaffold({
  icon,
  title,
  description,
}: TContactScaffoldProps) {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
      <div className="flex items-center gap-2">
        <IconButton className={'w-6 h-6 min-w-max text-gray-500'} asChild>
          {icon}
        </IconButton>
        <span className="text-xl font-medium">{title}</span>
      </div>
      <div className="text-lg w-full ml-0 md:ml-8">{description}</div>
    </div>
  )
}
