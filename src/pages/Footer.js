import React from 'react'
import { AiFillGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";



function Footer() {
    return (
        <>
            <footer className="px-4 py-4 dark:bg-white-color2 dark:text-gray-400">
                <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
                    <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
                    <div className="py-2 text-sm text-center dark:text-gray-400">Copyright © 2023 MyProfile designed by Nabilarishajuliana</div>
                    </div>
                    <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
                        <li>
                            <a rel="noopener noreferrer" href="https://instagram.com/nabilarisha01"><FaInstagram style={{ width: "30px", height: "30px" }}/></a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="https://github.com/Nabilarishajuliana"><AiFillGithub style={{ width: "30px", height: "30px" }}/></a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="https://wa.me/0818199220"><AiOutlineWhatsApp style={{ width: "30px", height: "30px" }}/></a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer