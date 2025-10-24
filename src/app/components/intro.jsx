import { useEffect } from 'react';
import '../styles/intro.css';

export default function Intro({ onFinish }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            if (onFinish) onFinish();
        }, 5000);

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
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
    );
}