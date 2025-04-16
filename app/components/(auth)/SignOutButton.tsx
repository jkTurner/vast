import { signout } from "@/lib/auth-actions"


const SignOutButton = () => {
    return (
        <form action={signout}>
            <button
                type="submit"
                className="bg-[var(--primary)] text-[var(--secondary)] px-2 py-1 text-xxs cursor-pointer"
            >
                Sign Out
            </button>
        </form>
    )
}

export default SignOutButton;