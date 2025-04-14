'use client'

import React, { useEffect, useState } from 'react'
import { CloseIcon, GoogleIcon } from '@/assets/Icons'
import styles from "./modal.module.css"
import { signup } from '@/lib/auth-actions'

interface SignUpModalProps {
  onClose: () => void
  switchToSignIn: () => void
}

const SignUpModal: React.FC<SignUpModalProps> = ({ onClose, switchToSignIn }) => {

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        }

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      });

    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
    const [status, setStatus] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setErrors({});
        setStatus("");

        const data = new FormData();
        data.set("firstName", formData.firstName);
        data.set("lastName", formData.lastName);
        data.set("email", formData.email);
        data.set("password", formData.password);

        const result = await signup(null, data);
        setIsLoading(false);

        if (result?.errors) {
            setErrors(result.errors); 
          } else {
            setStatus("Account created. Check your inbox to verify your email.");
          }          
    }

    return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs">

            <div className={`flex flex-col bg-[var(--secondary)] p-sm w-[90%] max-w-[500px] ${styles.modalEnter}`}>

                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold">Sign Up</h2>
                    <CloseIcon size={18} onClick={onClose} className="cursor-pointer" />
                </div>
				
				{/* Sign In Form */}
				<form onSubmit={handleSubmit} className="flex flex-col w-full gap-xs mt-sm mb-md">

                    <div className="flex flex-col ss:flex-row w-full gap-sm">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="inputFieldUnderline"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value})}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="inputFieldUnderline"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value})}
                        />
                    </div>
                    
					<input
						type="email"
						placeholder='Email'
						className="inputFieldUnderline"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value})}
					/>
                    <input
                        type="password"
                        placeholder="Password"
                        className="inputFieldUnderline mb-xs"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value})}
                    />

                    {/* {error && (
                        <p className="text-red-500 text-xs">{error}</p>
                    )} */}

                    {Object.keys(errors).length > 0 && (
                        <div className="flex flex-col">
                            {errors.firstName && (
                                <p className="text-red-500 text-xs">{errors.firstName}</p>
                            )}
                            {errors.lastName && (
                                <p className="text-red-500 text-xs">{errors.lastName}</p>
                            )}
                            {errors.email && (
                                <p className="text-red-500 text-xs">{errors.email}</p>
                            )}
                            {errors.password && (
                                <p className="text-red-500 text-xs">{errors.password}</p>
                            )}
                        </div>
                    )}

                    {status && (
                        <div className="flex">
                            <p className="text-[var(--accent)] text-xs">{status}</p>
                        </div>
                    )}

                    <button 
                        type="submit" 
                        className="bg-[var(--primary)] text-[var(--secondary)] py-xxs px-sm text-sm mt-xs cursor-pointer"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className="w-6 h-6 border-2 border-[var(--secondary)] border-t-transparent rounded-full animate-spin justify-self-center" />
                        ): (
                            "Sign Up"
                        )}
                    </button>

				</form>
				

				{/* Don't have an account */}
				<div className="flex justify-center gap-xs">
					<p className="text-xxs">
						Already have an account?
					</p>
					<span 
                        onClick={switchToSignIn}                    
                        className="text-xxs text-[var(--accent)] font-bold cursor-pointer"
                    >Sign In</span>
				</div>

				{/* Or Google */}
				<div className="flex justify-between items-center gap-sm my-sm">
					<div className="h-[1px] bg-[var(--textKill)] flex-1" />
					<h3 className="text-sm font-light w-[20px]">Or</h3>
					<div className="h-[1px] bg-[var(--textKill)] flex-1" />
				</div>
				<button className="flex justify-between items-center py-3 px-sm border-[var(--textKill)] border-1 text-[var(--textLight)] text-sm cursor-pointer">
					Continue with Google
					<GoogleIcon size={24} />
				</button>
				
				{/* Terms & Con */}
				<div className="flex flex-col p-sm">
					<p className="text-xxs text-center">
						By continuing, you agree to Vast Original&apos;s
						<span className="text-[var(--accent)] cursor-pointer"> Terms of Service </span> 
						and acknowledge you&apos;ve read our 
						<span className="text-[var(--accent)] cursor-pointer"> Privacy Policy. </span> 
						Notice at collection.
					</p>
				</div>
			</div>

		</div>
	)
}

export default SignUpModal
