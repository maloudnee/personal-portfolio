export default function About() {
    return (
        <div id="about" className="bg-[#000223] min-h-screen w-screen text-white px-2 md:px-6">
            <div className="flex items-center gap-4">
                <h1 className="font-ntr text-red-500 font-bold text-7xl py-4">About Me</h1>
                <img className="w-20 h-20 object-contain" src="/images/about-me-chibi.png" alt="chibi pic of me"></img>
            </div>

            <div className="flex flex-col md:flex-row md:flex-row gap-16 items-start">
                <div className="w-2/3 md:w-1/4 h-auto md:mt-0 hidden md:block">
                    <img className="object-cover border-4 border-solid border-red-500 mt-5" style={{ borderRadius: "12px" }} src="/images/second-option.jpg" alt="a picture of me"></img>
                </div>
                <div className="md:w-3/5 ml-5 md:ml-10 space-y-5">
                        <div className="font-roboto text-white text-lg space-y-5">
                            <p>
                            I am an undergraduate pursuing a Bachelor of Science in Computer Science at the University of Central Florida, 
                            driven by a vision: to become a machine learning engineer and use innovation to enhance lives everywhere. 
                            Growing up, being introduced to new technologies that made my life and those around me's lives easier captivated me. 
                            The possibilities of technology are endless and can change the world for the better when used ethically.
                            </p>

                            <p>
                            I am an avid learner and always am looking to learn and expand my knowledge. One of the reasons I chose computer science 
                            is that the learning never ends in this field; something new is always being introduced. I am currently a mentee in my software 
                            development club, KnightHacks, where I have been learning more about the tech industry. My time as a mentee has been helping me 
                            grow as an engineer. I am also getting involved in research, where my understanding of AI has been growing tremendously. 
                            The current technologies I have been exploring and trying to gain a better understanding of are:
                            </p>
                        </div>

                    <div className="w-full flex justify-start gap-8 font-roboto text-lg space-y-5">
                        <ul className="flex flex-col gap-2 list-none p-0">
                            <li className="relative before:content-['➢'] before:text-[#d75858] before:mr-2">Next.js</li>
                            <li className="relative before:content-['➢'] before:text-[#d75858] before:mr-2">Tailwind CSS</li>
                            <li className="relative before:content-['➢'] before:text-[#d75858] before:mr-2">Swift</li>
                        </ul>

                        <ul className="flex flex-col gap-2 list-none p-0">
                            <li className="relative before:content-['➢'] before:text-[#d75858] before:mr-2">SQL</li>
                            <li className="relative before:content-['➢'] before:text-[#d75858] before:mr-2">RAG</li>
                            <li className="relative before:content-['➢'] before:text-[#d75858] before:mr-2">TensorFlow</li>
                        </ul>
                    </div>

                    <div className="mt-4 font-roboto text-lg space-y-5">
                        <p>
                        Outside of tech, my hobbies include painting, playing Sudoku, reading, and binge-watching– I love consuming media that has a 
                        compelling story. I am also in the process of learning how to play chess because I love games that require me to think. 
                        I find that they help me grow overall as a person.
                        </p>

                        <p>
                        Je parle aussi français, mais je le parle un peu de mal en ce moment. Je suis Haïtien alors je l’apprends maintenant.
                        </p>

                        <p>
                        日本人も!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}