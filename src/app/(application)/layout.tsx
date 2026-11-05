import { AppLayout } from '@/modules/application/ui/layouts/app-layout'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AppLayout>{children}</AppLayout>
}
