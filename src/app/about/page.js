"use client";
import { FaPython, FaJava, FaSwift, FaJs, FaHtml5, FaCss3, FaPhp, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
    return (
       <div id="about" className="box-border flex lg:flex-row lg:gap-[5vw] min-h-screen max-w-full px-[2vw] bg-[#510400] items-center">

            <div className="flex flex-start flex-col space-y-7 text-white max-w-screen"> 
                <motion.div initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.9, ease: "easeOut"}} viewport={{ once: true }}>
                    <p className="font-robto text-3xl md:text-4xl xl:text-6xl text-[#ddc5ad] font-bold">/ about-me</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.9, ease: "easeOut"}} viewport={{ once: true }}>
                    <p className="text-sm md:text-md xl:text-lg font-be-vietnam-pro">
                    I am an undergraduate computer science student at the University of Central Florida focused on  machine learning. 
                    I’m drawn to problems where intelligence and user experience intersect– how machine learning systems directly define how people 
                    interact with software. Through my projects, I explore how to design systems that are technically robust and intuitive for real 
                    users. 
                    </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.9, ease: "easeOut"}} viewport={{ once: true }}>
                    <p className="text-sm md:text-md xl:text-lg font-be-vietnam-pro">
                        What I've been working with recently:
                    </p>
                </motion.div>


                <motion.div initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.9, ease: "easeOut"}} viewport={{ once: true }}>
                    <ul className="grid grid-cols-2 gap-3 list-image-[url('/images/hearts.png')] list-inside">
                        <li className="text-sm md:text-md xl:text-lg font-be-vietnam-pro">
                            LangChain
                        </li>
                        <li className="text-sm md:text-md xl:text-lg font-be-vietnam-pro">
                            PyTorch
                        </li>
                        <li className="text-sm md:text-md xl:text-lg font-be-vietnam-pro">
                            OpenCV
                        </li>
                        <li className="text-sm md:text-md xl:text-lg font-be-vietnam-pro">
                            TensorFlow
                        </li>
                        <li className="text-sm md:text-md xl:text-lg font-be-vietnam-pro">
                            SwiftUI
                        </li>
                        <li className="text-sm md:text-md xl:text-lg font-be-vietnam-pro">
                            FAST API
                        </li>
                    </ul>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.9, ease: "easeOut"}} viewport={{ once: true }}>
                    <p className="text-sm md:text-md xl:text-lg font-be-vietnam-pro">
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