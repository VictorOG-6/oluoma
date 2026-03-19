import Image from 'next/image'
import React from 'react'

const AWN = () => {
    return (
        <main>
            <section className='max-w-7xl flex justify-center items-center pt-38.5 pb-20 px-5 md:px-16 text-secondary text-[32px]'>
                <div className='flex flex-col'>
                    <div className='flex flex-col items-center gap-5.75 border-b border-primary pb-11.75'>
                        <h1 className='text-[64px] font-semibold text-center'>Identity for a <span className='text-primary font-light italic'>Creative Design</span> Brand</h1>
                        <Image src={"/awn-project.avif"} alt="AWN Project" width={768} height={396} />
                        <p><span className='font-semibold'>A Woman&apos;s Nest</span> is a wellness brand dedicated to supporting young women through education, emotional well-being, and community. The brand focuses on providing simple, practical financial guidance, promoting mental wellness through safe and supportive spaces, and fostering a community where young women can grow in confidence, stability, and balance.</p>
                    </div>
                    <div className='flex flex-col gap-3.5 border-b border-primary py-11.75'>
                        <h2 className='font-bold'>Objective</h2>
                        <p>The goal was to present a wellness brand that supports young women through practical financial education, mental well-being, and community growth.</p>
                        <p>My aim was to create a mood board and posters that communicate warmth, support, and empowerment while maintaining a calm and welcoming visual tone.</p>
                    </div>
                    <div className='flex flex-col gap-3.5 py-11.75'>
                        <h2 className='font-bold'>Poster Design</h2>
                        <p>The posters were designed to share advice, educational insights, and financial awareness in a clear and engaging way. Clean layouts, calm colors, and friendly typography work together to make the information easy to understand while maintaining a warm, supportive tone that reflects the brand&apos;s focus on guidance and empowerment.</p>
                    </div>
                    <div className='w-full flex flex-col md:flex-row items-center justify-between'>
                        <div className='flex flex-col gap-14'>
                            <Image src={"/awn-project2.avif"} alt='AWN Project2' width={517} height={808} />
                            <Image src={"/awn-project3.avif"} alt='AWN Project3' width={517} height={647} />
                        </div>
                        <div className='flex flex-col gap-14'>
                            <Image src={"/awn-project4.avif"} alt='AWN Project4' width={458} height={580} />
                            <Image src={"/awn-project5.avif"} alt='AWN Project5' width={458} height={572} />
                            <Image src={"/awn-project6.avif"} alt='AWN Project6' width={458} height={249} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AWN