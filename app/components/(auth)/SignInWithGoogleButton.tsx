import { GoogleIcon } from "@/assets/Icons";
import { signInWithGoogle } from "@/lib/auth-actions";


const SignInWithGoogleButton = () => {
    return (
        <button
            type="button"
            className="flex justify-between items-center py-3 px-sm border-[var(--textKill)] border-1 text-[var(--textLight)] text-sm cursor-pointer"
            onClick={() => signInWithGoogle()}
        >
            Continue with Google
            <GoogleIcon size={24} />
        </button>
    )
}

export default SignInWithGoogleButton;