"use client";
import { useEffect, useState } from "react";
import Intro from "../components/intro.jsx";
import "../app/styles/home.css";
import Link from "next/link";
import TextType from "../components/TextType.jsx";

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const seenIntro = sessionStorage.getItem("hasSeenIntro");
    console.log("Inside useEffect, seenIntro:", seenIntro);

    if (!seenIntro) {
      setShowIntro(true);
      setIsLoading(false);
      sessionStorage.setItem("hasSeenIntro", "true");

      const timer = setTimeout(() => {
        setShowIntro(false);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, []);
  console.log("Show intro:", showIntro, "Loading:", isLoading);

  if (isLoading) {
    return null;
  }

  if (showIntro) {
    return <Intro />; 
  } 

  return (
    <>
      <div id="home" className="bg-[#000223] min-h-screen flex flex-col items-center justify-center text-white p-4 sm:p-8 mx-auto relative z-10">
        <div className="spotify w-full max-w-lg mb-[-5rem] sm:mb-[-8rem]">
        <iframe 
        data-testid="embed-iframe" 
        style={{ borderRadius: "12px" }} 
        src="https://open.spotify.com/embed/track/7BdB5ZFpxHhafOAIisN2gX?utm_source=generator&theme=0" 
        width="100%" height="90" 
        frameBorder="0" 
        allowFullScreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
        ></iframe>
        </div>

        <div className="chibi-mal-vibing w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 shrink-0 mb-8 relative">
            <img className="frame-1" src="/images/the-glory-1.png" alt="frame-1"></img>
            <img className="frame-2" src="/images/the-glory-2.png" alt="frame-2"></img>
            <img className="frame-3" src="/images/the-glory-3.png" alt="frame-3"></img>
            <img className="frame-4" src="/images/the-glory-4.png" alt="frame-4"></img>
            <img className="frame-5" src="/images/the-glory-5.png" alt="frame-5"></img>
            <img className="frame-6" src="/images/the-glory-6.png" alt="frame-6"></img>
        </div>

        <p className="flex items-center font-ntr text-2xl sm:text-3xl lg:text-3xl font-semiBold">Hi my name is </p>
        <h1 className="flex items-center font-dynapuff text-red-500 text-4xl sm:text-5xl lg:text-6xl font-extrabold">MALOUDNEE MARCIER</h1>

        <h2 className="sm:text-sm lg:text-2xl text-white font-roboto">/ ma-lood-knee mar-si-air /</h2>

        <div className="lil-tidbit mt-[1rem]">
          <TextType 
            className="text-2xl sm:text-3xl lg:text-4xl font-ntr font-semibold"
            text={["Student", "Researcher", "Tech Enthusiast", "Aspiring Machine Learning Engineer"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>

        <div className="mt-5">
            <Link href="/about">
              <button className="bg-red-500 text-white py-2 px-4 !rounded-lg hover:bg-red-600 transition">Learn More About Me</button>
            </Link>
        </div>
      </div>
    </>
  );
}