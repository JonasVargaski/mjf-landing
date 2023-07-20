import Image from 'next/image'
import { MainNav } from './main-nav'
import { Menu } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

export function Header() {
  return (
    <header className="w-full bg-[#00000079] text-white shadow-lg">
      <div className="container flex items-center">
        <div className="mr-4 py-2 w-full flex justify-between">
          <div className="text-center">
            <Image
              src="/only-logo.png"
              alt="mjf logo"
              width={130}
              height={80}
            />
            <span className="hidden md:flex pl-1 font-medium text-slate-200">
              Soluções metálicas
            </span>
          </div>
          <Popover>
            <PopoverTrigger className="block md:hidden">
              <button className="p-3 rounded-xl">
                <Menu />
              </button>
            </PopoverTrigger>
            <PopoverContent className="bg-[#000000e7] border-black text-white md:hidden">
              <MainNav className="flex-col items-start justify-start gap-8 p-2 px-6 text-start" />
            </PopoverContent>
          </Popover>
          <MainNav className="hidden md:flex" />
        </div>
      </div>
    </header>
  )
}
