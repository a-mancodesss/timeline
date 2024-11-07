import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function TopBar() {
  return (
    <nav className='topbar'>
        <Link href='/' className='flex items-center gap-4'>
        <Image src={'/assets/logo.svg'} width={28} height={28} alt='logo' />
        <p className='text-heading3-bold text-light-1 max-xs:hidden'> TimeLine</p>
         </Link>
    </nav>
  )
}
