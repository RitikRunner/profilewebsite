import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from '@/assets/images/grain.jpg'
import StarIcon from '@/assets/icons/star.svg'
import SparkleIcon from '@/assets/icons/sparkle.svg'
import { HeroOrbit } from '@/components/HeroOrbit';

export const HeroSection = () => {
return<div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
  <div className='absolute inset-0' style={{ maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)' }}>
   <div className='absolute inset-0 -z-30 opacity-5 style={{
   backgroundImage: `url(${grainImage.src})`
   }}'></div> 
   <div className='size-[620px] hero-ring'></div>
   <div className='size-[820px] hero-ring'></div>
   <div className='size-[1020px] hero-ring'></div>
   <div className='size-[1220px] hero-ring'></div>
  
  <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" spinDuration="6s">
      <SparkleIcon className="size-8 text-emerald-300/20"/>
      <div className="size-2 rounded-full emerald-300/20"/>
   </HeroOrbit>
   <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="4s">
      <StarIcon className="size-12 text-emerald-300"/>
   </HeroOrbit>
   <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="34s"  shouldSpin spinDuration="8s">
      <StarIcon className="size-8 text-emerald-300"/>
   </HeroOrbit>
   <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="5s">
      <SparkleIcon className="size-14 text-emerald-300/20 "/>
   </HeroOrbit>
   <HeroOrbit size={720} rotation={144} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
   <div className="size-3 rounded-full emerald-300/20 shouldSpin spinDuration='6s'"/>
   </HeroOrbit>
   <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="40s" shouldSpin spinDuration='6s'>
   <StarIcon className='size-28 text-emerald-300'/>
   
   </HeroOrbit>
   
   </div>
      <div className='flex flex-col items-center'>
      <div className='container flex flex-col items-center'>
      <Image src={memojiImage} className='size-[100px]' alt="person peeking from behind laptop" />
      </div>
      <div className='bg-gray-950 border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
        <div className='bg-green-500 size-2.5 rounded-full relative'>
         <div className='bg-green-500 absolute inset-0 animate-ping-large rounded-full'></div>
        </div>
        <div className='text-sm font-medium '>Availble for new project</div>
      </div>
      </div>
      <div className='max-w-lg mx-auto'>
      <h1 className='font-serif md:text-5xl text-3xl text-center mt-8 tracking-wide'>Building Exceptional User Experience</h1>
      <p className='mt-4 text-center text-white/60 md:text-lg'>I'm specialize in transforming designs into functional high performing web applications.
        I focus on writing clean, maintainable code and delivering scalable solutions tailored to your needs.
      </p>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
        <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
          <span className='font-semibold'>Explore my work</span>
          <ArrowDown className="size-4"/>
        </button>
        <button className='inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
          <span>👋</span>
          <span className='font-semibold px-6 cursor-pointer'>
            <a href= "mailto:ritiksharma10508@gmail.com">Let's connect</a>
          </span>
        </button>
      </div>
  </div>;
};
