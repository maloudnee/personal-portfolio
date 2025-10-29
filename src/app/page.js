"use client";
import { useEffect, useState } from "react";
import Intro from "../components/intro.jsx";
import "../app/styles/home.css";
import Link from "next/link";
import Squares from '../components/Squares.jsx';

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
     <div 
        className="fixed top-0 left-0 w-screen h-screen z-0" 
      >
        <Squares 
        speed={0.5} 
        squareSize={40}
        direction='down'
        borderColor='#df0001'
        hoverFillColor='#d75858'/>
      </div>
      <div className="home-container">
        <div className="spotify">
        <iframe 
        data-testid="embed-iframe" 
        style={{ borderRadius: "12px" }} 
        src="https://open.spotify.com/embed/track/34j4OxJxKznBs88cjSL2j9?utm_source=generator&theme=0" 
        width="100%" height="152" 
        frameBorder="0" 
        allowFullScreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
        ></iframe>
        </div>

        <div className="chibi-mal-vibing">
            <img className="frame-1" src="/images/the-glory-1.png" alt="frame-1"></img>
            <img className="frame-2" src="/images/the-glory-2.png" alt="frame-2"></img>
            <img className="frame-3" src="/images/the-glory-3.png" alt="frame-3"></img>
            <img className="frame-4" src="/images/the-glory-4.png" alt="frame-4"></img>
            <img className="frame-5" src="/images/the-glory-5.png" alt="frame-5"></img>
            <img className="frame-6" src="/images/the-glory-6.png" alt="frame-6"></img>
        </div>

        <div className="my-name">
            <h1>Maloudnee Marcier</h1>
        </div>

        <div className="my-name-pronunciation">
            <h2>/ ma-lood-knee mar-si-air /</h2>
        </div>

        <div className="lil-tidbit">
          <p> Hey, I enjoy creating and learning new stuff. </p>
        </div>

        <Link href="/about">
          <button className="learn-more-button">Learn More About Me</button>
        </Link>
      </div>
    </>
  );
}