import Image from 'next/image'
import React from 'react'

const ScarvesByFunmi = () => {
    return (
        <main>
            <section className='max-w-7xl flex justify-center items-center pt-38.5 pb-20 px-5 md:px-16 text-secondary text-[32px]'>
                <div className='flex flex-col'>
                    <div className='flex flex-col items-center gap-5.75 border-b border-primary pb-11.75'>
                        <h1 className='text-[64px] font-semibold text-center'>Identity for a <span className='text-primary font-light italic'>Scarf</span> Brand</h1>
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-16'>
                            <Image src={"/scarves-by-funmi-project.avif"} alt='Scarves by Funmi Project' width={417} height={320} />
                            <Image src={"/scarves-by-funmi-project2.avif"} alt='Scarves by Funmi Project2' width={320} height={320} />
                            <Image src={"/scarves-by-funmi-project3.avif"} alt='Scarves by Funmi Project3' width={320} height={320} />
                        </div>
                        <p><span className='font-semibold'>Scarves by Funmi</span> is a fashion brand dedicated to creating versatile and stylish scarves that complement any wardrobe.</p>
                        <p>The brand uses neutral tones and classic patterns to create scarves that are elegant, versatile, and stylish.</p>
                    </div>
                    <div className='flex flex-col gap-3.5 border-b border-primary py-11.75'>
                        <h2 className='font-bold'>Objective</h2>
                        <p>The goal was to create a scarf brand that combines style, versatility, and timeless elegance, offering pieces that complement any wardrobe.</p>
                        <p>My aim was to create a visual identity and promotional designs that give the brand a consistent, elegant, and approachable look across all touchpoints.</p>
                    </div>
                    <div className='flex flex-col gap-3.5 py-11.75'>
                        <h2 className='font-bold'>Identity Design</h2>
                        <p>The Scarves by Funmi logo merges the letters “SBF” into a unique monogram, with a scarf icon in the “B” to represent the product. The brand name curves elegantly underneath, giving the logo a stylish, balanced, and approachable look that reflects the brand&apos;s fashion-forward identity.</p>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-between mb-11.75'>
                        <Image src={"/scarves-by-funmi-project4.avif"} alt='Scarves by Funmi Project4' width={734} height={338} />
                        <Image src={"/scarves-by-funmi-project5.avif"} alt='Scarves by Funmi Project5' width={338} height={338} />
                    </div>
                    <img src="/scarves-by-funmi-project6.avif" alt="Scarves by Funmi Project6" className='w-full mb-11.75' />
                    <img src="/scarves-by-funmi-project7.avif" alt="Scarves by Funmi Project7" className='w-full mb-11.75' />
                    <div className='w-full flex items-center justify-center'>
                        <img src="/scarves-by-funmi-project8.avif" alt="Scarves by Funmi Project8" className='w-full lg:w-217 lg:h-271.25' />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ScarvesByFunmi