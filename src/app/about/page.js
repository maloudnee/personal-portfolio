export default function About() {
    return (
        <div className="bg-black min-h-screen w-screen text-white pt-24 px-6 overscroll-y-none overscroll-x-none">
            <div className="flex items-center gap-4 mb-8">
                <h1 className="font-dynapuff font-bold text-9xl" style={{ color: '#df0001' }}>ABOUT ME</h1>
                <img className="w-20 h-20 object-contain" src="/images/about-me-chibi.png" alt="chibi pic of me"></img>
            </div>

            <div className="flex flex-col md:flex-row md:flex-row gap-8 items-start">
                <div className="md:w-3/5">
                    <div className="">
                        <p>
                        My name is Maloudnee Marcier, and as an undergraduate pursuing a Bachelor of Science in Computer Science, 
                        I am driven by a vision: to become a machine learning engineer and use innovation to enhance lives everywhere. 
                        Growing up, being introduced to new technologies that made my life and those around me's lives easier captivated me. 
                        The possibilities of technology are endless and can change the world for the better when used ethically.
                        </p>

                        <p>
                        I am an avid learner and always am looking to learn and expand my knowledge. One of the reasons I chose a field in computer science 
                        is that the learning never ends in this field; something new is always being introduced. I am currently a mentee in my software 
                        development club, KnightHacks, where I have been learning more about the tech industry. My time as a mentee has been helping me 
                        grow as an engineer. I am also getting involved in research, where my understanding of AI has been growing tremendously. 
                        The current technologies I have been exploring and trying to gain a better understanding of are:
                        </p>
                    </div>

                    <div className="w-full flex justify-start gap-8">
                        <ul className="flex flex-col gap-2 list-none p-0">
                            <li className="relative before:content-['➤'] before:text-[#d75858] before:mr-2">Next.js</li>
                            <li className="relative before:content-['➤'] before:text-[#d75858] before:mr-2">Tailwind Css</li>
                            <li className="relative before:content-['➤'] before:text-[#d75858] before:mr-2">Swift</li>
                        </ul>

                        <ul className="flex flex-col gap-2 list-none p-0">
                            <li className="relative before:content-['➤'] before:text-[#d75858] before:mr-2">SQL</li>
                            <li className="relative before:content-['➤'] before:text-[#d75858] before:mr-2">RAG</li>
                            <li className="relative before:content-['➤'] before:text-[#d75858] before:mr-2">TensorFlow</li>
                        </ul>
                    </div>

                    <div className="more-yap mt-4">
                        <p>
                        Outside of tech, my hobbies include painting, playing Sudoku, reading, and binge-watching—I love consuming media that has a 
                        compelling story. I am also in the process of learning how to play chess because I love games that require me to think. 
                        I believe mind games help me grow as a software engineer and as a person overall.
                        </p>
                    </div>
                </div>

                <img className="pic-of-me w-2/3 md:w-1/4 h-auto mt-4 md:mt-0 object-cover border-4 border-solid border-red-500" src="/images/second-option.jpg" alt="a picture of me"></img>
            </div>
        </div>
    );
}