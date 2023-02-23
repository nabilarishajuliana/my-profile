import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

function Home() {
    return (
        <>
            <Nav />
            <div className="relative mt-10">
                <img
                    src="asset/fotobg2.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    className="absolute inset-0 object-cover w-full h-full"
                    alt=""
                />
                <div className="relative bg-gray-900 bg-opacity-25">
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="flex flex-col items-center justify-between xl:flex-row">
                            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white-color1 sm:text-4xl sm:leading-none">
                                    Hai There! <br className="hidden md:block" />
                                    I'm{' '}
                                    <span className="text-teal-accent-400"> Nabila Risha Juliana</span>
                                </h2>
                                <p className="max-w-xl mb-4 text-base text-brown-color4 md:text-lg">
                                I'm a student at SMK Telkom Malang majoring in RPL, let's find out more about me ^3^
                                </p>
                                <button class="bg-white-color2 hover:bg-white-color1 text-black-color1 font-bold py-2 px-4 border-b-4 border-white-color3 hover:border-blue-500 rounded">
                                    <a
                                        href="/About"
                                        aria-label=""
                                        className="inline-flex items-center duration-200 "
                                    >
                                        Let's Go
                                        <svg
                                            className="inline-block w-3 ml-2"
                                            fill="currentColor"
                                            viewBox="0 0 12 12"
                                        >
                                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                        </svg>
                                    </a>
                                </button>

                            </div>
                            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                                <div className="bg-white-color1 rounded shadow-2xl p-7 sm:p-10">
                                    <img src="asset/foto1.jpeg" class="" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home