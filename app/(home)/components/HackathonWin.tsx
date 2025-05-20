import React from 'react'
import {  SiGit, SiJavascript,  SiNextdotjs,  SiPolygon,SiTypescript,SiSupabase, SiReact, SiSolidity, SiTailwindcss,} from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/direction-aware-hover'
function HackathonWin() {

    const projects=[
        {
            title: "Supply Chain Management Dapp",
            tech: [SiNextdotjs, SiReact,SiSolidity,SiPolygon, SiJavascript, SiTailwindcss],
            link: "https://github.com/kartikmehta18/SupplyChainManagement",
            
            cover: "https://creatorspace.imgix.net/users/clxfxqpz702rupw01dn33nn6a/sZGlXBt0APcqGOPJ-Hack%2520the%2520league%25203%2520(2).png?w=750&h=750",
            background: "bg-indigo-500",
        },
        {
            title: "ScholarDao",
            tech: [SiNextdotjs, SiReact,SiSolidity,SiTypescript, SiJavascript, SiTailwindcss],
            link: "https://github.com/kartikmehta18/ScholarDao",
            cover: "https://creatorspace.imgix.net/users/clxfxqpz702rupw01dn33nn6a/vuircZqF0SSulkqF-Hack%2520India%25202024%2520(2).png?w=750&h=750",
            background: "bg-green-500",
        },
        {
            title: "ScholarDao",
            tech: [SiNextdotjs, SiReact,SiSolidity,SiTypescript,SiSupabase,SiGit, SiJavascript, SiTailwindcss],
            link: "https://github.com/kartikmehta18/ScholarDao",
            cover: "https://creatorspace.imgix.net/users/clxfxqpz702rupw01dn33nn6a/iA9ydalhdaUODfg8-GFG%2520%2520%2520Google%2520Cloud%2520hackathon.png?w=750&h=750",
            background: "bg-indigo-500",
        },
        {
            title: "Tippy Dapp",
            tech: [SiNextdotjs, SiReact,SiSolidity,, SiJavascript, SiTailwindcss],
            link: "https://github.com/kartikmehta18/SupplyChainManagement",
            cover: "https://creatorspace.imgix.net/users/clxfxqpz702rupw01dn33nn6a/iAippZyHb84xFaai-LNMHACKS%25207.0.png?w=750&h=750",
            background: "bg-green-500",
        },
        {
            title: "PaymanAI-Powered-Contractor",
            tech: [SiNextdotjs, SiReact,SiSolidity,SiSupabase,SiGit, SiJavascript, SiTailwindcss],
            link: "https://github.com/kartikmehta18/PaymanAI-Powered-Contractor",
            cover: "https://creatorspace.imgix.net/users/clxfxqpz702rupw01dn33nn6a/2RLcA5D6VJ4suFRT-LNMHACKS%25207.0%2520(2).png?w=750&h=750",
            background: "bg-indigo-500",
        },
        {
            title: "HackerFinder",
            tech: [SiNextdotjs, SiReact,SiSupabase,SiGit, SiJavascript, SiTailwindcss],
            link: "https://github.com/kartikmehta18/HackerFinder",
            cover: "https://creatorspace.imgix.net/users/clxfxqpz702rupw01dn33nn6a/WyucJlB4rGutQkCR-LNMHACKS%25207.0%2520(3).png?w=750&h=750",
            background: "bg-green-500",
        },
    ]
  return (
<div>
      <Title text='Hackathon Winner 🏆' className='flex flex-col items-center justify-center -rotate-6'/>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5 mb-4'>
            {projects.map((project,index) =>{
                return(
                    <Link href={project.link} key={index} target='_blank'>
                        <div className={cn("p-2 rounded-md", project.background
                            
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

export default HackathonWin
