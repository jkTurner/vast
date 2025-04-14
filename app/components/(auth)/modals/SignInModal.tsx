'use client'

import React, { useEffect } from 'react'
import MainButton from '../../ui/buttons/MainButton'
import { CloseIcon, GoogleIcon } from '@/assets/Icons'
import styles from "./modal.module.css"

interface SignInModalProps {
  onClose: () => void
  switchToSignUp: () => void
}

const SignInModal: React.FC<SignInModalProps> = ({ onClose, switchToSignUp }) => {

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				onClose();
			}
		}

		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [onClose]);

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs">

			<div className={`flex flex-col bg-[var(--secondary)] p-sm w-[90%] max-w-[500px] ${styles.modalEnter}`}>

				<div className="flex justify-between items-center">
					<h2 className="text-lg font-bold">Sign In</h2>
					<CloseIcon size={18} onClick={onClose} className="cursor-pointer" />
				</div>
				
				{/* Sign In Form */}
				<form className="flex flex-col w-full gap-xs mt-sm mb-md">

					<input
						type="email"
						placeholder='Email'
						className="inputFieldUnderline"
					/>
						<input
							type="password"
							placeholder="Password"
							className="inputFieldUnderline mb-sm"
						/>

					<MainButton onClick={onClose} name='Sign In' background='var(--primary)' />

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

export default SignInModal
