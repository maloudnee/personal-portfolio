"use client";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaProjectDiagram } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import { motion } from "framer-motion";

export default function Projects() {
   
    const my_projects = [

        {
            title: "Look Journal",
            subtitle: "Jan 2026 -- Present ",
            shortDesc: "End-to-end machine learning system for personalized makeup and skincare recommendations using computer vision and RAG.",
            longerDesc: `
            An ongoing project where I am building a full machine learning pipeline that combines computer vision, recommender systems, and retrieval
            augmented generation (RAG) to provide personalized makeup and skincare recommendations.
            
            I am designing and implementing a content-based filtering engine using product embeddings and cosine similarity across 8,000+ products
            to generate tailored recommendations based on real users reviews. To personalize recommendations further, I am developing a skin tone
            detection model using computer vision techniques, allowing the system to suggest products that complement the user's complexion.
            
            Through this project I am gaining hands-on experience in building end-to-end machine learning systems, from data preprocessing and 
            model development to deployment and user interaction. I get to apply and deepen my understanding of machine learning concepts, as well as makeup.`,
            highlights: [
                "Content-based filtering with embeddings and cosine similarity.",
                "Skin tone detection (going in the direction of using MTCNN and Lab Color Analysis).",
                "Integrated CV & recommendation system & RAG architecture"
            ],
            tech: ["Python", "PyTorch", "LangChain", "Scikit-learn", "NumPy"],
            links: {
            }        
        },

        {
            title: "Tear of Fate",
            subtitle: "KnighHacks 2025",
            shortDesc: "Emotion-driven 2D game where users attack moves are based on the facial expressions they display.",
            longerDesc: `
            Tear of Fate is a 2D game that transforms users expressions into gameplay built in 36 hours at a hackathon. 
            We utilized Face API to read user's expressions, then translated those expressions to gameplay actions, such as triggering attacks.
            We also integrated Google ADK, taking an agent to agent approach, using AI as the enemy characters. This was done to make the enemies attack smarter.
            I implemented Google ADK and WebSocket systems, allowing them to learn and coordinate across levels.
            Although time constraints prevented full integration, this project deepened my understanding of real-time communication and AI agent design`,
            highlights: [
                "Emotion Detection with Face API (Tensorflow.js)",
                "Phaser.js for combat, animation, and state transitions.",
                "Team of 4 focused on emotional AI and design."
            ],
            tech: ["Python", "Phaser.js", "Face API", "Tensorflow.js", "Javascript", "HTML", "CSS", "Google ADK", "Websockets"],
            links: {
                github: "https://github.com/maloudnee/kh-hackathon",
                devpost: "https://devpost.com/software/tear-of-fate"
            }
        },

        {
            title: "Bon Voyage",
            subtitle: "Sept 2025 -- Oct 2025",
            shortDesc: "Travel budgeting and planning app that was built using SwiftUI allowing users to manage their trips both past and upcoming.",
            longerDesc: `
            An iOS trip planning app designed to empower travelers by providing an intuitive platform for managing expenses and tracking trip logistics in real time.

            This app enables users to seamlessly organize their travel itineraries, set budgets for various categories, and monitor their spending as they journey.
            The app is ideal for frequent travelers and those planning their first big adventure.
            The overall goal is to allow users to stay organized and in control, making the most of every journey.

            I want to continue improving the app by adding features such as real-time currency conversion, collaborative trip planning, 
            and integration with travel APIs for booking and itinerary management in the future.`,
            highlights: [
                "Built core modules with SwiftUI and SQLite persistance.",
                "Designed responsive mobile UI or ease of use.",
                "Integrated local data storage and sync functionality."
            ],
            tech: ["SQLite", "Swift", "SwiftUI"],
            links: {
                github: "https://github.com/maloudnee/bon-voyage"
            }
            
        
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
            }
           
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
            }
           
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
            }
           
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
            }
   
        }
    ]

    const [ active, setActive ] = useState(null);

    return (
       <>
        <div className="relative flex flex-col gap-[5vw] min-h-screens md:px-[5vw] w-full bg-[#510400]">

            <div className="font-be-vietnam-pro text-white max-w-4xl">

                <motion.div initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.9, ease: "easeOut"}} viewport={{ once: true }}>
                    <p className="font-robto text-2xl md:text-4xl xl:text-6xl text-[#ddc5ad] font-bold pt-2">/ projects</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.9, ease: "easeOut"}} viewport={{ once: true }}>
                    <p className="mt-4 text-sm md:text-lg xl:text-lg text-white font-be-vietnam-pro">Projects I've done. </p>
                </motion.div>

            </div>

            <motion.ul className="grid grid-cols-1 gap-3 px-2 md:grid-cols-3 md:gap-5" 
                        initial="hidden" 
                        animate="show" 
                        variants={{ 
                            hidden: {},
                            show: {
                            transition: { staggerChildren: 0.6 }
                            }
                        }}>
                {Object.keys(my_projects).map((key, i) => ( 
                    <motion.li 
                    key={key} 
                    className="bg-[#eee3c3]/95 rounded-xl p-5 relative cursor-pointer hover:bg-white" 
                    onClick={() => setActive(my_projects[key])}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        show: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    viewport={{ once: true }}
                    >
                        <FaProjectDiagram className="pointer-events-none text-[#570A0F]" />
                        <p className="text-3xl text-[#A13046] font-extrabold">{my_projects[key].title}</p>
                        <p className="text-sm italic text-[#A13046]">{my_projects[key].subtitle}</p>
                        <p className="mt-2 text-black">{my_projects[key].shortDesc}</p>
                        <p className="mt-3 text-sm text-black/68">
                            {my_projects[key].tech.map((tool, idx) => (
                                <span key={idx}>
                                    {tool}
                                    {idx !== my_projects[key].tech.length - 1 && " • "}
                                </span>
                            ))}
                        </p>
                        <span className="absolute bottom-3 right-3 flex gap-3">
                            {my_projects[key].links.github && (
                                <a href={my_projects[key].links.github} target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="w-5 h-5 text-[#570A0F] hover:scale-150"/>
                                </a>
                            )}
                            {my_projects[key].links.devpost && (
                                <a href={my_projects[key].links.devpost} target="_blank" rel="noopener noreferrer">
                                    <FaExternalLinkAlt className="w-5 h-5 text-[#570A0F] hover:scale-150"/>
                                </a>
                            )}
                        </span>
                    </motion.li>
                ))}
            </motion.ul>

            <div className="d-block ">
                <Modal show={active !== null} onHide={() => setActive(null)} centered size="lg">
                    <Modal.Header closeButton className="bg-[#eee3c3]">
                    <Modal.Title>
                        <p className="text-2xl text-[#A13046] font-roboto font-extrabold">
                            {active?.title}
                        </p>
                    </Modal.Title>

                    </Modal.Header>
                    <Modal.Body className="bg-[#eee3c3]">
                        <p className="text-sm italic text-[#A13046] font-be-vietnam-pro">{active?.subtitle}</p>
                        <p className="mt-4 text-black font-be-vietnam-pro">{active?.longerDesc}</p>
                        <div className="mt-4 flex items-center gap-2"> 
                            <span className="text-black font-be-vietnam-pro"> Highlights </span> 
                            <img src="/images/!!.png" alt="!" /> 
                         </div>
                        <ul className="list-image-[url(/images/heart.png)] list-inside text-black">
                            {active?.highlights.map((highlight, idx) => (
                                <li key={idx}>{highlight}</li>
                            ))}
                        </ul>

                        <p className="mt-4 text-sm text-black/68">
                            <span className="font-bold">Tech Stack: </span>
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
                <p className="text-sm text-white font-be-vietnam-pro">  All rights reserved. © </p>
            </div>

        </div>

       </>
    );
}