"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import  StarIcon from "@/assets/icons/star.svg"
import bookImage from "@/assets/images/book-cover.png"
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSS3Icon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GitIcon from "@/assets/icons/github.svg";
import { Techicon } from "@/components/techicon";
import mapImage from "@/assets/images/map2.png"
import smileImogi from "@/assets/images/memoji-smile.png"
import { Cardheader } from "@/components/Cardheader";
import { Toolboxitems } from "@/components/Toolboxitems";
import {motion} from 'framer-motion'
import { useRef } from "react";



const toolboxItems = [
  {
    title: 'javascript',
    icontype: JavaScriptIcon,
  },
  {
    title: 'HTML5',
    icontype: HTMLIcon
  },
  {
    title: 'CSS3',
    icontype: CSS3Icon
  },
  {
    title: 'React',
    icontype: ReactIcon
  },
  {
    title: 'Chrome',
    icontype: ChromeIcon
  },
  {
    title: 'Git-hub',
    icontype: GitIcon
  },
]
const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
    left:"5%",
    top:"50%"
  },
  {
    title: 'Photography',
    emoji: '📸',
    left:"50%",
    top:"5%"
  },
  {
    title: 'gaming',
    emoji: '🧩',
    left:"61%",
    top:"65%"
  },
  {
    title: 'Fitness',
    emoji: '🏋️‍♀️',
    left:"22%",
    top:"65%"
  },
  {
    title: 'Reading',
    emoji: '📖',
    left:"36%",
    top:"49%"
  },
  {
    title: 'Music',
    emoji: '🎵',
    left:"81%",
    top:"45%"
  }

] 
export const AboutSection = () => {
  const constraintRef = useRef(null);
  return <div className="py-20 lg:py-28 ">
    <div className="container">
    <SectionHeader 
     eyebrow="About Me"
     title="A Glimpse Into My World"
     description="Learn more about who I am, What I do, What inspires me."/>
     <div className="mt-20 flex flex-col gap-8">
     <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
      

      <Card className="h-[320px] md:col-span-2">
        <Cardheader title="My Reads" description="Explore the books shaping my perspective."/>
        <div className="w-40 mt-2 md:mt-0 mx-auto">
        <Image src={bookImage} alt="book cover"/>
        </div>
      </Card>
      <Card className="h-[320px] md:col-span-3">
      <Cardheader title="My Tools-box" description="Explore the Technologies I use to craft exceptional digital 
      experiences." className=""/>
      <Toolboxitems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]"/>
      <Toolboxitems items={toolboxItems} className="mt-6 " 
      itemsWrapperClassName="animate-move-right [animation-duration:15s]"
      />
      </Card>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
      <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2 ">
      <Cardheader title="Beyond the code" description="Explore my interest and hobbies beyond the digital relam." className="px-6 py-6"/>
        <div className="relative flex-1" ref={constraintRef}>
          {hobbies.map(hobby =>(
            <motion.div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-tr from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" style={{left:hobby.left, top:hobby.top}}
            drag
            dragConstraints={constraintRef}
            >
              <span className="font-medium text-gray-950">{hobby.title}</span>
              <span>{hobby.emoji}</span>
            </motion.div>
          )
          )}
        </div>
        
      </Card>
      <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
      <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top"/>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping {][animation-duration:2s]"></div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>

      <Image src={smileImogi} alt="smile" className="h-20"/>
      </div>
      </Card>
      </div>

     </div>
     </div>
  </div>;
  
  
};
