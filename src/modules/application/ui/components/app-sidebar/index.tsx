'use client'

import { Sidebar, SidebarContent } from '@/components/ui/sidebar'
import { useAuth } from '@clerk/nextjs'
import { Separator } from '../../../../../components/ui/separator'
import { MainSection } from './main-section'
import { AuthSection } from './auth-section'

export function AppSidebar() {
  const { isLoaded, isSignedIn } = useAuth()

  if (!isLoaded) return <h1>Loading...</h1>

  return (
    <Sidebar className="mt-16 border-none" collapsible="icon">
      {/* default to def bg(light-light) */}
      <SidebarContent className="bg-background">
        <MainSection />

        <Separator />

        <AuthSection />
      </SidebarContent>
    </Sidebar>
  )
}
