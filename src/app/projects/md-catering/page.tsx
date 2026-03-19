import Image from 'next/image'
import React from 'react'

const MdCatering = () => {
    return (
        <main>
            <section className='max-w-7xl flex justify-center items-center pt-38.5 pb-20 px-5 md:px-16 text-secondary text-[32px]'>
                <div className='flex flex-col'>
                    <div className='flex flex-col items-center gap-5.75 border-b border-primary pb-11.75'>
                        <h1 className='text-[64px] font-semibold text-center'>Poster designs for a <span className='text-primary font-light italic'>Catering</span> Brand</h1>
                        <img src="/md-catering-project.avif" alt="MD Catering Project" className='w-full md:h-[380px]' />
                        <p><span className='font-semibold'>MD Food Concepts & Deliveries</span>  is a catering brand dedicated to creating delicious meals for all occasions. The brand focuses on delivering thoughtfully prepared, visually appealing, and flavorful dishes that bring people together and make every event memorable. </p>
                    </div>
                    <div className='flex flex-col gap-3.5 border-b border-primary py-11.75'>
                        <h2 className='font-bold'>Objective</h2>
                        <p>The goal was to create visuals that make MD Food Concepts & Deliveries memorable, using posters and stickers to promote its tasty meals.</p>
                        <p>My aim was to design posters and stickers that showcase the brand&apos;s delicious offerings and approachable style, connecting with customers across events and social platforms.</p>
                    </div>
                    <div className='flex flex-col gap-3.5 py-11.75'>
                        <h2 className='font-bold'>Poster Design</h2>
                        <p>The “Spice Up Your September” and “Happy New Year” posters were designed to celebrate special occasions, using bold colors and playful typography to create festive, engaging visuals that capture attention and reflect the brand&apos;s lively personality.</p>
                        <p>The layouts are visually balanced and brand-consistent, making the messages both engaging and memorable.</p>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-between'>
                        <Image src={"/md-catering-project2.avif"} alt='MD Catering Project2' width={514} height={642} />
                        <Image src={"/md-catering-project3.avif"} alt='MD Catering Project3' width={514} height={642} />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default MdCatering