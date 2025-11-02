"use client";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import FadeInSection from "../../components/FadeIn"

export default function Projects() {
    const my_projects = [
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
            },
            image: "/images/tear-of-fate.jpg"

        },
        {
            title: "Vue Voiture",
            subtitle: "September 2025 -- Present ",
            shortDesc: "Predicitive maintenance model for vehicles using real and simulated data that notifies users when upcoming maintenance on their vehicle is needed.",
            longerDesc: `
            In the process of developing a predictive model that forecasts vehicle issues using supervised ML techniques and car sensor data.
            This approach allows me to analyze key performance indicators in real-time, identifying patterns and predicting maintenance needs before they become critical problems.
            To improve user experience and ensure timely interventions, I am also implementing a companion app designed to provide real-time maintenance notifications to vehicle owners. 
            The app will alert users about upcoming maintenance requirements and offer insights into the health of their vehicle, so users stay informed and proactive in keeping their car in optimal condition.
            The overall goal is to improve vehicle longevity, enhance safety, and provide peace of mind to drivers. `,
            highlights: [
                "Creating a hybrid dataset combining simulated and real telemtry data.",
                "Implementing Scikit-learn regression models to predict maintenance intervals.",
                "Working with my dad on this =)"
            ],
            tech: ["Python", "Pandas", "Numpy", "Scikit-learn", "SQL", "Swift"],
            links: {
                github: "https://github.com/maloudnee/vue-voiture"
            },
            image: "/images/under_construction.png"
        },
        {
            title: "Bon Voyage",
            subtitle: "September 2025 -- October 2025",
            shortDesc: "Travel budgeting and planning app that was built using SwiftUI allowing users to manage their trips both past and upcoming.",
            longerDesc: `
            iOS budgeting and trip planning app designed to empower travelers by providing an intuitive platform for managing expenses and tracking trip logistics in real time.
            This app enables users to seamlessly organize their travel itineraries, set budgets for various categories, and monitor their spending as they journey.
            The app is ideal for frequent travelers and those planning their first big adventure.
            The overall goal is to allow users to stay organized and in control, making the most of every journey.`,
            highlights: [
                "Built 5+ core modules with SwiftUI and SQLite persistance.",
                "Designed responsive mobile UI or ease of use.",
                "Integrated local data storage and sync functionality."
            ],
            tech: ["SQLite", "Swift", "SwiftUI"],
            links: {
                github: "https://github.com/maloudnee/bon-voyage"
            },
            image:"/images/bon-voyage.jpg"
        
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
            image: "/images/yappin-entertainment.jpg"
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
            image: "/images/physics-explained.jpg"
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
            image: "/images/gemini-playlist.jpg"
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
            image: "/images/pokeflex.jpg"
        }
    ]

    const [ active, setActive ] = useState(null);

    return (
        <div id="projects" className="bg-[#000223] min-h-screen w-screen text-white px-2 md:px-6">
            <div className="flex items-center gap-4">
                <h1 className="font-ntr text-red-500 font-bold text-5xl md:text-7xl md:py-4">Projects</h1>
                <img className="w-30 h-30 object-contain" src="/images/projects-chibi.png" alt="chibi pic of me and tray"></img>
            </div>
            <p className="mb-5 font-roboto text-md md:text-lg"> A collection of projects I have worked on throughout Hackathons and my personal time. </p>

            <div className="max-w-7xl mx-auto mt-5 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {my_projects.map((project, i) => (
                        <div
                        key={i}
                        className="relative h-80 rounded-lg overflow-hidden border-1 border-red-500 transition cursor-pointer"
                        style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                        onClick={() => setActive(project)} 
                        >
                            <div className="absolute inset-0 bg-black/70 p-4 flex flex-col justify-start">
                                <h1 className="text-white text-xl font-ntr font-bold mb-1">{project.title}</h1>
                                <p className="italic text-sm text-white font-ntr mb-2">{project.subtitle}</p>
                                <p className="text-white font-ntr font-normal mb-3">{project.shortDesc}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.slice(0, 4).map((skill, j) => (
                                        <span
                                        key={j}
                                        className="bg-[#000223] text-sm px-2 py-1 rounded-md text-neutral-200"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="w-full flex justify-center">
                                    <button
                                    onClick={() => setActive(project)}
                                    className="py-1 px-2 !rounded-2xl bg-red-500 text-white text-sm font-roboto font-semibold hover:bg-red-300"
                                    >
                                        See More &gt;
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {active && (
                        <div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-start pt-20 z-50 p-6">
                            <div className="bg-[#1a1a1a] p-6 rounded-lg max-w-lg w-full overflow-y-auto max-h[80vh]">
                                <div className="flex justify-between items-start mb-4">
                                    <h2 className="text-white text-2xl font-bold font-ntr mb-1">{active.title}</h2>
                                    <button
                                    onClick={() => setActive(null)}
                                    className="text-neutral-400 hover:text-white text-3xl font-light ml-4 p-1"
                                    >
                                        &times;
                                    </button>
                                </div>
                                <p className="italic text-white font-ntr" >{active.subtitle}</p>
                                <p className="text-white font-roboto">
                                    {active.longerDesc}
                                </p>

                                <h3 className="font-semiBold mb-2 font-ntr" style={{ color: "#bc3636"}}>Highlights</h3>
                                <div className="flex flex-col gap-3 mb-4">
                                    {active.highlights.map((highlight, i) => (
                                        <span
                                        key={i}
                                        className="text-sm text-white py-1 font-roboto relative before:content-['➤'] before:text-[#d75858] before:mr-2"
                                        >
                                            {highlight}
                                        </span>
                                    ))}
                                </div>

                                <h4 className="font-semiBold font-ntr mb-2" style={{ color: "#bc3636" }}>Tools & Tech:</h4>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {active.tech.map((tool, i) => (
                                        <span
                                        key={i}
                                        className="bg-neutral-800 text-xs px-2 py-1 rounded-full text-neutral-200"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 text-red-400">
                                    <a href={active.links.github} target="_blank" rel="noopener noreferrer">
                                        <FaGithub className="text-xl text-red-800 hover:text-red-500 transition" />
                                    </a>
                                    {active.links.devpost && (
                                        <a href={active.links.devpost} target="_blank" rel="noopener noreferrer">
                                            <FaArrowUp className="text-xl text-red-800 hover:text-red-500 transition" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}