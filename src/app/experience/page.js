"use client";
import React, { useState } from 'react';
import ElectricBorder from '../../components/ElectricBorder.jsx';

export default function Experience() {
    const experiences = [
        {
            id: 0, 
            company: 'Interactive Computing Experiences Research Cluster @ UCF', 
            title: 'Undergraduate Research Assistant –– ', 
            duration: 'OCTOBER 2025 –– PRESENT',
            responsibilities: [
                'Assisting with research focused on AI-assisted communication for individuals with speech impediments.',
                'Preprocessing datasets, preparing raw data for model training and analysis.',
                'Reviewing and synthesizing LLM and generative AI literature to build foundational understanding for ongoing experiments.',
                'Collaborating with researchers to document findings and improve data reliability for future testing.'
            ],
            skills: [
                'Python',
                'Data Preprocessing', 
                'Research Analysis',
                'Machine Learning',
                'Communication'
            ]
        },
        {
            id: 1,
            company: 'Synthetic Reality Lab @ UCF',
            title: 'Technical Editor –– ',
            duration: 'SEPTEMBER 2024 –– NOVEMBER 2024',
            responsibilities: [
                'Editied technical papers for grammar, clarity, and consistency with publication standards.',
                'Collaborated with authors to strengthen technical explanations and streamline document flow.',
                'Reviewed citations, formatting, and visual content for professional accuracy.',
                'Consolidated and refined content from 10+ research papers on augmented reality to produce a cohesive technical report.'
            ],
            skills: [
                'Attention to Detail',
                'Technical Writing',
                'Communication',
                'Document Formatting',
                'Editing'
            ]
        }
    ]

    const [activeTabId, setActiveTabId] = useState(experiences[0].id);

    return(
        <div className="bg-[#000223] min-h-screen w-screen text-white px-2 md:px-6">
            <div className="flex items-center gap-4">
                <h1 className="font-ntr text-red-500 font-bold text-5xl md:text-7xl md:py-4">Experience</h1>
                <img className="w-30 h-30 object-contain" src="/images/experience-chibi.png" alt="chibi of me and travon"></img>
            </div>
            <p className="mb-5 font-roboto text-md md:text-lg">A summary of experiences I feel have helped shape the engineer I'm working to become.</p>
            <div className="flex flex-col h-[700px] md:flex-row md:max-w-7xl md:h-[400px] ml-4">
                <div className="w-full flex flex-row border-b overflow-x-auto md:w-1/4 md:flex-col md:border-r border-[#000223] p-0 md:overflow-y-auto">
                    {experiences.map((exp) => (
                        <button
                        key={exp.id}
                        onClick={() => setActiveTabId(exp.id)}
                        className={`
                            py-2 px-10
                            md:text-left md:py-3 md:px-4 transition-all duration-300 
                            md:text-lg font-ntr
                            ${activeTabId === exp.id 
                                ? 'text-red-400 border-b-4 md:border-r-4 md:border-b-0 border-red-500'
                                : 'text-gray-400 hover:bg-gray-700 hover:text-white md:border-r-4 border-transparent' 
                            }
                        `}
                        >
                            <span className="md:hidden flex items-center justify-center text-md font-semibold">
                                {exp.id}
                            </span>

                            <span className="hidden md:inline-block">
                                {exp.company}
                            </span>
                        </button>
                    ))}
                </div>

                <div className="md:w-3/4 px-2 overflow-y-auto [h-300px]">
                    {experiences.map((exp) => (
                        <div
                        key={exp.id}
                        className={`${activeTabId === exp.id ? 'block' : 'hidden'}`}
                        >
                            <h2 className="text-4xl font-semibold font-ntr">
                                <span className="text-white">{exp.title}</span>
                                <span className="text-red-400">{exp.company}</span>
                            </h2>

                            <p className="text-sm italic text-gray-400 mb-6">{exp.duration}</p>

                            <ul className="list-outside space-y-2 text-gray-300 text-lg space-y-5">
                                {exp.responsibilities.map(function (resItem, i) {
                                    return (
                                        <li key={i} className="font-roboto relative before:content-['➢'] before:text-red-400 before:mr-2">{resItem}</li>
                                    );
                                })}
                            </ul>

                            <div className="mt-8">
                                <ul className="flex flex-row flex-wrap gap-x-3 gap-y-2 list-outside text-gray text-md">
                                    {exp.skills.map(function(skill, i) {
                                        return (
                                            <ElectricBorder
                                            color="#df0001"
                                            speed={1}
                                            chaos={0.5}
                                            thickness={2}
                                            key={i}
                                            style = {{ borderRadius: "9px" }}
                                            >
                                            <div>
                                                <li key={i} className="font-roboto text-md">{skill}</li>
                                            </div>
                                            </ElectricBorder>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <p className="font-roboto text-md md:text-lg mt-3">
                Furthermore, I am an active member of three organizations: KnightHacks, Girls Who Code, and the National Society of Black Engineers. In 
                these clubs, I attend workshops to develop new technical and professional skills. I have participated in 3 hackathons hosted by KnighHacks and 
                am currently a mentee in the program, strengthening my software development and teamwork abilities.
            </p>
        </div>
    );
}