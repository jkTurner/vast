'use client'

import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import MainButton from '../ui/buttons/MainButton'
import VastLogo from '../ui/buttons/VastLogo'
import MobileMenu from './MobileMenu'
import Link from 'next/link'
import { HamburgerIcon } from '@/assets/Icons'

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen])

  return (
    <div className="container px-sm">
      <div className="flex w-full justify-between items-center py-md h-[80px] md:h-[120px]">
        
        <VastLogo />

        {/* desktop nav */}
        <div className="hidden md:flex gap-xl items-center justify-center">
          <Navbar color="primary" />
          <Link href="/sign-in">
            <MainButton name = "Sign in" />
          </Link>
        </div>

        {/* mobile nav */}
        <button onClick={toggleMenu} className="md:hidden cursor-pointer p-sm">
          <HamburgerIcon size={32} />
        </button>

        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      </div>
    </div>
  )
}

export default Header
