import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

import { FaInstagram } from "react-icons/fa";
import { AiFillGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { SiGmail } from "react-icons/si";



function Contact() {
  return (
    <>
      <Nav />
      <div className='relative'>
        <img
          src="asset/fotobg2.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <section class="relative mt-14">
          <div class="container grid gap-8 px-6 py-12 mx-auto lg:grid-cols-3">
            <div>

              <h1 class="mt-2 text-4xl font-bold text-white-color1 md:text-2xl dark:text-white">My Contact</h1>

              <p class="mt-3 text-brown-color4">these are some of my contacts, easy to chat me ^^</p>
            </div>

            <div class="grid grid-cols-1 gap-12 lg:col-span-2 sm:grid-cols-2 ">

              <div class="p-4 rounded-lg bg-blue-50 md:p-6 hover:shadow-xl bg-white-color2">
                
                <a href='https://instagram.com/nabilarisha01'>
                  <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                  <FaInstagram style={{ width: "50px", height: "50px" }} />
                </span>
                <h2 class="mt-4 text-base font-semibold text-gray-800 dark:text-white"> My Instagram</h2>
                <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">@nabilarisha01</p>
                </a>
                
              </div>

              <div class="p-4 rounded-lg bg-blue-50 md:p-6 hover:shadow-xl bg-white-color2">
                <a href='https://github.com/Nabilarishajuliana'>
                  <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                  <AiFillGithub style={{ width: "50px", height: "50px" }} />
                </span>

                <h2 class="mt-4 text-base font-semibold text-gray-800 dark:text-white">My Github</h2>
                <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">nabilarishajuliana</p>
                </a>
                
              </div>

              <div class="p-4 rounded-lg bg-blue-50 md:p-6 hover:shadow-xl bg-white-color2">
                <a href='mailto:nabila_juliana_30rpl@student.smktelkom-mlg.sch.id'>
                 <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                  <SiGmail style={{ width: "50px", height: "50px" }} />
                </span>

                <h2 class="mt-4 text-base font-semibold  dark:text-white">My Gmail</h2>
                <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">nabila_juliana_30rpl@student.smktelkom-mlg.sch.id</p> 
                </a>
                
              </div>

              <div class="p-4 rounded-lg bg-blue-50 md:p-6 hover:shadow-xl bg-white-color2">
                <a href='https://wa.me/0818199220'>
                  <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                  <AiOutlineWhatsApp style={{ width: "50px", height: "50px" }} />
                </span>
                <h2 class="mt-4 text-base font-semibold text-gray-800 dark:text-white">My WhatsApp</h2>
                <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">+62 818199220</p>
                </a>
                
              </div>
            </div>
          </div>
        </section>
      </div>


      <Footer />


    </>

  )
}

export default Contact