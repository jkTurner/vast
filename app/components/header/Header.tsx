'use client'

import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import MainButton from '../ui/buttons/MainButton'
import VastLogo from '../ui/buttons/VastLogo'
import MobileMenu from './MobileMenu'
import { HamburgerIcon } from '@/assets/Icons'
import SignUpModal from '../(auth)/modals/SignUpModal'
import SignInModal from '../(auth)/modals/SignInModal'
import UserMenu from './UserMenu'
import { useUser } from '@/hooks/useUser'
// import CartMenu from '../ui/cart/CartMenu'
import dynamic from 'next/dynamic'
const CartMenu = dynamic(() => import('../ui/cart/CartMenu'), { ssr: false })

const Header = () => {

	const [activeModal, setActiveModal] = useState<null | 'signIn' | 'signUp'>(null);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const { data: user, refetch } = useUser();

	const toggleMenu = () => {
		setIsMenuOpen(prev => !prev);
	}

	// handle mobile menu visibility
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768 && isMenuOpen) {
			setIsMenuOpen(false);
			}
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize);
		}, [isMenuOpen]
	);

	const handleLoginSuccess = () => {
		refetch();
		setActiveModal(null);
	}
	
	return (
		<div className="container px-sm">
			<div className="flex w-full justify-between items-center py-md h-[80px] md:h-[120px]">
			
			<VastLogo />

			{/* desktop nav */}
			<div className="hidden md:flex gap-md items-center justify-center">
				<Navbar color="var(--primary)" />
				<CartMenu />
				{user ? (
					<div className="relative">
						<UserMenu />
					</div>
				): (
					<MainButton name="Sign in" onClick={() => setActiveModal('signIn')} />
				)}

			</div>

			{activeModal === 'signIn' && (
				<SignInModal
					onClose={() => setActiveModal(null)}
					switchToSignUp={() => setActiveModal('signUp')}
					onLoginSuccess={handleLoginSuccess}
				/>
			)}
			{activeModal === 'signUp' && (
				<SignUpModal
					onClose={() => setActiveModal(null)}
					switchToSignIn={() => setActiveModal('signIn')}
				/>
			)}

			{/* mobile nav */}
			<button onClick={toggleMenu} className="md:hidden flex gap-xxs items-center cursor-pointer p-sm">
				<CartMenu />
				<HamburgerIcon size={32} />
			</button>

			<MobileMenu 
				isOpen={isMenuOpen} 
				isUser={!!user}
				onClose={() => setIsMenuOpen(false)} 
				onOpenSignIn={() => setActiveModal("signIn")} 
				name={user?.full_name || "Friend" }
				image={user?.avatar_url}
			/>

			</div>
		</div>
	)
}

export default Header
