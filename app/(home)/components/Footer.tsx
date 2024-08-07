import React from 'react'
import Navbar from './Navbar'
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import Link from 'next/link';
const social =[
    {
        link: 'https://www.linkedin.com/in/kartik-mehta-6729b0255/',
        label: "Linkedin",
        Icon:SiLinkedin,
    },
    {
        link: 'https://github.com/kartikmehta18',
        label: "Github",
        Icon: SiGithub,
    },
    {
        link: 'https://x.com/Kartikmehta_png',
        label: "x",
        Icon:SiX,
    },
]
function Footer() {
  return (
    <nav className={('py-10 flex justify-between')}>
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>made by❤️kartikmehta18</h1>

        <div className='flex items-center gap-5'> 
            {social.map((social,index) =>{
                return(
                <Link 
                href={social.link} 
                key={index} 
                aria-label={social.label}>
                    
                    <social.Icon  className='w-5 h-4 hover:scale-125 transition-all'/>
                </Link>
                );
            })}
        </div>
    </nav>
  )
}

export default Footer
