"use client";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section 
            id="about" 
            className="box-border flex flex-col lg:flex-row gap-10 lg:gap-[5vw] min-h-screen w-full px-6 md:px-[8vw] bg-[#120F0D] items-center justify-center py-20 overflow-hidden"
        >
            <div className="flex flex-col space-y-6 text-white w-full lg:max-w-[50%]"> 
                
                <motion.div 
                    initial={{ opacity: 0, y: 50}} 
                    whileInView={{ opacity: 1, y: 0}} 
                    transition={{ duration: 0.9, ease: "easeOut"}} 
                    viewport={{ once: true }}
                    className="flex flex-row gap-2"
                >
                    <img src="/images/tickets.png" alt="tickets" className="w-10 h-10 pointer-events-none"/>
                    <h2 className="font-expanded text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-wider uppercase">
                        ABOUT ME
                    </h2>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.9, ease: "easeOut"}} viewport={{ once: true }}>
                    <p className="text-sm md:text-base lg:text-lg font-be-vietnam-pro leading-relaxed text-neutral-200">
                        I am currently an undergraduate student at the University of Central Florida, where I do research. 
                        I help use computer vision to structure and annotate video datasets for medical machine learning models. 
                    </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.9, ease: "easeOut"}} viewport={{ once: true }}>
                    <p className="text-sm md:text-base lg:text-lg font-be-vietnam-pro text-neutral-300">
                        Lately, some tools I've been working with are:
                    </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.9, ease: "easeOut"}} viewport={{ once: true }}>
                    <ul className="grid grid-cols-3 gap-4">
                        {[ "Python", "OpenCV", "React.js" ].map((tool, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-sm md:text-base lg:text-lg font-be-vietnam-pro text-neutral-200">
                                <img src="/images/popcorn.png" alt="popcorn" className="w-5 h-5 object-contain pointer-events-none" />
                                {tool}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.9, ease: "easeOut"}} viewport={{ once: true }}>
                    <p className="text-sm md:text-base lg:text-lg font-be-vietnam-pro leading-relaxed text-neutral-200">
                        Outside of my tech life, I enjoy reading, traveling, and learning new languages. Maintenant, je parle un peu français.
                    </p>
                </motion.div>

            </div>

            <motion.div 
                initial={{ opacity: 0, y: 50}} 
                whileInView={{ opacity: 1, y: 0}} 
                transition={{ duration: 0.9, ease: "easeOut"}} 
                viewport={{ once: true }}
                className="w-full lg:max-w-[40%] flex justify-center items-center"
            >
                <div className="relative max-w-sm md:max-w-md lg:max-w-full">
                    <img 
                        src="/images/about-pic.png" 
                        alt="me" 
                        className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-2xl" 
                    />
                </div>
            </motion.div>

        </section>
    );
}