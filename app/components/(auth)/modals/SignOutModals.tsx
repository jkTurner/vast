'use client'

import { useEffect, useState } from "react";

const SignOutModal = () => {

    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);

            const url = new URL(window.location.href)
            url.searchParams.delete('logout');
            window.history.replaceState({}, '', url.toString())
        }, 4000)
        
        return () => clearTimeout(timer);
    }, [])

    if (!visible) return null;
    
    return (
        <div className="model-backdrop items-start">
            <div className="flex flex-col gap-sm bg-[var(--secondary)] p-sm mt-md w-[90%] max-w-[500px] justify-center">
                <span className="text-[var(--primary)] text-sm text-center">You&apos;ve been signed out.</span>
                <div className="self-center">
                    <button
                        onClick={() => setVisible(false)}
                        className="text-[var(--secondary)] py-1 px-4 bg-[var(--primary)] text-xs cursor-pointer"
                    >
                        Close
                    </button>
                </div>
            </div>
        
        </div>
    )
}

export default SignOutModal;