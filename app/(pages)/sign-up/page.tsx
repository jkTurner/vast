'use client'
// import { signup } from '@/lib/auth-actions'
// import { useActionState } from 'react';

const SignUpPage = () => {

    // const [state, formAction] = useActionState(signup, null);

    return (
        <div className="max-w-[800px] mx-auto p-8">
            {/* <h1 className="text-2xl font-bold mb-4">Create an Account</h1>

            <form action={formAction} className="flex flex-col gap-4">
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                className="border px-3 py-2"
            />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                className="border px-3 py-2"
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="border px-3 py-2"
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="border px-3 py-2"
            />
            <button
                type="submit"
                className="bg-[var(--primary)] text-white px-4 py-2"
            >
                Sign Up
            </button>
            {state?.error && (
                <p className="text-red-500 text-sm">{state.error}</p>
            )}
            </form> */}
        </div>
    )
}

export default SignUpPage;