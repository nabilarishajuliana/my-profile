import Link from "next/link"
import React, { useState } from "react"

import { HiOutlineDownload } from 'react-icons/hi'
import { FaBars, FaTimes } from 'react-icons/fa'


function Nav() {
    const [nav, setNav] = useState(false)
    const links = [
        {
            id: 1,
            name: 'home',
            link: '/'
        },
        {
            id: 2,
            name: 'about',
            link: 'About'
        },
        {
            id: 4,
            name: "contact",
            link: 'Contact'
        },
    ]
    return (
        <>
            <div className='bg-white-color2 fixed top-0 w-[100%] z-10'>
                <div className='container w-full mx-auto flex justify-between items-center py-4'>
                    <div className="flex mx-3">
                        <img src="/asset/gifLuffy.gif" class="object-cover rounded-full mr-2" alt="Logo" width="30" height="30" />
                        <div className=' text-[24px] text-pink-400 px-2 font-semibold'>My Profile</div>
                    </div>

                    <ul className="hidden md:flex gap-4 justify-between items-center px-14">
                        <li>
                            <Link href={"/"} className="hover:text-brown-color2">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href={"About"} className="hover:text-brown-color2">
                                About Me
                            </Link>
                        </li>

                        <li>
                            <Link href={"Contact"} className="hover:text-brown-color2">
                                Contact
                            </Link>
                        </li>
                    </ul>


                    <div onClick={() => setNav(!nav)} className="block cursor-pointer md:hidden text-[24px] text-pink-400 pr-4">
                        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                    </div>
                    {nav && (
                        <>
                            <ul className="flex flex-col justify-center items-center absolute top-14 left-0 w-full h-200 bg-white-color2 text-white">
                                {links.map(({ id, name, link }) => (
                                    <li
                                        key={id}
                                        className="px-4 cursor-pointer capitalize py-4 text-2xl"
                                        onClick={() => setNav(!nav)}
                                    >
                                        <Link href={link}>{name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Nav