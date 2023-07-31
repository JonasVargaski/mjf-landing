import Image from 'next/image'
import { MainNav } from './main-nav'
import { Menu } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

export function Header() {
  return (
    <header className="w-full text-white md:bg-[#00000079] md:shadow-lg">
      <div className="container flex items-center">
        <div className="mr-4 py-2 w-full flex justify-between">
          <div className="text-center max-h-20 overflow-hidden">
            <Image
              src="/only-logo.png"
              alt="mjf logo"
              className="max-h-20"
              width={130}
              height={80}
            />
            <span className="pl-1 font-medium text-slate-200 blur-[.02rem]">
              Soluções metálicas
            </span>
          </div>
          <Popover>
            <PopoverTrigger aria-label="menu" className="p-2 rounded-xl">
              <Menu className="h-8 w-8 md:hidden" />
            </PopoverTrigger>
            <PopoverContent className="bg-[#000000e7] border-black text-white">
              <MainNav className="md:hidden flex-col items-start justify-start gap-8 p-2 px-6 text-start" />
            </PopoverContent>
          </Popover>
          <MainNav className="hidden md:flex" />
        </div>
      </div>
    </header>
  )
}
