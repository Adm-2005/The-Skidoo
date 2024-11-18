"use client";
import { useState } from "react";
import Link from 'next/link';
import { IconContext } from "react-icons";
import { MdMenu, MdMenuOpen } from "react-icons/md";

export default function Navbar() {
    const [ navOpen, setNavOpen ] = useState(false);

    const navLinks = [
        {
            name: 'Home',
            href: '/'
        },
        {
            name: 'Blog',
            href: '/blog'
        },
        {
            name: 'Chat',
            href: '/#chat'
        },
        {
            name: 'About Us',
            href: '/#about'
        }
    ]
    
    const handleMenuToggle = () => {
        setNavOpen(!navOpen);
    }

    return (
        <nav className={navOpen ? 'flex lg:flex-row w-full items-center justify-between bg-[#4BC8DE] lg:justify-around absolute p-4' : 'flex font-roboto lg:flex-row w-full items-center justify-between lg:justify-around absolute p-4'}>
            <Link href='/'>
                <div>
                    <h1 className="font-bold font-itim text-xl lg:text-2xl">The Skidoo</h1>
                </div>
            </Link>

            <ul className={navOpen 
                    ? 'flex flex-col lg:flex-row font-poppins gap-8 fixed lg:static top-[60px] lg:top-0 right-0 h-full w-full bg-[#4BC8DE] lg:bg-transparent p-4 lg:p-0 transform translate-x-0 transition-transform duration-300' 
                    : 'hidden lg:flex gap-6 font-poppins items-center justify-center transform translate-x-full lg:translate-x-0 transition-transform duration-400'}>
                {navLinks.map((navLink, index) => (
                    <li key={index} className='text-black hover:text-sky-800 text-lg lg:text-lg font-medium border-b lg:border-0'>
                        <Link href={navLink.href} className=''>
                            {navLink.name}
                        </Link>
                    </li>
                ))}
                <li className='flex flex-row gap-4 font-itim lg:hidden mt-4'>
                    <button type="button" className="rounded-full font-bold border border-black px-4 py-2 w-[140px]">Login</button>
                    <button type="button" className="bg-black hover:bg-white text-white hover:text-black font-bold rounded-full px-4 py-2 w-[140px]">Register</button>
                </li>
            </ul>


            <div className="gap-2 hidden font-itim lg:flex">
                <button type="button" className="rounded-full font-bold border border-black px-4 py-2 w-[100px]">Login</button>
                <button type="button" className="bg-black hover:bg-white text-white hover:text-black font-bold rounded-full px-4 py-2 w-[100px]">Register</button>
            </div>

            <div className='flex items-center lg:hidden'>
                <IconContext.Provider value={{ size: '35px', color: '#000000' }}>
                    {
                        navOpen ? <MdMenuOpen onClick={handleMenuToggle} /> : <MdMenu onClick={handleMenuToggle} />
                    }
                </IconContext.Provider>
            </div>
        </nav>
    );
}
