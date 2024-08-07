import { MovingBtn } from '@/components/moving-border'
import Link from 'next/link'
import React from 'react'

function Herosection() {
  return (
    <div className=' min-h-[60vh] flex flex-col-reverse gap-14 lg:flex-row items-center justify-between'>
     <div className='space-y-10 text-center lg:text-left'>
         <h1 className='text-4xl lg:text-7xl font-bold text-white-500'>
            Hello👋,Nice to meet you!
            <br />
            <span className='underline underline-offset-8 decoration-green-500 -rotate-2'>{"I'm Kartik. "}</span>
            </h1>
            <p className='md:w-96 text-lg text-gray-300'>
               {
               " Based in India, I am a Full Stack Developer ,UI/UX Designer passion for creating beautiful and functional websites."
               }
            </p>
            <Link href={" mailto:kartikmehta650@gmail.com"} className='inline-block'>
            <div>
               <h1 className='text-3xl  font-bold hover:text-green-400 transition-all'>
                 Contact me 📬 
                 </h1>
               <div className='w-40 h-2 bg-green-500 rounded-full' ></div>
               <div className='w-40 h-2 bg-indigo-500 rounded-full translate-x-2' ></div>
            </div>
            </Link>
         {/* <h2 className='text-3xl font-bold text-green-500 underline underline-offset-8 decoration-green-500 -rotate-2'>I am a Full Stack Developer</h2> */}
     </div>

     <div className='relative'>
            <div className='w-72 h-72 space-y-3 -rotate-[30deg] relative'>

                <div className='flex gap-3 translate-x-8'>

                    <div className='w-32 h-32 rounded-2xl bg-green-500'></div>

                    <div className='w-32 h-32 rounded-full bg-indigo-500'></div>

                </div>

                <div className='flex gap-3 translate-x-'>
                    
                    <div className='w-32 h-32 rounded-2xl bg-indigo-500'></div>

                    <div className='w-32 h-32 rounded-full bg-green-500'></div>

                </div>
                <div className="glow absolute top-[40%] right-1/2 -z-10"></div>

            </div>
            <div className='absolute bottom-5 sm:bottom-14 left-0 sm:-left-10'>
              <Link target='_blank' href={"https://drive.google.com/drive/folders/1untiORf7J_aWXV_ETxj0-4-l_WTU0MbE"}>
            <MovingBtn borderRadius='0.5rem' className=' font-semibold bg-white-'>
              <p>🚀Available for Work
              </p>
            </MovingBtn>
            </Link>
            </div>
     </div>
    </div>
  )
}

export default Herosection
