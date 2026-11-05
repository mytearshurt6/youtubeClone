import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/modules/application/ui/components/app-sidebar'
import { Header } from '@/modules/application/ui/components/heading/header'

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="w-full">
        <Header />
        <div className="flex mt-16">
          <AppSidebar />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
