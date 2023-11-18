"use client";
import React from 'react';
import Image from 'next/image';
import image from '../../public/images/circled.png';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="lg:py-16 ">
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div initial={{opacity: 0, scale:0.5}}
             animate={{opacity:1, scale:1}}
              transition={{duration:0.5}}
               className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:leading-normal lg:text-6xl font-extrabold">hello i am
        <br/>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Akram',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Full-stack Web Developer',
        1000,
        'Unity Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
        </h1>
        <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 ">
            asdjasodjo asas djoa sjo asdja oso jw asdjl aosdj asd jqwodjoqwdj   asdjoasdljqw
        </p>
        <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black">Hire Me</button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3 ">Download CV</button>
        </div>
        </motion.div>

        <motion.div initial={{opacity: 0, scale:0.5}}
             animate={{opacity:1, scale:1}}
              transition={{duration:0.5}}
         className="col-span-4 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image src={image}
             alt='portfolio img'
             className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
             width={300}
             height={300}
             />
             </div>
        </motion.div>    
        </div>
    </section>
  )
}

export default Hero