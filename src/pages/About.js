import React from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { FaInstagram , FaFacebookF } from "react-icons/fa";
import { AiFillGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { GrLocation } from "react-icons/gr";


function About() {
    return (
        <>
            <div className='bg-brown-color3'>
                <section className=" relative mt-16">

                    <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 ">
                        <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto  sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12">
                            <img src="/asset/makanan3.jpg" alt="" className="shadow-lg transition-shadow duration-300 hover:shadow-xl object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 pt-0 mt-5" />
                            <div className="p-6 mt-6 space-y-2 lg:col-span-5">
                                <h3 className="text-2xl font-bold sm:text-5xl  group-focus:underline text-white-color1 pb-2 ">About Huang Resto!</h3>
                                <p className='text-white-color2 font-semibold'>
                                    Samwon House menyajikan makanan khas Korea yang sudah disesuaikan dengan rasa Indonesia.
                                    Eksterior dan interior Huang Resto sangat khas dengan dinding yang berwarna-warni dengan poster poster idol korea yang tersusun rapi di dinding. Ada pula kursi kecil warna-warni yang membuat suasana jadi lebih hidup.
                                    terdapat ruangan outdoor dengan tempat duduk lesehan disertai bunga bunga indah di sekelilingnya
                                    Menu andalan dari restoran Korea di ini antara lain, chicken wings , beef buldak, bulgogi, dan lain-lain.
                                </p>
                            </div>
                        </a>


                    </div>
                </section>

                <div className='relative'>
                    <img
                        src="asset/fotobg2.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        className="absolute inset-0 object-cover w-full h-full"
                        alt=""
                    />
                    <section class="relative mt-14">
                        <div class="container grid gap-8 px-6 py-12 mx-auto lg:grid-cols-3">
                            <div>

                                <h1 class="mt-2 text-4xl font-bold text-white-color1 md:text-2xl dark:text-white">Our Resto</h1>

                                <p class="mt-3 text-brown-color4">Check out about Huang Resto ^^</p>
                            </div>

                            <div class="grid grid-cols-1 gap-12 lg:col-span-2 sm:grid-cols-2 ">

                                <div class="p-4 rounded-lg bg-blue-50 md:p-6 hover:shadow-xl bg-white-color2">

                                    <a href='https://instagram.com/nabilarisha01'>
                                        <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                                            <FaInstagram style={{ width: "50px", height: "50px" }} />
                                        </span>
                                        <h2 class="mt-4 text-base font-semibold text-gray-800 dark:text-white"> Instagram</h2>
                                        <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">@HuangResto</p>
                                    </a>

                                </div>

                                <div class="p-4 rounded-lg bg-blue-50 md:p-6 hover:shadow-xl bg-white-color2">
                                    <a href='https://github.com/Nabilarishajuliana'>
                                        <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                                            <GrLocation style={{ width: "50px", height: "50px" }} />
                                        </span>

                                        <h2 class="mt-4 text-base font-semibold text-gray-800 dark:text-white">Location</h2>
                                        <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">Malang, Jawa Timur</p>
                                    </a>

                                </div>

                                <div class="p-4 rounded-lg bg-blue-50 md:p-6 hover:shadow-xl bg-white-color2">
                                    <a href='https://web.facebook.com/settings?tab=profile&section=username'>
                                        <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                                            <FaFacebookF style={{ width: "50px", height: "50px" }} />
                                        </span>

                                        <h2 class="mt-4 text-base font-semibold  dark:text-white">Facebook</h2>
                                        <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">HuangResto</p>
                                    </a>

                                </div>

                                <div class="p-4 rounded-lg bg-blue-50 md:p-6 hover:shadow-xl bg-white-color2">
                                    <a href='https://wa.me/0818199220'>
                                        <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                                            <AiOutlineWhatsApp style={{ width: "50px", height: "50px" }} />
                                        </span>
                                        <h2 class="mt-4 text-base font-semibold text-gray-800 dark:text-white"> WhatsApp</h2>
                                        <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">+62 818199220</p>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </div>


        </>
    )
}

export default About