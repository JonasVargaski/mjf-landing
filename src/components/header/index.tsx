import Image from 'next/image'
import { MainNav } from './main-nav'

export function Header() {
  return (
    // <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
    <header className="w-full bg-[#00000079] text-white shadow-lg">
      <div className="container flex items-center">
        <div className="mr-4 py-2 w-full hidden md:flex justify-between">
          <div className="text-center">
            <Image
              src="/only-logo.png"
              alt="mjf logo"
              width={130}
              height={80}
            />
            <span className="pl-1 font-medium text-slate-200">
              Soluções metálicas
            </span>
          </div>
          <MainNav />
        </div>
        <button
          className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:R15hja:"
          data-state="closed"
        >
          MOBILE
          <span className="sr-only">Toggle Menu</span>
        </button>
      </div>
    </header>
  )
}
