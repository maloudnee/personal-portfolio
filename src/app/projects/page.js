"use client";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaProjectDiagram } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import { motion } from "framer-motion";

export default function Projects() {
   
    const my_projects = [
        {
            title: "Cybersecurity Tools That Cry Wolf",
            subtitle: "Feb 2026 -- Present",
            shortDesc: "Security analysis app using a Naive Bayes classifier to automatically categorize CVE entries into system layers using NLP.",
            longerDesc: `
            I am leading AI/ML development for a 5-person team building a security analysis application that automatically categorizes CVE entries from the National Vulnerability Database.
            For this approach, I implemented a Naive Bayes classifier to categorize 10,000+ CVE entries into 5 system layers (OS, Firmware, Hardware, Applications, Library) based on vulnerability description text.
            I am also designing an NLP preprocessing pipeline with tokenization, stop-word removal, and TF-IDF vectorization to extract features from high-dimensional text data for classification.
            The backend layer integrates ML classification results with vulnerability scanning and remediation workflows for automated threat assessment.
            We're also building a cross-platform application inventory system gathering software version information from Linux package managers, macOS applications folder, and Windows registry to enable automated vulnerability detection.`,
            highlights: [
                "Naive Bayes classifier categorizing CVEs into 5 system layers.",
                "NLP pipeline with TF-IDF vectorization on 10,000+ CVE entries.",
                "Cross-platform inventory system across Linux, macOS, and Windows.",
                "Lead ML developer on a 5-person team."
            ],
            tech: ["Java", "Python", "Scikit-learn", "React", "Git"],
            links: {
                github: "https://github.com/GageYacano/SecurityToolsThatCriedWolf"
            },
            image: "/images/wolf.png"
        },
        {
            title: "KnightDate",
            subtitle: "March 2026 - April 2026",
            shortDesc: "A full-stack social discovery and real-time messaging platform designed specifically for the University of Central Florida community.",
            longerDesc: `Collaborated within a 5-person agile engineering team to design, build, and deploy KnightDate, a full-stack cross-platform social discovery application tailored for university student networking. In this role, I architected scalable backend REST APIs using Node.js and Express to manage high-throughput discovery feeds, user matchmaking endpoints, and complex array matrices for handling liked, disliked, and matched user queries. Additionally, I designed a non-relational document schema via MongoDB Atlas to securely manage student profiles, real-time message payloads, and secure hashed authentication tokens, while engineering a cross-platform client experience using Flutter that integrated native device image galleries for profile customization and rendered a dynamic discovery card deck engine.`,
            highlights: [
                "Co-developed a full-stack dating/social app scaled for cross-platform devices.",
                "Built Node.js/Express REST API endpoints routing matching and discovery calculations.",
                "Architected non-relational data schemas in MongoDB Atlas tracking real-time user metrics.",
                "Deployed and hosted live application workflows remotely via DigitalOcean cloud servers."
            ],
            tech: ["Flutter", "MongoDB", "Express.js", "Node.js", "JavaScript", "DigitalOcean"],
            links: {
                github: "https://github.com/maloudnee/knightdate"
            },
            image: "/images/knight.png",
            video: "/videos/poos-presentation.mov"
        },
        {
            title: "Como Se Dice",
            subtitle: "Swift Student Challenge 2026",
            shortDesc: "An iOS app that assists users in learning new languages through customized flashcards, native pronunciations, and heritage cultural context.",
            longerDesc: `
            My aim was to create an educational application that focuses on heritage language acquisition within multi-generational, bilingual homes. 

            The app scaffolds an intuitive mobile user interface using SwiftUI that delivers curated flashcard modules complete with native pronunciation guidelines and rich cultural context notes.
            I engineered dynamic local data architectures allowing users to create, store, and build personalized vocabulary matrices tailored directly to their family’s specific regional dialects.
            `,
            highlights: [
                "Curated flashcard modules with native pronunciation and cultural context.",
                "Dynamic local data architectures for personalized vocabulary matrices.",
                "Scaffolded intuitive mobile UI using SwiftUI."
            ],
            tech: ["Swift", "SwiftUI", "Xcode", "Core Data"],
            links: {
                github: "https://github.com/maloudnee/como-se-dice"
            },
            image: "/images/como.png",
            video: "/videos/dice-presentation.mov"
        },
        {
            title: "Tear of Fate",
            subtitle: "KnightHacks 2025",
            shortDesc: "Browser-based 2D game with real-time emotion detection that adapts gameplay based on the player's facial expressions.",
            longerDesc: `
            I led a 4-person hackathon team developing a browser-based game with real-time emotion detection using Face-API.js, adapting gameplay based on player facial expressions.
            Google Agent Development Kit was integrated, creating 3 autonomous AI agents with unique decision-making logic for intelligent enemy behavior and dynamic difficulty scaling.
            I managed project scope delivering a working emotion detection prototype in 36 hours, demonstrating adaptability by pivoting from an ambitious multi-agent system to MVP under time constraints.
            In the end, we developed an emotion-to-gameplay mapping system translating facial expression confidence scores into game mechanics, pioneering an affective computing approach to player experience.`,
            highlights: [
                "Real-time emotion detection with Face-API.js driving gameplay mechanics.",
                "3 autonomous AI agents via Google ADK for dynamic enemy behavior.",
                "Delivered working prototype in 36 hours as team lead."
            ],
            tech: ["JavaScript", "TensorFlow.js", "Phaser.js", "WebSockets", "Python", "Google ADK"],
            links: {
                github: "https://github.com/maloudnee/kh-hackathon",
                devpost: "https://devpost.com/software/tear-of-fate"
            },
            image: "/images/tear.png"
        },
        {
            title: "Yappin Entertainment",
            subtitle: "ShellHacks 2025",
            shortDesc: "A chrome extension that allows Netflix family members to communicate their thoughts on shows/movies via Netflix.",
            longerDesc: `
            A chrome extension allowing communication between Netflix family members. 

            Users share their opinions on a show or movie and their family members will be able to view them on their respective profiles.
            The idea is to create a seamless way for family and friends to share their comments in real-time, enhancing our viewing experience.

            Ideally, I envisioned being able to see family members' comments pop up directly over the show or movie we were watching. 
            It would create a more vibrant and interactive atmosphere, as we could react to funny moments, share insights, or even express our confusion about plot twists right there in the moment. 
            However, I faced complications when trying to figure out the technical details of overlaying comments onto videos.
            Although I wasn't able to implement everything I wanted to, I was able to expand my knowledge on Javascript.`,
            highlights: [
                "Created a custom chrome extension.",
                "Implemented real-time ratings and thoughts.",
                "Simulated an interactive viewing experience."
            ],
            tech: ["Javascript"],
            links: {
                github: "https://github.com/maloudnee/yappin-entertainment",
                devpost: "https://devpost.com/software/yappin-entertainment"
            },
            image: "/images/yappin.png"
        },
        {
            title: "Physics Explained",
            subtitle: "July 2025",
            shortDesc: "A web app utilizing Google Gemini API to break down physic topics to users.",
            longerDesc: `
            At the time I was enrolled in Physics 2 and I was struggling to understand the topics. 
            I recently used Google Gemini API for a hackathon, so I decided to use what I learned to help me understand those topics I was struggling with.

            I aimed to create a web app that breaks down the topics in a straight-forward manner since that is how I learn the best. 

            The approach allowed me to learn more about Google Gemini API, Flask, and Physics. 
            I ended up passing the course with a B. `,
            highlights : [
                "Integrated Google Gemini API to generate clear explanations of physics topics using prompt-engineered queries.",
                "Developed a responsive web interface allowing users to learn concepts clearly.",
                "Focused on simplifying physic topics to improve understanding, so users can learn more effectively."
            ],
            tech: ["Python", "Flask", "Javascript", "HTML", "CSS", "Google Gemini API"],
            links: {
                github: "https://github.com/maloudnee/physics-explained"
            },
            image: "/images/physics.png"
        },
        {
            title: "Gemini Playlist Generator",
            subtitle: "GemiKnights 2025",
            shortDesc: "A web app that takes in user input then produces a playlist of 17 songs based off of their input.",
            longerDesc: `
            A dynamic web application designed to provide users who are indescisive a playlist of songs they can listen to for the next hour or so.
        
            The app analyzes the user's taste based on what they've included in the text prompt.
            The application utilizies Google Gemini API to generate the playlist. 

            I built the application during a 12 hour hackathon and was able to deepen my understanding of prompt engineering as well as APIs in general.`,
            highlights: [
                "Built secure Express.js backend for Gemini integration.",
                "Implemented clean, dynamic UI for interactive user prompts.",
                "Utilized Gemini API for text-based music curation."
            ],
            tech: ["Express.js", "Javascript", "HTML", "CSS", "Google Gemini API"],
            links: {
                github: "https://github.com/maloudnee/playlist-generator",
                devpost: "https://devpost.com/software/gemini-playlist-generator"
            },
            image: "/images/gemini.png"
        }, 
        {
            title: "Pokéflex",
            subtitle: "KnightHacks 2024",
            shortDesc: "Lightweight informational Android app built with Kotlin and Jetpack Compose that functions as a Pokédex.",
            longerDesc: `
            Pokéflex is a lightweight informational Android app built with Kotlin and Jetpack Compose that functions as a Pokédex, allowing users to browse Pokémon names, types, and images through a clean, responsive interface.

            Pokéflex is essentially a comprehensive Pokédex, allowing users to sift through the vast array of Pokémon.
            The app features a clean and responsive interface, ensuring a smooth user experience as individuals explore the world of Pokémon.

            Whether you're a seasoned trainer or a newcomer to the Pokémon universe, Pokéflex is an essential tool for anyone looking to enhance their knowledge and appreciation of their favorite Pokémon.`,
            highlights: [
                "My first hackathon!",
                "Implemented JSON serialization and data binding to dynamically display Pokémon details from the PokéAPI",
                "Scaffolded the home scree UI and managed data flow between components for smooth navigation."
            ],
            tech: ["Kotlin", "Jetpack Compose", "Android Studio", "JSON", "PokéAPI"],
            links: {
                github: "https://github.com/sh0inx/Pokeflex",
                devpost: "https://devpost.com/software/pokeflex"
            },
            image: "/images/poke.png"
        }
    ];

    const [ active, setActive ] = useState(null);

    return (
       <>
        <section 
            id="projects" 
            className="box-border flex flex-col min-h-screen w-full px-6 md:px-[8vw] bg-[#120F0D] py-24 overflow-hidden justify-center"
        >

            <div className="max-w-4xl">
                <motion.div 
                    initial={{ opacity: 0, y: 50}} 
                    whileInView={{ opacity: 1, y: 0}} 
                    transition={{ duration: 0.9, ease: "easeOut"}} 
                    viewport={{ once: true }}
                    className="flex flex-row items-center gap-3"
                >
                    <img src="/images/tickets.png" alt="tickets" className="w-10 h-10 object-contain pointer-events-none"/>
                    <h2 className="font-expanded text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-wider uppercase leading-none">
                        PROJECTS
                    </h2>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.9, ease: "easeOut"}} viewport={{ once: true }}>
                    <p className="mt-6 text-sm md:text-base text-white font-be-vietnam-pro">
                        Projects from hackathons, schools, my free time, whatever.
                    </p>
                </motion.div>
            </div>

            <motion.ul className="grid grid-cols-1 gap-3 px-2 md:grid-cols-3 md:gap-5" 
                        initial="hidden" 
                        animate="show" 
                        variants={{ 
                            hidden: {},
                            show: { transition: { staggerChildren: 0.2 } }
                        }}>
                {Object.keys(my_projects).map((key, i) => {
                    const project = my_projects[key];
                    const hasVisualBg = !!project.image;

                    return (
                        <motion.li 
                        key={key} 
                        className={`rounded-xl p-5 relative cursor-pointer shadow-2xl transition-all duration-300 min-h-[300px] flex flex-col justify-between group overflow-hidden ${
                            hasVisualBg ? "bg-black" : "bg-[#120F0D]/80 hover:bg-white"
                        }`}
                        onClick={() => setActive(project)}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            show: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        >
                            {project.image && (
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 scale-100 group-hover:scale-105 transition-all duration-700 pointer-events-none z-0"
                                />
                            )}

                            {hasVisualBg && (
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 group-hover:from-black/80 transition-colors duration-500 z-10 pointer-events-none" />
                            )}

                            <div className="relative z-20 flex flex-col justify-between h-full w-full">
                                <div>
                                    <div className="flex items-center justify-between">
                                        <FaProjectDiagram className={hasVisualBg ? "text-[#ddc5ad]" : "text-[#570A0F]"} />
                                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded uppercase tracking-wider font-bold ${
                                            hasVisualBg ? "bg-white/10 text-white" : "bg-[#570A0F]/10 text-[#570A0F]"
                                        }`}>
                                            View Details
                                        </span>
                                    </div>
                                    
                                    <p className={`font-expanded text-2xl font-black mt-3 tracking-wide uppercase leading-tight ${
                                        hasVisualBg ? "text-white text-shadow-md" : "text-[#A13046]"
                                    }`}>
                                        {project.title}
                                    </p>
                                    
                                    {!hasVisualBg && (
                                        <p className="text-sm italic text-[#A13046]">{project.subtitle}</p>
                                    )}

                                    <p className={`mt-3 text-sm leading-relaxed font-be-vietnam-pro font-medium ${
                                        hasVisualBg ? "text-neutral-200 text-shadow-sm line-clamp-3" : "text-black"
                                    }`}>
                                        {project.shortDesc}
                                    </p>
                                </div>

                                <div className={`mt-4 pt-3 border-t ${
                                    hasVisualBg ? "border-white/10 text-neutral-300" : "border-black/10 text-black/68"
                                } text-xs font-mono font-bold tracking-wide`}>
                                    {project.tech.map((tool, idx) => (
                                        <span key={idx}>
                                            {tool}
                                            {idx !== project.tech.length - 1 && " • "}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <span className="absolute bottom-3 right-3 flex gap-3 z-30" onClick={(e) => e.stopPropagation()}>
                                {project.links.github && (
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                        <FaGithub className={`w-5 h-5 hover:scale-125 transition-transform ${hasVisualBg ? "text-white" : "text-[#570A0F]"}`}/>
                                    </a>
                                )}
                                {project.links.devpost && (
                                    <a href={project.links.devpost} target="_blank" rel="noopener noreferrer">
                                        <FaExternalLinkAlt className={`w-5 h-5 hover:scale-125 transition-transform ${hasVisualBg ? "text-white" : "text-[#570A0F]"}`}/>
                                    </a>
                                )}
                            </span>
                        </motion.li>
                    );
                })}
            </motion.ul>

            <div className="d-block">
                <Modal 
                    show={active !== null} 
                    onHide={() => setActive(null)} 
                    centered 
                    size="lg" 
                    contentClassName="border-0 rounded-2xl overflow-hidden shadow-2xl"
                >
                    <Modal.Header closeButton closeVariant="white"className="bg-[#120F0D] border-b border-white/5 text-white">
                        <Modal.Title>
                            <p className="font-expanded text-2xl font-bold tracking-wide uppercase text-[#ddc5ad] m-0">
                                {active?.title}
                            </p>
                        </Modal.Title>
                    </Modal.Header>
                    
                    <Modal.Body className="bg-[#120F0D]/80 text-neutral-100 p-6 backdrop-blur-md">
                        
                        {active?.video && (
                            <div className="w-full aspect-video rounded-xl overflow-hidden bg-black mb-5 border border-white/5 shadow-inner">
                                <video 
                                    src={active.video} 
                                    autoPlay 
                                    controls 
                                    loop 
                                    muted={true}
                                    playsInline 
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        )}

                        <p className="text-xs font-mono italic text-neutral-400 uppercase tracking-widest">{active?.subtitle}</p>
                        <p className="mt-4 text-sm font-be-vietnam-pro leading-relaxed text-neutral-300 whitespace-pre-line font-normal">
                            {active?.longerDesc}
                        </p>
                        
                        <div className="mt-6 flex items-center"> 
                            <span className="text-white font-be-vietnam-pro font-bold tracking-wide text-base border-b border-white/10 pb-1 w-full"> 
                                Highlights 
                            </span> 
                        </div>
                        
                        <ul className="text-neutral-300 mt-4 space-y-3 pl-1 list-none">
                            {active?.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-start gap-3 font-be-vietnam-pro text-sm leading-relaxed">
                                    <img 
                                        src="/images/popcorn.png" 
                                        alt="bullet" 
                                        className="w-4 h-4 object-contain shrink-0 mt-0.5" 
                                    />
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="mt-6 text-xs text-neutral-400 pt-4 border-t border-white/5 font-mono">
                            <span className="font-bold uppercase tracking-wider text-neutral-200">Tech Stack: </span>
                            {active?.tech.map((tool, idx) => (
                                <span key={idx}>
                                    {tool}
                                    {idx !== active.tech.length - 1 && " • "}
                                </span>
                            ))}
                        </p>
                    </Modal.Body>
                </Modal>
            </div>

            <div className="flex flex-col items-center gap-1 mt-10 mb-5">
                <p className="text-sm text-white font-be-vietnam-pro"> Built with care by Maloudnee Marcier. </p>
                <p className="text-sm text-white font-be-vietnam-pro"> All rights reserved. © </p>
            </div>
        </section>
       </>
    );
}