"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      company: "University of Central Florida",
      title: "Undergraduate Research Assistant @",
      dates: "Oct 2025 - Feb 2026",
      bullets: [
        "Processed and structured 1,000+ data samples for training and evaluating generative AI models focused on assistive technologies.",
        "Built Python data pipelines to automate preprocessing and feature extraction, reducing manual data handling and iteration time.",
        "Collaborated with lab peers to refine AI training sets, specifically targeting the improvement of real-world accessibility for users with speech impairments.",
      ],
    },
    {
      company: "Synthetic Reality Lab",
      title: "Technical Writer @",
      dates: "Sept 2023 - Nov 2023",
      bullets: [
        "Edited technical manuscripts for grammar, clarity, and adherence to publication standards.",
        "Partnered with authors to refine technical explanations and improve logical flow, enhancing the overall quality of research papers.",
        "Verified citations and formatting to ensure accuracy and consistency across manuscripts, contributing to the lab's successful publication record.",
      ],
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <div id="experience" className=" relative flex md:flex-row gap-[5vw] min-h-screen px-[3vw] justify-center items-center max-w-full bg-[#510400]">

        <div className="md:max-w-4xl">

            <motion.div initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.9, ease: "easeOut"}} viewport={{ once: true }}>
                <p className="text-3xl md:text-4xl text-[#ddc5ad] font-bold">/ experience</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.9, ease: "easeOut"}} viewport={{ once: true }}>
                <p className="mt-4 text-sm md:text-lg text-white font-be-vietnam-pro">
                Some work I've done in the past. Currently looking for summer 2026 internships!
                </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.9, ease: "easeOut"}} viewport={{ once: true }}>
        
                <div className="mt-8 bg-[#eee3c3] rounded-lg p-5 relative">

                    <motion.div initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.9, ease: "easeOut"}} viewport={{ once: true }}>
                        <img
                            src="/images/tape.png"
                            alt="tape"
                            className="absolute -top-11 -translate-x-5/6 w-24 z-10 pointer-events-none"
                        />
                    </motion.div>
                
                    <motion.div initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.9, ease: "easeOut"}} viewport={{ once: true }}>
                        <div className="flex flex-wrap gap-2 border-b border-black/15 pb-3">

                            {experiences.map((exp, i) => (

                            <button
                                key={exp.company}
                                onClick={() => setActive(i)}
                                className={`px-3 py-1.5 text-sm font-semibold transition
                                ${active === i ? "bg-[#A13046] text-[#F5F5F5]" : "bg-white/50 text-[#A13046] hover:bg-white"}
                                `}
                            >
                                <span className="md:hidden">{i}</span>
                                <span className="hidden md:inline">{exp.company}</span>
                            </button>

                            ))}
                        </div>
                    </motion.div>

                
                    <div className="mt-4">

                        <motion.div initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.9, ease: "easeOut"}} viewport={{ once: true }}>
                            <span className="text-lg text-[#A14046] font-extrabold">
                            {experiences[active].title}   <span className="text-lg text-[#A13046]"> {experiences[active].company} </span>
                            </span>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.9, ease: "easeOut"}} viewport={{ once: true }}>
                            <p className="text-sm text-[#A13046] mb-2">{experiences[active].dates}</p>
                        </motion.div>

                        <motion.ul
                        key={active}
                        initial="hidden"
                        animate="show"
                        variants={{
                            hidden: {},
                            show: {
                            transition: { staggerChildren: 0.5 }
                            }
                        }}
                        className="list-image-[url(/images/heart.png)] list-inside"
                        >

                        {experiences[active].bullets.map((b, idx) => (
                            <motion.li
                            key={idx} 
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-sm md:text-md font-be-vietnam-pro"
                            >
                            {b}
                            </motion.li>
                        ))}

                        </motion.ul>

                    </div>

                </div>
            </motion.div>

        </div>

        <div className="hidden max-w-md md:flex-shrink-0 md:flex justify-end">

            <motion.div initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.9, ease: "easeOut", delay: 0.3}} viewport={{ once: true }}>
                <img
                    src="/images/scrappage.png"
                    alt="scrap page"
                    className="w-72 h-52 object-contain -rotate-12"
                />
            </motion.div>

        </div>

    </div>
  );
}