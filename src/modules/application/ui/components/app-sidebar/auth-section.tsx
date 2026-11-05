import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { HistoryIcon, ListVideoIcon, ThumbsUpIcon } from 'lucide-react'
import Link from 'next/link'

const items = [
  {
    title: 'History',
    url: '/playlists/playlists',
    icon: HistoryIcon,
    auth: true,
  },
  {
    title: 'Liked videos',
    url: '/playlists/liked',
    icon: ThumbsUpIcon,
    auth: true,
  },
  {
    title: 'All playlists',
    url: '/playlists',
    icon: ListVideoIcon,
    auth: true,
  },
]

//tutor keeps this for not logged in users, cuz it appears empty without this section

export function AuthSection() {
  return (
    // {/* {isSignedIn && ( */}
    <SidebarGroup>
      <SidebarGroupLabel>You</SidebarGroupLabel>
      <SidebarGroupContent className="flex items-center gap-3 my-1.5">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                isActive={false}
                onClick={() => {}}
                render={
                  <Link href={item.url} className="flex items-center gap-4">
                    <item.icon size={16} />
                    <span className="text-sm">{item.title}</span>
                  </Link>
                }
              />
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
    // {/* )} */}
  )
}
