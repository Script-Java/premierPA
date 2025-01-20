import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo/logo-white.svg'

function Footer() {
  return (
    <div className='bg-neutral mt-40'>
        <footer className="footer container m-auto text-neutral-content items-center p-4">
          <aside className="flex items-center justify-center m-auto space-x-4">
            <Image className='w-20' src={logo} alt='premier logo'></Image>
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          </aside>

        </footer>
    </div>
  )
}

export default Footer