"use client";
import React, {useTransition, useState}from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
const About = () => {
    const [tab, setTab] = useState("skills");
    const [isPending,startTransition] = useTransition();


    const handleTabChange = (id: string) => {
        (startTransition as any)(() =>{
            setTab(id);
        })
    };



 const data = [
    {
        title: "skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>node.js</li>
                <li>express.js</li>
                <li>skills.js</li>
                <li>express.js</li>
                <li>express.js</li>
                <li>express.js</li>
                <li>express.js</li>
            </ul>
        )
    },
    {
        title: "education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>node.js</li>
                <li>express.js</li>
                <li>education.js</li>
                <li>express.js</li>
                <li>express.js</li>
                <li>express.js</li>
                <li>express.js</li>
            </ul>
        )
    },
    {
        title: "certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>node.js</li>
                <li>express.js</li>
                <li>certifications.js</li>
                <li>express.js</li>
                <li>express.js</li>
                <li>express.js</li>
                <li>express.js</li>
            </ul>
        )
    }
 ]   
  return (
    <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
            <div><h1>here you put a nice image</h1></div>
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                   sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
                <div className="flex flex-row  mt-8">
                    <TabButton selectTab={() =>handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                    <TabButton selectTab={() =>handleTabChange("education")} active={tab === "education"}>Education</TabButton>
                    <TabButton selectTab={() =>handleTabChange("certifications")} active={tab === "certifications"}>Certifications</TabButton>
                </div>
                <div className="mt-8 ">
                    {data.find((t)=> t.id === tab)?.content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default About