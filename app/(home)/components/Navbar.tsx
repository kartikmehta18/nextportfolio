import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
function Navbar( ) {

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
  return (

    <nav className={cn('py-10 flex justify-between')}>
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Kartikmehta 👨🏻‍💻</h1>

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

export default Navbar
