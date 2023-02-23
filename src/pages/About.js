import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { MdFavorite } from "react-icons/md";


function About() {
    return (
        <>
            <Nav />
            <div className='bg-brown-color3'>
                
                <section className=" relative mt-16">

                    <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 ">
                        <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto  sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12">
                            <img src="/asset/foto4.jpeg" alt="" className="shadow-lg transition-shadow duration-300 hover:shadow-xl object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 pt-0 mt-5" />
                            <div className="p-6 mt-6 space-y-2 lg:col-span-5">
                                <h3 className="text-2xl font-bold sm:text-5xl  group-focus:underline text-white-color1 pb-2 ">About Me!</h3>
                                <p className='text-white-color2 font-semibold'>Nama lengkap: Nabila Risha Juliana<br />
                                    Panggilan: Risha<br />
                                    Kelas: XI RPL 1<br />
                                    Alamat: Jl.Candi Agung lll no. 11 <br />
                                    Tgl lahir: 19 Juli 2006<br />
                                    No telp: 0818199220<br />
                                    Asal sekolah: SMK TELKOM MALANG<br />
                                    Hobi: menonton,makeup<br />
                                    Softskill: Self-Control <br />
                                    Kesukaan: Luffy,Renjun </p>
                            </div>
                        </a>


                    </div>
                </section>

                <div className="px-4 pt-16 pb-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 relative">

                    <div className="mx-auto sm:text-center lg:max-w-2xl">
                        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-8">

                            <h2 className="max-w-lg mb-2 font-sans text-3xl font-bold leading-none tracking-tight text-white-color1 sm:text-4xl md:mx-auto ">
                                <span className="relative inline-block ">
                                    <span className="relative">Some</span>
                                </span>{' '}
                                FunFact
                            </h2>
                            <p className="text-base text-black-color1 md:text-lg text-brown-color4">
                                Get to know about my FunFact
                            </p>
                        </div>
                        <div className="mb-6 transition-shadow duration-300 hover:shadow-xl lg:mb-10">
                            <img
                                className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                                src="asset/foto3.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt=""
                            />
                        </div>
                        <p className="max-w-xl mb-4 text-base text-white-color2 sm:mx-auto font-semibold">
                            Risha, Seorang siswi dari keahlian perangkat lunak yang saat ini menempuh pendidikan di SMK Telkom Malang. Anak pertama dari 4 bersaudara. Gadis yang lahir di bekasi ini memiliki hobi menonton film. Funfact nya, ia sangat suka sekali dengan series one piece.tokoh favoritnya adalah luffy. baginya, luffy adalah sosok yang menginspirasinya. disamping luffy, ada satu tokoh lagi yang sangat menginspirasi bagi risha, yaitu Renjun NCT yang merupakan personil boygroup dari korea. selain itu ia juga suka bermain makeup entah itu untuk dirinya sendiri ataupun orang lain. risha juga merupakan salah satu anggota dari salah satu organisasi di sekolah yaitu COMET.pada saat pertama kali kenal ia memang pemalu tetapi jika sudah kenal dekat risha orangnya sangat ceria dan aktif. dia sering mendengarkan lagu saat mengerjakan tugas, entah itu saat ngoding ataupun lainnya. Ketika ia sudah sukses,ia sangat ingin bisa pergi ke korea dan mengunjungi SM Entertaiment yaitu agensi yang membawahi boygroup NCT. Sekian terimakasih ^3^
                        </p>

                    </div>
                </div>

                <div className='relative'>
                    <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
                        <div className="container p-6 mx-auto space-y-8">
                            <div className="space-y-2 text-center text-white-color1">
                                <h2 className="text-3xl font-bold">SOME OF MY WORKS </h2>
                                <p className=" text-lg text-brown-color4">Check It Out!</p>
                            </div>
                            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                                <article className="flex flex-col bg-white-color2">
                                        <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="/asset/porto1.png" />
                                    <div className="flex flex-col flex-1 p-6">
                                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Design w/ Photoshop</h3>
                                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                            <span>2022</span>
                                            <span><MdFavorite/></span>
                                        </div>
                                    </div>
                                </article>
                                <article className="flex flex-col bg-white-color2">
                                        <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="/asset/porto6.jpeg" />
                                    <div className="flex flex-col flex-1 p-6">
                                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Design UI School Login</h3>
                                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                            <span>2022</span>
                                            <span><MdFavorite/></span>
                                        </div>
                                    </div>
                                </article>
                                <article className="flex flex-col bg-white-color2">
                                        <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="/asset/porto2.png" />

                                    <div className="flex flex-col flex-1 p-6">
                                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Design UI Ayomasak</h3>
                                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                            <span>2022</span>
                                            <span><MdFavorite/></span>
                                        </div>
                                    </div>
                                </article>
                                <article className="flex flex-col bg-white-color2">
                                    <a rel="noopener noreferrer" href="https://praktik2-kelompok7.vercel.app/" aria-label="Te nulla oportere reprimique his dolorum">
                                        <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="/asset/porto4.png" />
                                    </a>
                                    <div className="flex flex-col flex-1 p-6">
                                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">React Web Bakery TrippleN</h3>
                                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                            <span>2023</span>
                                            <span><MdFavorite/></span>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default About