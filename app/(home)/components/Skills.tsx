"use client";
import React from 'react'

import Title from './Title'
import { HoverEffect}  from '@/components/card-hover-effect'
import { SiAdobepremierepro, SiAdobexd, SiDocker, SiFigma, SiGit, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiPostman, SiReact, SiTailwindcss, SiTypescript, SiVite } from 'react-icons/si'
import { FaJava } from "react-icons/fa6";
function Skills() {

const skills=[
    {
        text: "React",
        icon: SiReact,
    },
    {
        text: "Next.js",
        icon: SiNextdotjs,
    },
    {
        text: "Talwind",
        icon: SiTailwindcss,
    },
    {
        text: "Typescript",
        icon: SiTypescript,
    },
    {
        text: "Vite",
        icon: SiVite,
    },
    {
        text: "Javascript",
        icon: SiJavascript,
    },
    {
        text: "Java",
        icon: FaJava,
    },
    {
        text: "MySql",
        icon: SiMysql,
    },
    {
        text: "Mongodb",
        icon: SiMongodb,
    },
    {
        text: "Figma",
        icon: SiFigma,
    },
    {
        text: "Postman",
        icon: SiPostman,
    },
    {
        text: "Doker",
        icon: SiDocker,
    },
    {
        text: "Premiere Pro",
        icon: SiAdobepremierepro,
    },
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
      <Title text='Skills 🔪' className='flex flex-col items-center justify-center -rotate-6'/>
      <HoverEffect items={skills}/>
    </div>
  )
}

export default Skills
