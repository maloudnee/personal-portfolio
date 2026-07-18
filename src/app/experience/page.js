"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
        company: "University of Central Florida",
        title: "Researcher",
        dates: "June 2026 - Present",
        bullets: [
            "Collaborating with clinical researchers to perform precise annotations on ultrasound scans, curating 'ground truth' datasets to train computer vision models on pancreatic masses.",
            "Managing dataset onboarding and quality control, ensuring medical image files and clinical data meet structural requirements for machine learning training pipelines.",
            "Preparing for upcoming phases of multi-modal research focused on parsing and aligning clinical text reports alongside corresponding ultrasound imaging datasets."
        ],
    },
    {
      company: "University of Central Florida",
      title: "Undergraduate Research Assistant",
      dates: "Oct 2025 - Feb 2026",
      bullets: [
        "Cleaned and structured 1,000+ data samples of dysarthria speech patterns to train a generative AI model capable of analyzing a user's speech errors and returning personalized pronunciation guidance and exercises.",
        "Built a Python data pipeline using Librosa and Montreal Forced Aligner (MFA) to process TORGO dataset recordings across control and dysarthric speakers, extracting phoneme-level alignments to identify speech errors such as dropped consonants and phonemes.",
        "Collaborated with a peer researcher to cross-validate findings by combining phoneme-level pronunciation analysis with word-level transcription comparison.",
      ],
    },
    {
      company: "Synthetic Reality Lab",
      title: "Technical Writer",
      dates: "Sept 2023 - Nov 2023",
      bullets: [
        "Edited technical manuscripts for grammar, clarity, and adherence to publication standards.",
        "Partnered with authors to refine technical explanations and improve logical flow, enhancing the overall quality of research papers.",
        "Verified citations and formatting to ensure accuracy and consistency across manuscripts, contributing to the lab's successful publication record.",
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
        <section 
            id="experience" 
            className="box-border flex flex-col min-h-screen w-full px-6 md:px-[8vw] bg-[#120F0D] py-24 overflow-hidden justify-center"
        >
            <div className="w-full max-w-4xl"> 

                <motion.div 
                    initial={{ opacity: 0, y: 50}} 
                    whileInView={{ opacity: 1, y: 0}} 
                    transition={{ duration: 0.9, ease: "easeOut"}} 
                    viewport={{ once: true }}
                    className="flex flex-row items-center gap-3"
                >
                    <img src="/images/tickets.png" alt="tickets" className="w-10 h-10 object-contain pointer-events-none"/>
                    <h2 className="font-expanded text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-wider uppercase leading-none">
                        EXPERIENCE
                    </h2>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.9, ease: "easeOut"}} viewport={{ once: true }}>
                    <p className="mt-6 text-sm md:text-base text-white font-be-vietnam-pro">
                        Research I've done.
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mt-12 w-full">
                        
                    <div className="relative flex flex-col border-l border-neutral-800 w-full md:w-48 flex-shrink-0">
                        {experiences.map((job, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={`py-3 px-4 text-left text-xs font-mono tracking-wider transition-all duration-200 block w-full
                                    ${activeTab === idx ? 'text-[#795C34] bg-neutral-900/30 font-bold' : 'text-neutral-500 hover:text-neutral-300 hover:bg-neutral-900/10'}`}
                            >
                                {job.company}
                            </button>
                        ))}

                        <motion.div 
                            className="hidden md:block absolute left-0 w-[2px] h-[44px]"
                            style={{ backgroundColor: '#795C34' }}
                            animate={{ y: activeTab * 44 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    </div>

                    <div className="flex-grow min-h-[320px] w-full">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <h3 className="text-xl md:text-2xl font-bold font-expanded text-white tracking-wide">
                                {experiences[activeTab].title}{" "}
                                <span className="text-[#795C34]">@ {experiences[activeTab].company}</span>
                            </h3>
                            
                            <p className="text-xs font-mono text-neutral-500 mt-2 tracking-widest uppercase">
                                {experiences[activeTab].dates}
                            </p>

                            <ul className="mt-6 space-y-4 max-w-2xl">
                                {experiences[activeTab].bullets.map((bullet, i) => (
                                    <li key={i} className="flex items-start text-sm md:text-base font-be-vietnam-pro text-neutral-300 leading-relaxed gap-3">
                                        <span className="text-[#795C34] font-mono text-xs select-none pt-1">▷</span>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                </div>

            </div>
        </section>
  );
}