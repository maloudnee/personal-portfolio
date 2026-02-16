"use client";
import { FaPython, FaJava, FaSwift, FaJs, FaHtml5, FaCss3, FaPhp, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
    return (
       <div id="about" className="box-border flex lg:flex-row lg:gap-[5vw] min-h-screen max-w-full px-[2vw] bg-[#510400] items-center">

            <div className="flex flex-start flex-col space-y-7 text-white max-w-screen"> 
                <motion.div initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.9, ease: "easeOut"}} viewport={{ once: true }}>
                    <p className="font-robto text-3xl md:text-4xl text-[#ddc5ad] font-bold">/ about-me</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.9, ease: "easeOut"}} viewport={{ once: true }}>
                    <p className="text-sm md:text-md font-be-vietnam-pro">
                        I am an undergraduate computer science student at the University of Central Florida who loves building.
                        I aim to build software that can make a positive impact on people's lives. I'm 
                        especially interested in computer vision and machine learning. What excites me the most about the 
                        field of computer science is the constant opportunity to learn and grow, as well as the ability to create 
                        innovative solutions to complex problems. 
                    </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.9, ease: "easeOut"}} viewport={{ once: true }}>
                    <p className="text-sm md:text-md font-be-vietnam-pro">
                        Some tech skills I've picked up along the way: 
                    </p>
                </motion.div>


                <motion.div initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.9, ease: "easeOut"}} viewport={{ once: true }}>
                    <div className="flex flex-row gap-7 text-xl md:text-3xl">
                        <FaPython title="Python" className="text-[#DDC4AD] hover:"/>
                        <FaJava title="Java" className="text-[#DDC4AD]"/>
                        <FaSwift title="Swift" className="text-[#DDC4AD]"/>
                        <FaJs title="JavaScript" className="text-[#DDC4AD]"/>
                        <FaHtml5 title="HTML" className="text-[#DDC4AD]"/>
                        <FaCss3 title="CSS" className="text-[#DDC4AD]"/>
                        <FaPhp title="PHP" className="text-[#DDC4AD]"/>
                        <FaDatabase title="MySQL" className="text-[#DDC4AD]"/>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.9, ease: "easeOut"}} viewport={{ once: true }}>
                    <p className="text-sm md:text-md font-be-vietnam-pro">
                        Outside of tech, I enjoy reading, traveling, and learning new languages. Maintenat, je parle un peu français. 日本語次!
                    </p>
                </motion.div>

            </div>

            <motion.div initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.9, ease: "easeOut"}} viewport={{ once: true }}>
                <div className="hidden md:flex md:flex-shrink-0">
                    <img src="/images/about-pic.png" alt="me" className="w-6xl object-contain" />
                </div>
            </motion.div>

        </div>
    );
    
}