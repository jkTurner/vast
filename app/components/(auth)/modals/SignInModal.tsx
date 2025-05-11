'use client'

import React, { useState } from 'react'
import { CloseIcon } from '@/assets/Icons'
import styles from "./modal.module.css"
import { login } from '@/lib/auth-actions'
import { usePressEscape } from '@/hooks/usePressEscape'
import SignInWithGoogleButton from '../SignInWithGoogleButton'

interface SignInModalProps {
  onClose: () => void
  switchToSignUp: () => void
  onLoginSuccess?: () => void
}

const SignInModal: React.FC<SignInModalProps> = ({ onClose, switchToSignUp, onLoginSuccess }) => {

	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	// close on Escape pressed
	usePressEscape(() => onClose());

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);
		setError(null);

		const data = new FormData();
		data.set("email", formData.email);
		data.set("password", formData.password);

		const result = await login(data);

		if (result?.error) {
			setError(result.error);
			setIsLoading(false);
		} else {
			setFormData({ email: '', password: '' });
			onLoginSuccess?.();
			onClose();
		}
	}

	return (
		<div className="model-backdrop">

			<div className={`flex flex-col bg-[var(--secondary)] p-sm w-[90%] max-w-[500px] ${styles.modalEnter}`}>

				<div className="flex justify-between items-center">
					<h2 className="text-lg font-bold">Sign In</h2>
					<CloseIcon size={18} onClick={onClose} className="cursor-pointer" />
				</div>
				
				{/* Sign In Form */}
				<form 
					onSubmit={handleSubmit} 
					className="flex flex-col w-full gap-xs mt-sm mb-md"
				>

					<input
						type="email"
						placeholder='Email'
						className="input-underline"
						value={formData.email}
						onChange={(e) => setFormData({ ...formData, email: e.target.value })}
					/>
					<input
						type="password"
						placeholder="Password"
						className="input-underline mb-xs"
						value={formData.password}
						onChange={(e) => setFormData({ ...formData, password: e.target.value })}
					/>

					{error && (
						<p className="text-xs text-red-500">{error}</p>
					)}

					<button
						type="submit"
						disabled={isLoading}
						className="bg-[var(--primary)] text-[var(--secondary)] py-xxs px-sm text-sm mt-xs cursor-pointer"
					>
						{isLoading ? (
							<div className="w-6 h-6 border-2 border-[var(--secondary)] border-t-transparent rounded-full animate-spin justify-self-center" />
						): (
							"Sign In"
						)}
					</button>

				</form>
				

				{/* Don't have an account */}
				<div className="flex justify-center gap-xs">
					<p className="text-xxs">
						Don&apos;t have an account?
					</p>
					<span 
						className="text-xxs text-[var(--accent)] font-bold cursor-pointer"
						onClick={switchToSignUp}
					>Sign Up</span>
				</div>

				{/* Or Google */}
				<div className="flex justify-between items-center gap-sm my-sm">
					<div className="h-[1px] bg-[var(--textKill)] flex-1" />
					<h3 className="text-sm font-light w-[20px]">Or</h3>
					<div className="h-[1px] bg-[var(--textKill)] flex-1" />
				</div>
				<SignInWithGoogleButton />
				{/* <button className="flex justify-between items-center py-3 px-sm border-[var(--textKill)] border-1 text-[var(--textLight)] text-sm cursor-pointer">
					Continue with Google
					<GoogleIcon size={24} />
				</button> */}
				
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

export default SignInModal
