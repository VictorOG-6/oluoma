import Image from 'next/image'

const Contact = () => {
    return (
        <main className='relative'>
            <section className='max-w-7xl flex justify-center items-center pt-38.5 pb-20 px-5 md:px-16'>
                <div className='flex flex-col items-center gap-19.5'>
                    <div className='max-w-213.75 flex flex-col gap-5 text-center text-secondary'>
                        <h1 className='font-semibold text-8xl'>Let’s work together!</h1>
                        <p className='text-[32px] font-light italic'>I deliver creativity, focus and dedication to every project,turning ideas into practical solutions that add real value to your brand and drive results.</p>
                    </div>
                    <Image src={"/phone.avif"} alt='Phone' width={399} height={735} />
                </div>
            </section>
            <img src="/contact-bg.avif" alt="Contact Content" className='w-full absolute bottom-0 left-0 -z-10' />
        </main>
    )
}

export default Contact