import Image from 'next/image'
import React from 'react'

const MdFoodConcepts = () => {
    return (
        <main>
            <section className='max-w-7xl flex justify-center items-center pt-38.5 pb-20 px-5 md:px-16 text-secondary text-[32px]'>
                <div className='flex flex-col'>
                    <div className='flex flex-col items-center gap-5.75 border-b border-primary pb-11.75'>
                        <h1 className='text-[64px] font-semibold text-center'>Identity for a <span className='text-primary font-light italic'>Creative Design</span> Brand</h1>
                        <img src="/funmi.dsgn-project.avif" alt="funmi.dsgn Project" className='w-full md:h-[419px]' />
                        <p><span className='font-semibold'>Funmi.dsgn</span> is a creative design brand dedicated to helping businesses  and individuals communicate their ideas through thoughtful, visually compelling design. </p>
                        <p>The brand focuses on delivering modern, strategic, and adaptable design solutions that enhance brand identity and create meaningful visual impact.</p>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-between gap-3.5 border-b border-primary py-11.75'>
                        <div className='flex flex-col gap-3'>
                            <h2 className='font-bold'>Objective</h2>
                            <p>The goal was to build a creative studio that helps brands and individuals share their ideas clearly and confidently.</p>
                            <p>My aim was to craft a look that&apos;s creative, and professional, connecting with people across digital and print.</p>
                        </div>
                        <Image src={"/funmi.dsgn-project2.avif"} alt='funmi.dsgn Project2' width={353} height={216} />
                    </div>
                    <div className='flex flex-col gap-3.5 py-11.75'>
                        <h2 className='font-bold'>Identity Design</h2>
                        <p>The name Funmi.dsgn is derived from the owner&apos;s name, Funmi, while “dsgn” is a shortened form of “design,” giving the brand a modern and stylish feel. To emphasize its creative focus, the tip of a calligraphic pen is integrated at the top of the letter “i,” representing creativity, precision, and the art of visual expression. </p>
                        <p>The playful typography adds a fun, lively character, making the logo feel approachable while still reflecting its creative purpose.</p>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-3 items-center gap-7 mb-7'>
                        <Image src={"/funmi.dsgn-project3.avif"} alt='funmi.dsgn Project3' width={299} height={254} />
                        <Image src={"/funmi.dsgn-project4.avif"} alt='funmi.dsgn Project4' width={587} height={206} />
                        <Image src={"/funmi.dsgn-project5.avif"} alt='funmi.dsgn Project5' width={324} height={254} />
                    </div>
                    <img src={"/funmi.dsgn-project6.avif"} alt='funmi.dsgn Project6' className='w-full' />
                </div>
            </section>
        </main>
    )
}

export default MdFoodConcepts