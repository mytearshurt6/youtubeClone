import { Button } from '@/components/ui/button'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { UserCircleIcon } from 'lucide-react'
import { Suspense } from 'react'

export function AuthButtons() {
  return (
    <Suspense>
      <Show when="signed-out">
        <SignInButton>
          <Button
            variant="outline"
            className="cursor-pointer px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 rounded-full border-blue-500/20">
            Sign In
          </Button>
        </SignInButton>
        <SignUpButton>
          <Button
            variant="outline"
            className="cursor-pointer px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 rounded-full border-blue-500/20">
            <UserCircleIcon /> Sign Up
          </Button>
        </SignUpButton>
      </Show>
      <Show when="signed-in">
        <UserButton />
      </Show>
    </Suspense>
  )
}
