import Link from 'next/link'
import { SidebarTrigger } from '@/components/ui/sidebar'
import Image from 'next/image'
import { SearchForm } from './search-form'
import { AuthButtons } from '@/modules/auth/ui/components/auth-buttons'

export function Header() {
  return (
    <header className="flex fixed top-0 left-0 right-0 justify-between items-center px-2 pr-5 z-50 gap-4 h-16">
      {/* never shrinks no matter the screen size */}
      <div className="flex items-center shrink-0 gap-4">
        <SidebarTrigger />
        <Link href="/">
          <div className="flex gap-1 items-center p-4">
            <Image src="/logo.svg" alt="App logo" width={32} height={32} />
            <p className="text-xl font-semibold tracking-tight">NewTube</p>
          </div>
        </Link>
      </div>

      <SearchForm />

      <div className="shrink-0 flex items-center gap-2">
        <AuthButtons />
      </div>
    </header>
  )
}
