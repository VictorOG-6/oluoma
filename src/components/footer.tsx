import React from 'react'
import { FaBehance, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <section className='bg-foreground py-16 pb-20'>
            <div className='lg:max-w-7xl text-background flex flex-col gap-16 px-5 md:px-16'>
                <div className='flex flex-col gap-7'>
                    <h2 className='text-[43px] font-bold'>What I Offer</h2>
                    <div className='grid grid-cols-3 justify-items-center text-[32px]'>
                        <p>Event Branding</p>
                        <p>Logo design</p>
                        <p>Social Media design</p>
                        <p>Poster & Campaign design</p>
                        <p>Creative Direction</p>
                        <p>Brand Identity design</p>
                    </div>
                </div>
                <div className='flex items-center justify-between gap-24'>
                    <div className='h-0.5 w-full bg-background' />
                    <p className='w-full text-4xl font-semibold text-nowrap'>Let’s Create Magic!</p>
                    <div className='h-0.5 w-full bg-background' />
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <FaBehance size={40} href='/' className='text-background cursor-pointer transition-all duration-300 hover:text-[#EE51B4]' />
                        <FaXTwitter size={40} href='/' className='text-background cursor-pointer transition-all duration-300 hover:text-[#EE51B4]' />
                        <FaInstagram size={40} href='/' className='text-background cursor-pointer transition-all duration-300 hover:text-[#EE51B4]' />
                        <FaLinkedinIn size={40} href='/' className='text-background cursor-pointer transition-all duration-300 hover:text-[#EE51B4]' />
                    </div>
                    <p className='text-[32px]'>anuebunwaoluoma@gmail.com</p>
                </div>
            </div>
        </section>
    )
}

export default Footer