"use client";
import React ,{useState, useRef} from 'react';
import ProjectsCards from './ProjectsCards';
import ProjectButtons from './ProjectButtons';
import {motion, useInView} from 'framer-motion';
const ProjectsData = [
    {
        id: 1,
        title: "GravaFun",
        desc: "gravafun desc",
        image: "/images/screnshots/ad.png",
        tag: ["All", "Web"],
        gitUrl:'/',
        previewUrl:'/'
},
{
    id: 2,
    title: "GravaFun",
    desc: "gravafun desc",
    image: "/images/screnshots/dasdas.png",
    tag: ["All", "Unity"],
    gitUrl:'/',
    previewUrl:'/'
},
{
    id: 3,
    title: "GravaFun",
    desc: "gravafun desc",
    image: "/images/screnshots/transparentBackground.png",
    tag: ["All", "Web"],
    gitUrl:'/',
    previewUrl:'/'
},
]


const Projects = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});

    const [tag, setTag] = useState("All");

    const handleTag = (newTag:string) =>{
        setTag(newTag);
    };

    const Filter = ProjectsData.filter((project) =>
        project.tag.includes(tag)
    ); 

    const cardVarients = {
        initial: {y: 50, opacity: 0},
        animate: {y: 0, opacity: 1}
    }

  return (
    <section >
        <h2>My Projects</h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
            <ProjectButtons onClick={handleTag} name="All" isSelected={tag === "All"}/>
            <ProjectButtons onClick={handleTag} name="Web" isSelected={tag === "Web"}/>
            <ProjectButtons onClick={handleTag} name="Unity" isSelected={tag === "Unity"}/>
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
            {
                Filter.map((project, index) =>(
                    <motion.li variants={cardVarients} initial="initial" 
                    animate={isInView ? "animate" : "initial"}
                    key={index}
                    transition={{duration:0.5, delay:index * 0.4}}
                    >
                    <ProjectsCards 
                key={project.id}
                title={project.title} 
                imgLink={project.image}
                disc={project.desc}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}/>
                  </motion.li>
                ))
            }
        </ul>
    </section>
  )
}

export default Projects