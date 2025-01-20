"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/logo/logo-white.svg'
import { HiOutlineMenuAlt3 } from "react-icons/hi";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    
    const toggleMenu = () => {
        setMenuOpen((prev) => !prev)
    }

    const downloadLOR = () => {
      const link = document.createElement('a');
      link.href = '/TXLOR.pdf'; // Replace with the actual path to the LOR file
      link.download = 'TXLOR.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };


  return (
    <div className='container m-auto'>
        <div className="navbar p-4 bg-base-100">
          <div className="flex-1">
            <Link href={'/'} passHref>
                <Image src={logo} alt='logo premier'/>
            </Link>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal px-1">
              <li><Link className='btn btn-ghost' href={'/'} passHref>Home</Link></li>
              <li><Link className='btn btn-ghost' href={'#services'} passHref>Services</Link></li>
              <li><Link className='btn btn-ghost' href={'#about'} passHref>About</Link></li>
              <li><Link className='btn btn-ghost' href={'#contact'} passHref>Contact</Link></li>
              <li><button onClick={downloadLOR} className='btn btn-outline'>Download LOR</button></li>
            </ul>
          </div>

          <div className="block lg:hidden">
            <button onClick={toggleMenu} className='btn btn-outline'><HiOutlineMenuAlt3 className='text-xl'/></button>
          </div>

        </div>

        {menuOpen && (
            <div className="">
                <ul className="menu menu-sm">
                    <li><Link className='btn btn-ghost' href={'/'} passHref>Home</Link></li>
                    <li><Link className='btn btn-ghost' href={'#services'} passHref>Services</Link></li>
                    <li><Link className='btn btn-ghost' href={'#about'} passHref>About</Link></li>
                    <li><Link className='btn btn-ghost' href={'#contact'} passHref>Contact</Link></li>
                    <li><button onClick={downloadLOR} className='btn btn-outline'>Download LOR</button></li>
                </ul>
            </div>
        )}
    </div>
  )
}

export default Navbar