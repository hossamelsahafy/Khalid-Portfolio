"use client";
import { FaPython } from "react-icons/fa";
import { MdDevicesOther } from "react-icons/md";

import { FaMicrochip } from "react-icons/fa";
import { MdMemory } from "react-icons/md";
import { FaEye } from "react-icons/fa";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { SiC } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiCsharp } from "react-icons/si";

const about = {
  title: "About Me",
  description:
    "I am a dedicated Communications and Electronics Engineering graduate from the High Institute for Engineering and Technology in New Damietta. My expertise lies in hardware systems, circuit design, and embedded programming, complemented by a strong foundation in communication technologies and signal processing. I am passionate about leveraging my technical skills to innovate and deliver solutions that bridge the gap between hardware and software. Currently, I am expanding my knowledge in IoT and advanced embedded systems to create scalable, impactful technologies for modern challenges.",
  infos: [
    {
      fieldName: "Name",
      fieldValue: "Khalid Hassan",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+20) 01069957658",
    },
    {
      fieldName: "Experiance",
      fieldValue: "Projects Experience",
    },
    {
      fieldName: "Email",
      fieldValue: "dola.hassan123@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Arabic, English",
    },
  ],
};
// edu
const Education = {
  icon: "/cap.svg",
  title: "Education",
  description:
    "I hold a Bachelor's degree in Communications and Electronics Engineering from the High Institute for Engineering and Technology in New Damietta. My studies equipped me with a strong foundation in electronics, communication systems, and embedded technologies. I am passionate about exploring innovative solutions in signal processing, circuit design, and hardware-software integration, aiming to contribute to cutting-edge advancements in technology.",
  edus: [
    {
      name: "CCNA (200-301)",
      duration: "July, 2024 – Aug, 2024",
      description: "Network Fundamentals",
    },
    {
      name: "MCSA",
      duration: "Aug, 2024 - Sep, 2024",
      description: "System Administration",
    },
    {
      name: "CCTV & IP",
      duration: "Sep, 2024 - Oct, 2024",
      description: "Surveillance Systems",
    },
    {
      name: "Embedded systems",
      duration: "Aug, 2022 – Oct, 2022",
      description: "Integrated Technology",
    },
    {
      name: "Advanced C and Embedded systems",
      duration: "July, 2023- Oct, 2023",
      description: "Interfacing Diploma",
    },
  ],
};
const Training = {
  title: "Training",
  description:
    "Comprehensive hands-on training programs focused on cutting-edge technologies, including communication systems, microcontroller programming, and IoT development.",
  info: [
    {
      name: "Mobile communication",
      duration: "Jan, 2021 – Jan, 2021",
      description: "Integrated Technology",
    },
    {
      name: "AVR",
      duration: "Jul, 2022 – Jul, 2022",
      description: "Crash Course by IMT",
    },
    {
      name: "IOT",
      duration: "Jul, 2023 - Jul, 2023",
      description: "Integrated Technology",
    },
  ],
};

const Skills = {
  title: "My skills",
  description:
    "Proficient in web development technologies including HTML, CSS, JavaScript, React, Next, and more.",
  SkillList: [
    {
      icon: <MdDevicesOther />,
      name: "IOT",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <SiC />,
      name: "C",
    },
    {
      icon: <SiCplusplus />,
      name: "C++",
    },
    {
      icon: <SiCsharp />,
      name: "C#",
    },
    {
      icon: <MdMemory />,
      name: "AVR",
    },
    {
      icon: <FaMicrochip />,
      name: "PIC",
    },
    {
      icon: <FaEye />,
      name: "Computer Vision",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="education"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="training">Training</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="aboutme">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4l font-bold">{Education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {Education.description}
                </p>
                <ScrollArea className="h-[200px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[30px]">
                    {Education.edus.map((edu, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#2323] h-auto py-6 px-10 rounded-xl flex flex-col justify-between gap-4 md:px-6 md:py-5"
                        >
                          {/* Top Section: Duration and Description */}
                          <div className="flex flex-wrap justify-between items-center w-full">
                            <span className="text-sm text-gray-400 whitespace-nowrap md:text-xs">
                              {edu.duration}
                            </span>
                            <h3 className="font-semibold text-lg sm:text-base text-gray-200 md:text-sm">
                              {edu.description}
                            </h3>
                          </div>

                          {/* Bottom Section: Name and Grade */}
                          <div className="mt-3 flex flex-wrap justify-between items-start w-full gap-2">
                            {/* Name with Split on Comma */}
                            <p className="text-sm lg:text-base font-bold text-white/80 md:text-sm">
                              {typeof window !== "undefined" &&
                              window.innerWidth >= 768 &&
                              edu.name.includes(",")
                                ? edu.name.split(",").map((part, i) => (
                                    <span
                                      key={i}
                                      className="block md:inline text-start"
                                    >
                                      {part.trim()}
                                      {i < edu.name.split(",").length - 1 &&
                                        ", "}
                                    </span>
                                  ))
                                : edu.name}
                            </p>

                            {/* Grade */}
                            <div className="text-sm text-gray-400 md:text-xs text-start">
                              {typeof edu.grade === "string"
                                ? edu.grade
                                    .split(",")
                                    .map((line, i) => <p key={i}>{line}</p>)
                                : ""}
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="training" className="w-full h-full">
              <div className="flex flex-col gap-10 p-6  rounded-lg shadow-xl">
                {/* Header Section */}
                <div className="flex flex-col gap-6 text-center xl:text-left">
                  <h3 className="text-4xl font-bold text-white">
                    {Training.title}
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-relaxed">
                    {Training.description}
                  </p>
                </div>

                {/* List Section */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {Training.info.map((oneInfo, index) => (
                    <li
                      key={index}
                      className="bg-[#232323] rounded-lg p-6 shadow-md flex flex-col gap-4 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-center justify-center text-6xl text-white group-hover:text-accent transition-all duration-300">
                        {oneInfo.icon ? (
                          <span className="flex justify-center items-center">
                            {oneInfo.icon}
                          </span>
                        ) : (
                          <span>{oneInfo.name.charAt(0).toUpperCase()}</span>
                        )}
                      </div>
                      <div className="text-white text-center xl:text-left">
                        <h4 className="text-2xl font-semibold capitalize">
                          {oneInfo.name}
                        </h4>
                        <p className="text-white/60 text-sm">
                          {oneInfo.description}
                        </p>
                        {oneInfo.duration && (
                          <p className="text-accent text-sm font-medium mt-2">
                            Duration: {oneInfo.duration}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{Skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {Skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap[30px] gap-4 xl:gap-[30px]">
                  {Skills.SkillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#2323] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300 ">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="aboutme"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.infos.map((info, index) => (
                    <li
                      className="flex items-center justify-center xl:justify-start gap-4"
                      key={index}
                    >
                      <span className="text-white/60">{info.fieldName}</span>
                      <span className="text-sm text-white font-medium whitespace-nowrap overflow-ellipsis overflow-hidden max-w-full">
                        {info.fieldValue}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
