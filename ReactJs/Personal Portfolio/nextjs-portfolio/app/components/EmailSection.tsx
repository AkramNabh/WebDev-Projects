"use client";
import React, {useRef} from 'react'
import githubIcon from "../../public/images/github-icon.svg";
import linkedinIcon from "../../public/images/linkedin-icon.svg";
import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { sendEmail } from '../Utils/send-email';


export type FormData = {
    name: string;
    email: string;
    message: string;
  };


const EmailSection = () => {
    const { register, handleSubmit } = useForm<FormData>();

    function onSubmit(data: FormData) {
      sendEmail(data);
    }

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2">
        </div>
        <div className="z-10">
            <h5 className="text-xl font-bold text-white my-2">Let`s Connect</h5>
            <p className="text-[#0d0d0e] mb-4 max-w-md">
                this section is to say that i am looking for an opportunity and you can reach me out through this form :D
            </p>

            <div className="socials flex flex-row gap-2">
                <Link href="/">
                    <Image src={githubIcon} alt='github icon'/>
                </Link>
                <Link href="/">
                    <Image src={linkedinIcon} alt='linkedin icon'/>
                </Link>
            </div>
        </div>
        <div>
        <form name="MyForm" className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your Email</label>
                <input type="email"
                 id="email"
                 {...register('email', { required: true })}
                  required placeholder="first@second.third"
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  />
                  </div>
                  <div className="mb-6">
                <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">Your Name</label>
                <input type="text"
                {...register('name', { required: true })}
                 id="subject"
                  required placeholder="vibe check !"
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  />
                  </div>
                  <div className="mb-6">
                  <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">Message</label>
                  <textarea {...register('message', { required: true })} id="message" 
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Hey Akram, lets talk about.."
                  />
                  </div>
                  <div className="mb-6">
                  <button type="submit"
                  value="send"
                  className="bg-blue-500 hover:pg-blue-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                  >Send Message</button>
                  </div>
            </form>
        </div>
        </section>
  )
}

export default EmailSection