import { signInWithGoogle } from "@/lib/auth-actions";


const SignInWithGoogleButton = () => {
    return (
        <button
            type="button"
            onClick={() => signInWithGoogle}
        >
            Continue with Google
        </button>
    )
}

export default SignInWithGoogleButton;