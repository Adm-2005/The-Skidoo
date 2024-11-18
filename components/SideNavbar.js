"use client";
import { useState } from 'react';
import Link from 'next/link';
import { IconContext } from 'react-icons';
import { MdChatBubbleOutline, MdChatBubble } from "react-icons/md";
import { AiOutlineBell, AiFillBell } from "react-icons/ai";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { MdOutlineQuiz, MdQuiz } from "react-icons/md";
import { IoBookOutline, IoBook } from "react-icons/io5";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { RiMenu4Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { CiShare1 } from "react-icons/ci";

export default function SideNavbar() {
    const [isOpen, setIsOpen] = useState(false);  
    const [activeNavItem, setActiveNavItem] = useState("Blog");  

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    const handleItemClick = (name) => {
        setActiveNavItem(name);
    }

    const navItems = [
        {
            name: "Chat",
            icon_normal: <MdChatBubbleOutline />,
            icon_active: <MdChatBubble />,
            link: "/chat"
        },
        {
            name: "Quiz",
            icon_normal: <MdOutlineQuiz />,
            icon_active: <MdQuiz />,
            link: "/quiz"
        },
        {
            name: "Blog",
            icon_normal: <IoBookOutline />,
            icon_active: <IoBook />,
            link: "/blog"
        },
        {
            name: "Notifications",
            icon_normal: <AiOutlineBell />,
            icon_active: <AiFillBell />,
            link: "/notifications"
        },
        {
            name: "Likes",
            icon_normal: <FaRegHeart />,
            icon_active: <FaHeart />,
            link: "/liked-posts"
        }
    ];

    return (
        <nav className={`absolute z-10 md:fixed flex flex-col gap-[55px] min-h-screen bg-white ${isOpen ? 'px-5 py-2 w-[80vw] md:w-[300px] border-r' : 'md:w-[60px] md:border-r items-center'}`}>
            <div>
                <IconContext.Provider onClick={handleOpen} value={{ size: '40px', className: 'p-1 md:hidden absolute left-0 bg-white rounded-full'}}>
                    {
                    isOpen 
                        ? <IoMdClose onClick={handleOpen} /> 
                        : <RiMenu4Line onClick={handleOpen} />
                    }
                </IconContext.Provider>

                <IconContext.Provider value={{ size: '40px', className: `${isOpen ? 'hidden' : 'hidden md:flex'}`}}>
                    <RxCaretRight onClick={handleOpen} />
                </IconContext.Provider>

                <div className={`items-center ${isOpen ? 'flex' : 'hidden'}`}>
                    <IconContext.Provider value={{ size: '40px', className: 'hidden md:flex bg-white rounded-full'}}>
                        <RxCaretLeft onClick={handleOpen} />
                    </IconContext.Provider>
                    <p className='hidden md:flex font-itim font-bold text-2xl'>The Skidoo</p>
                </div>

            </div>

            <ul className={`flex-col gap-6 ${isOpen ? "flex" : "hidden md:flex"}`}>
                <li className='md:hidden w-full flex justify-center'>
                    <p className='text-2xl font-itim font-bold'>The Skidoo</p>
                </li>
                {navItems.map((item, index) => (
                    <li key={index} onClick={() => handleItemClick(item.name)} className='gap-1'>
                        <Link href={item.link} className='flex items-center justify-start gap-3'>
                            <IconContext.Provider value={{ size: '30px' }}>
                                {activeNavItem === item.name ? item.icon_active : item.icon_normal}
                            </IconContext.Provider> 
                            <p className={`text-md font-semibold font-poppins ${isOpen ? 'flex' : 'hidden'}`}>{item.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
