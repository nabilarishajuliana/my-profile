import React from 'react'
import { FiMenu } from "react-icons/fi";


function Nav() {
    return (
        <div>
           
            <nav class="flex items-center justify-between flex-wrap bg-white-color2 p-6">
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                <img src="/asset/gifLuffy.gif" class="rounded-full mr-2" alt="Logo" width="30" height="30"  />
                    <span class="font-semibold text-xl tracking-tight">My Profile</span>
                </div>
                <div class="block lg:hidden">
                    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div class="text-sm font-semibold lg:flex-grow ">
                        <a href="/" class="block mt-4 lg:inline-block lg:mt-0  hover:text-brown-color2 mr-4">
                            Home
                        </a>
                        <a href="/About" class="block mt-4 lg:inline-block lg:mt-0  hover:text-brown-color2 mr-4">
                            About me
                        </a>
                        <a href="/Contact" class="block mt-4 lg:inline-block lg:mt-0  hover:text-brown-color2">
                            Contact
                        </a>
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}

export default Nav