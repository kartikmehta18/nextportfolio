"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import Title from "./Title";
import { HoverEffect } from "@/components/card-hover-effect";
import {
  SiAdobepremierepro,
  SiAdobexd,
  SiDocker,
  SiFigma,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
function Internships() {
  const internships = [
    {
      text: "XD",
      icon: SiAdobexd,
    },
    {
      text: "Git",
      icon: SiGit,
    },
  ];
  return (
    <>
      <div>
        <Title
          text="Internships🔪"
          className="flex flex-col items-center justify-center -rotate-6"
        />
      </div>

      <div className=" xl:flex">
        {/* <div className="h-[40rem] w-full flex items-center justify-center -mt-12 ">
          <PinContainer
            title="Reliance JIO Platform Ltd "
            href="https://www.linkedin.com/feed/update/urn:li:activity:7217371149502988290/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Internship at JIO
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  Full Stack Development. I contributed to the development of a
                  Dock Appointment System
                </span>
              </div>

              <div className=" h-full w-fullflex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                <img
                  className=" h-full w-full "
                  alt="hi"
                  src="kartikimgintern.png"
                />
              </div>
            </div>
          </PinContainer>
        </div> */}  
  <div className="h-[40rem] w-full flex items-center justify-center -mt-12">
    <PinContainer
      title="Reliance JIO Platform Ltd "
      href="https://www.linkedin.com/feed/update/urn:li:activity:7217371149502988290/"
    >
      <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
        <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
          Internship at JIO
        </h3>
        <div className="text-base !m-0 !p-0 font-normal">
          <span className="text-slate-500">
            Full Stack Development. I contributed to the development of a Dock Appointment System
          </span>
        </div>

        <div className="flex flex-1 w-full h-full rounded-lg mt-4 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            alt="hi"
            src="kartikimgintern.png"
          />
        </div>
      </div>
    </PinContainer>
  </div>


        

        <div className="h-[40rem] w-full flex items-center justify-center xl:-mt-12 -mt-40">
          <PinContainer
            title="AICE Idea Lab"
            href="https://twitter.com/kartikmehta_png"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Internship AICE Idea Lab
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  Gained hands-on experience in Internet of Things (IoT)
                  development and hardware integration
                </span>
              </div>
            
               <div className="flex flex-1 w-full h-full rounded-lg mt-4 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            alt="hi"
            src="https://creatorspace.imgix.net/users/clxfxqpz702rupw01dn33nn6a/9nS1GnpPB6OiyVOk-WhatsApp%2520Image%25202023-08-23%2520at%25209.56.21%2520AM.jpeg"
          />
        </div>
            </div>
          </PinContainer>
        </div>
      </div>
    </>
  );
}

export default Internships;
