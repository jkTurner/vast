import { useUser } from "@/hooks/useUser"
import { signout } from "@/lib/auth-actions";


const SignOutButton = () => {
	const { refetch } = useUser();

	const handleSignOut = async () => {
		const result = await signout();
		if (result?.success) {
		refetch();
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

export default SignOutButton;