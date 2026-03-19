import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
    title: string;
    image: string;
    link: string;
}

const ProjectCard = ({ title, image, link }: ProjectCardProps) => {
    return (
        <Link href={link} className='bg-background w-[372px] flex flex-col items-center gap-6 rounded-[20px] pt-7 pb-10 px-5 transition-all duration-300 cursor-pointer hover:scale-105'>
            <Image src={image} alt={title} width={336} height={200} />
            <h2 className='text-secondary text-4xl h-30 text-wrap'>{title}</h2>
            <div className='w-full flex justify-end'>
                <button className='bg-[#EE51B4] rounded-full flex items-center justify-center text-background gap-1.5'>
                    <ArrowRight size={32} />
                </button>
            </div>
        </Link>
    )
}

export default ProjectCard