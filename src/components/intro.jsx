import { useEffect, useState } from 'react';
import LetterGlitch from './LetterGlitch';
import "../app/styles/intro.css";

export default function Intro() {
    const [showGlitch, setShowGlitch] = useState();
        
    useEffect(() => {
        const timer = setTimeout(() => setShowGlitch(true), 1300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="wrapper">
            {!showGlitch ? (
                <div className="container">
                <div className="intro">
                    <span className="mLeft"></span>
                    <span className="mLeft-Diagonal"></span>
                    <span className="mRight-Diagonal"></span>
                    <span className="mRight"></span>
                </div>

                <div className="intro">
                    <span className="aCross"></span>
                    <span className="aLeft"></span>
                    <span className="aRight"></span>
                </div>

                <div className="intro">
                    <span className="lVertical"></span>
                    <span className="lHorizontal"></span>
                </div>
            </div>  
            ) : (
                <LetterGlitch
                className='glitch'
                glitchSpeed={50}
                centerVignette={false}
                outerVignette={false}
                smooth={true}
                />
            )}
        </div>
    );
}