import { MoveRight } from "lucide-react";
import img from "next/image";
import ProjectCard from "../components/project-card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-background">
      <section className="max-w-7xl flex items-center justify-between gap-14 pt-28 pb-17.75 px-5 md:px-16" style={{ backgroundImage: "url('/bg.png')", backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className="flex flex-col gap-16">
          <div className="relative flex flex-col pt-10">
            <img src={"/hi.png"} alt="Hi Text" className="absolute -left-27.5 -top-38 md:w-105.75 md:h-72.25" />
            <p className="text-5xl font-extralight">I&apos;m Oluoma <br /> A <span className="text-primary font-semibold">brand</span> and <span className="text-primary font-semibold">graphic designer</span> <br /> based in Lagos, Nigeria.</p>
          </div>
          <p className="text-5xl font-extralight">I design visuals that <span className="text-primary font-semibold">shape brands</span>, <br /> <span className="text-primary font-semibold">capture attention</span>, and <span className="text-primary font-semibold">communicate clearly</span>, from bold poster designs to complete visual identity systems.</p>
          <Link href={'/book'} className="w-59 rounded-r-4xl bg-[#FE89AA] text-background font-semibold pl-5 pr-7 py-1 flex items-center justify-center gap-5 cursor-pointer transition-all duration-300 hover:gap-6">
            <p className="text-[33px] font-semibold text-nowrap">Let’s talk</p>
            <MoveRight size={32} />
          </Link>
        </div>
        <img src={"/oluoma.avif"} alt="Oluoma" className="md:91.25 md:h-143.75" />
      </section>
      <section className="max-w-7xl flex flex-col gap-15 pt-17.75 pb-30 px-5 md:px-16" style={{ backgroundImage: "url('/project-bg.avif')", backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className="flex flex-col gap-2 text-background">
          <h1 className="text-[58px] font-bold">Recent Projects</h1>
          <p className="text-[40px] font-light">A curated selection of recent design projects</p>
        </div>
        <div className="flex items-center gap-15">
          <ProjectCard title="Happy New Year - MD Food Concepts & Deliveries" image="/project1.avif" link="/projects/md-food-concepts" />
          <ProjectCard title="Brand Identity - Funmi.dsgn" image="/project2.avif" link="/projects/funmi.dsgn" />
          <ProjectCard title="Valentine Sales - Scarves by funmi" image="/project3.avif" link="/projects/scarves-by-funmi" />
        </div>
      </section>
      <section className="max-w-7xl flex flex-col items-center py-6 pb-19 px-5 md:px-16 gap-17.5" style={{ backgroundImage: "url('/bg.png')", backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <img src={"/brand-title.avif"} alt="Brands I've worked with" className="md:w-128.75 md:h-60.5" />
        <div className="max-w-232.5 flex flex-col gap-10">
          <div className="flex items-center justify-between">
            <Image src={"/teri-bakes.png"} alt="Teri Bakes" width={208} height={177} />
            <Image src={"/funmi.dsgn.png"} alt="Funmi Design" width={199} height={161} />
            <Image src={"/sff.png"} alt="High Flyers" width={240} height={170} />
            <Image src={"/scarves-by-funmi.png"} alt="Scarves By Funmi" width={161} height={170} />
          </div>
          <div className="flex items-center justify-between">
            <Image src={"/md-catering.png"} alt="Md Catering" width={315.9} height={128} />
            <Image src={"/awn.png"} alt="AWN" width={194} height={116} />
            <Image src={"/scalen-tech.png"} alt="Scalen Tech" width={304} height={149} />
          </div>
        </div>
      </section>
    </main>
  );
}
