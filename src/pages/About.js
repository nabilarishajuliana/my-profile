import React from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { MdFavorite } from "react-icons/md";


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

              
                
            </div>
                

        </>
    )
}

export default About