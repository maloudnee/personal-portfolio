"use client";
import Typist from 'react-typist-component';
import { motion } from 'framer-motion';

export default function Home() {
    return(
        <div id="home" className="box-border flex flex-col md:flex-row gap-[5vw] min-h-screen max-w-screen px-[5vw] justify-center items-center w-full bg-[#510400]">
            
            <motion.div initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.9, ease: "easeOut"}} viewport={{ once: true }}>
                <div className="flex justify-center flexshrink-0 ">
                    <img src="/images/moi.jpg" alt="me" className="w-36 h-36 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-[50%] shadow-2xl object-cover shadow-[0_0_50px_10px_rgba(255,255,255,0.35)]"/>
                </div>
            </motion.div>

            <div className="text-white max-w-2xl space-y-7">

                <motion.div initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.9, ease: "easeOut"}} viewport={{ once: true }}>
                        <Typist avgTypingDelay={127} cursor={<span className="font-roboto font-bold animate-pulse [animation-duration:0.9s]">|</span>}>
                            <Typist.Delay ms={100} />
                            < span className="text-4xl font-roboto"> hey, i'm 
                                <span className="text-4xl font-roboto text-[#ddc5ad] font-bold"> MALOUDNEE MARCIER </span>
                                .
                            </span>
                        </Typist>
                </motion.div>
                    
                <motion.div initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.9, ease: "easeOut"}} viewport={{ once: true }}>
                    <p className="text-base font-be-vietnam-pro italic"> / Ma • lood • knee  Mar • si • air / </p>
                </motion.div>
                
                <motion.div initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.9, ease: "easeOut"}} viewport={{ once: true }}>
                    <p className="text-md font-be-vietnam-pro">  
                        & i’m a computer science student with a fascination for tech. I believe technology has the power to change the world 
                        for the better when used ethically, and I want to be a part of that change.
                    </p>
                </motion.div>

            </div>
        </div>
    )
}