"use client";
import { useState } from "react";
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
            name: 'Testimonials',
            href: '/#testimonials'
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
        <nav className='flex lg:flex-row w-full items-center justify-around absolute p-4'>
            <div>
                <h1 className="font-bold text-2xl">The Skidoo</h1>
            </div>

            <ul className="flex gap-8">
                {
                    navLinks.map((navLink, index) => (
                        <li key={index}>
                            <a className="font-medium text-lg hover:text-slate-400" href={navLink.href}>
                            {navLink.name}
                            </a>
                        </li>
                    ))
                }
            </ul>

            <div className="flex gap-2">
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
