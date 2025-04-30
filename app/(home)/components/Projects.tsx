import React from 'react'
import {  SiGit, SiJavascript,  SiNextdotjs,  SiPolygon,  SiReact, SiSolidity, SiTailwindcss} from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/direction-aware-hover'
function Projects() {

    const projects=[
        {
            title: "Supply Chain Management Dapp",
            tech: [SiNextdotjs, SiReact,SiSolidity,SiPolygon, SiJavascript, SiTailwindcss],
            link: "https://github.com/kartikmehta18/SupplyChainManagement",
            
            cover: "https://creatorspace.imgix.net/users/clt68ujf801awtk01n5j968zg/TZH1I6wEYrc6x06D-scholar%2520dao%2520bento%2520thumbnail.png?w=750&h=750",
            background: "bg-indigo-500",
        },
        {
            title: "Supply Chain Management Dapp",
            tech: [SiNextdotjs, SiReact,SiSolidity,SiPolygon, SiJavascript, SiTailwindcss],
            link: "https://github.com/kartikmehta18/SupplyChainManagement",
            cover: "https://creatorspace.imgix.net/users/clt68ujf801awtk01n5j968zg/TZH1I6wEYrc6x06D-scholar%2520dao%2520bento%2520thumbnail.png?w=750&h=750",
            background: "bg-green-500",
        },
        {
            title: "Supply Chain Management Dapp",
            tech: [SiNextdotjs, SiReact,SiSolidity,SiPolygon, SiJavascript, SiTailwindcss],
            link: "https://github.com/kartikmehta18/SupplyChainManagement",
            cover: "https://creatorspace.imgix.net/users/clt68ujf801awtk01n5j968zg/TZH1I6wEYrc6x06D-scholar%2520dao%2520bento%2520thumbnail.png?w=750&h=750",
            background: "bg-indigo-500",
        },
        {
            title: "Supply Chain Management Dapp",
            tech: [SiNextdotjs, SiReact,SiSolidity,SiPolygon, SiJavascript, SiTailwindcss],
            link: "https://github.com/kartikmehta18/SupplyChainManagement",
            cover: "https://creatorspace.imgix.net/users/clt68ujf801awtk01n5j968zg/TZH1I6wEYrc6x06D-scholar%2520dao%2520bento%2520thumbnail.png?w=750&h=750",
            background: "bg-green-500",
        },
    ]
  return (
<div>
      <Title text='Projects 🎨' className='flex flex-col items-center justify-center -rotate-6'/>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
            {projects.map((project,index) =>{
                return(
                    <Link href={project.link} key={index} target='_blank'>
                        <div className={cn("p-5 rounded-md", project.background
                            
                        )}>
                                <DirectionAwareHover  imageUrl={project.cover} 
                                className='w-full space-y-5 curser-pointer'>
                                    <div className='text-2x1 fort-bold'>
                                    <h1>{project.title}</h1>
                                    <div className="flex items-center gap-5">
                                        {project.tech.map((Icon, index) => {
                                        return <Icon 
                                        className='w-5 h-5'
                                        key={index} />;
                                        })}
                                    </div>
                                    </div>
                                </DirectionAwareHover>

                        </div>
                            </Link>
                  
                )
            })}

      </div>
    </div>
  )
}

export default Projects
