'use client'

import { signout } from '@/lib/auth-actions'

type SignOutButtonProps = {
  onSignOutSuccess: () => void
}

const SignOutButton = ({ onSignOutSuccess }: SignOutButtonProps) => {
  const handleSignOut = async () => {
    const result = await signout()
    if (result?.success) {
      onSignOutSuccess()
    }
  }

  return (
    <button
      onClick={handleSignOut}
      className="bg-[var(--primary)] text-[var(--secondary)] px-2 py-1 text-xxs cursor-pointer"
    >
      Sign Out
    </button>
  )
}

export default SignOutButton
