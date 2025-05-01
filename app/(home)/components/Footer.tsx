// import React from 'react'
// import Navbar from './Navbar'
// import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
// import Link from 'next/link';
// import { Sparkles } from '@/components/sparkles';
// const social =[
//     {
//         link: 'https://www.linkedin.com/in/kartik-mehta-6729b0255/',
//         label: "Linkedin",
//         Icon:SiLinkedin,
//     },
//     {
//         link: 'https://github.com/kartikmehta18',
//         label: "Github",
//         Icon: SiGithub,
//     },
//     {
//         link: 'https://x.com/Kartikmehta_png',
//         label: "x",
//         Icon:SiX,
//     },
// ]
// function Footer() {
//   return (
//     <>
//     <nav className={('py-10 flex justify-between')}>
//         <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>made by❤️kartikmehta18</h1>

//         <div className='flex items-center gap-5'> 
//             {social.map((social,index) =>{
//                 return(
//                 <Link 
//                 href={social.link} 
//                 key={index} 
//                 aria-label={social.label}>
                    
//                     <social.Icon  className='w-5 h-4 hover:scale-125 transition-all'/>
//                 </Link>
//                 );
//             })}
//         </div>


//     </nav>

//     </>
//   )
// }

// export default Footer
import React from 'react'
import Navbar from './Navbar'
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import Link from 'next/link';
import { Sparkles } from '@/components/sparkles';

const social = [
  {
    link: 'https://www.linkedin.com/in/kartik-mehta-6729b0255/',
    label: "Linkedin",
    Icon: SiLinkedin,
  },
  {
    link: 'https://github.com/kartikmehta18',
    label: "Github",
    Icon: SiGithub,
  },
  {
    link: 'https://x.com/Kartikmehta_png',
    label: "x",
    Icon: SiX,
  },
]

function Footer() {
  return (
    <>

      <div className="w-full overflow-hidden -mb-4 ">
        <div className="relative h-80 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#369eff,transparent_90%)] before:opacity-100 after:absolute after:border-2 after:-left-1/2 after:top-1/2 after:aspect-[1/1.8] after:w-[200%] after:rounded-[50%] after:border-b after:border-[#7876c566] after:bg-zinc-900">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px]" />
          <Sparkles
            density={400}
            size={1.4}
            direction="top"
            className="absolute inset-x-0 top-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          />
        </div>
        <div className="mx-auto -mt-52 w-full max-w-2xl relative z-10">
          <div className="bg-white/0 ">
            {/* <div className="w-12 h-12 translate-x-1 translate-y-1 mx-auto bg-black rounded-lg before:absolute relative before:w-full before:h-full before:bg-black/50 before:rounded-lg before:-top-2 before:-left-2" /> */}
          </div>
          
        </div>
        <nav className="py-10 flex justify-between items-center  sm:px-8">
        <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
          made by❤️kartikmehta18
        </h1>

        <div className="flex items-center gap-5">
          {social.map((social, index) => {
            return (
              <Link href={social.link} key={index} aria-label={social.label}>
                <social.Icon className="w-5 h-4 hover:scale-125 transition-all" />
              </Link>
            );
          })}
        </div>
      </nav>
        {/* <article className="text-white pt-2 w-2/3 mx-auto block text-center z-10 relative">
          <h1 className="text-center text-5xl text-white font-medium py-3">
            UI-LAYOUT
          </h1>
          It is a modern and minimalist UI component library designed to
          simplify the process of building responsive and visually appealing web
          interfaces.
        </article> */}
      </div>
     
    </>
  )
}

export default Footer;
