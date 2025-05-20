"use client";
import React from 'react'

import Title from './Title'
import { HoverEffect}  from '@/components/card-hover-effect'
import { SiAdobepremierepro, SiAdobexd, SiDocker, SiFigma, SiGit, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiPostman, SiReact, SiTailwindcss, SiTypescript, SiVite } from 'react-icons/si'
import { FaJava } from "react-icons/fa6";
function Internships() {

const internships=[

    {
        text: "XD",
        icon: SiAdobexd,
    },
    {
        text: "Git",
        icon: SiGit,
    },

]
  return (
    <div>
      <Title text='Internships 🔪' className='flex flex-col items-center justify-center -rotate-6'/>
      <HoverEffect items={internships}/>
    </div>
  )
}

export default Internships
