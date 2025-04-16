'use client'

import { useEffect, useState } from "react"


const SignOutMessage = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false)

            // clean up the URL query param
            const url = new URL(window.location.href)
            url.searchParams.delete('logout')
            window.history.replaceState({}, '', url.toString())
        }, 4000)

        return () => clearTimeout(timer);
    }, [])

    if (!visible) return null;

    return (
        <div className="flex justify-between items-center text-sm text-[var(--accent)] bg-[var(--secondary)] px-4 py-2 mb-sm max-w-[500px] mx-auto">
            <span>You&apos;ve been signed out.</span>
            <button 
                onClick={() => setVisible(false)} 
                className="text-xs underline ml-4"
            >
                Close
            </button>
        </div>
    )
}

export default SignOutMessage;