import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
    return (
        <main className='bg-background'>
            <section className='max-w-7xl flex justify-center items-center pt-38.5 pb-29.5 px-5 md:px-16' style={{ backgroundImage: "url('/bg.png')", backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-30.25 gap-y-13.75'>
                    <Link href={"/projects/funmi.dsgn"}><Image src={"/funmi.dsgn2.avif"} alt='Funmi Design' width={311} height={311} className='transition-all duration-300 cursor-pointer hover:scale-105' /></Link>
                    <Link href={"/projects/awn"}><Image src={"/awn2.avif"} alt='AWN' width={320} height={320} className='transition-all duration-300 cursor-pointer hover:scale-105' /></Link>
                    <Link href={"/projects/md-catering"}><Image src={"/md-catering2.avif"} alt='MD Catering' width={311} height={312} className='transition-all duration-300 cursor-pointer hover:scale-105' /></Link>
                    <Link href={"/projects/scarves-by-funmi"}><Image src={"/scarves-by-funmi2.avif"} alt='Scarves By Funmi' width={314} height={314} className='transition-all duration-300 cursor-pointer hover:scale-105' /></Link>
                </div>
            </section>
            <section style={{ backgroundImage: "url('/project-bg2.avif')", backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div className='max-w-7xl px-5 md:px-16 flex justify-center items-center pt-25 pb-47 text-background'>
                    <p className='max-w-252.75 text-[50px]'>These projects showcase a range of work in <span className='text-secondary font-medium'>branding</span>, <span className='text-secondary font-medium'>graphic design</span> and <span className='text-secondary font-medium'>visual communication</span>, each developed with a focus on clarity, impact and cohesive design.</p>
                </div>
            </section>
        </main>
    )
}

export default Projects