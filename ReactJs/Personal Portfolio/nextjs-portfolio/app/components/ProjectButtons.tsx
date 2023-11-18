import React from 'react'

const ProjectButtons = ({name, onClick, isSelected} : {name: string, onClick:any, isSelected:boolean}) => {
  const buttonStyle = isSelected ? "text-white border-blue-500" : 
  "text-[#ADB7BE] border-slate-600 hover:border-white"
    return (
    <button className={`rounded-full border-2 
    ${buttonStyle} px-6 py-3 text-xl cursor-pointer`} onClick={() =>onClick(name)}>{name}</button>

  )
}

export default ProjectButtons