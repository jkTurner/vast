'use client'

import Link from "next/link";
import { useSearchParams } from "next/navigation"

const ErrorPage = () => {
    const searchParams = useSearchParams();
    const message = searchParams.get('message') || 'Something went wrong. Please try again.';

    return (
        <div className="flex flex-col items-center justify-start min-h-[800px] w-[300px] p-4 text-center">
            <div className="flex flex-col gap-sm">
                <h1 className="text-2xl font-bold text-[var(--primary)]">Opps!</h1>
                <p className="text-[var(--textLight)] text-md">{message}</p>
                <div className="flex gap-4">
                    <Link
                    href="/auth/signin"
                    className="px-4 py-2 bg-[var(--primary)] text-[var(--secondary)] hover:bg-[var(--accent)] transition"
                    >
                    Try Signing In Again
                    </Link>
                    <Link
                    href="/"
                    className="px-4 py-2 bg-[var(--primary)] text-[var(--secondary)] hover:bg-[var(--accent)] transition"
                    >
                    Go to Homepage
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage