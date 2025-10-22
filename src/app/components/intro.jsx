import { useEffect } from 'react';
import '../styles/intro.css';

export default function Intro({ onFinish }) {
    useEffect(() => {
        const audio = new Audio('/public/sounds/brotherlaughing.m4a');
        audio.play();

        const timer = setTimeout(() => {
            if (onFinish) onFinish();
        }, 5000);

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className="intro">
        {/* Paint M */}
        <div className="m-1"></div>
        <div className="m-4"></div>
        <div className="m-2">
            <div className="filler-1"></div>
            <div className="m-3">
                <div className="filler-2"></div>
            </div>

            {/* Paint A */}
            <div className="a-1">
                <div className="filler-3"></div>
            <div className="a-2">
                <div className="filler-4">
                </div>
                </div>
            </div>
            <div className="a-3">
            </div>
        </div>
        
            {/* Paint L */}
            <div className="l-1"></div>
            <div className="l-2"></div>
        </div> 
    );
}