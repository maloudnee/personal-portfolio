"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    return (
        <header className="fixed top-0 left-0 w-full bg-[#000223] px-5 py-4 z-50">
            
            <div className="flex items-start justify-between max-w-full mx-auto">
                
                <div className="flex items-center space-x-8"> 
                    
                    <Link href="/" className="hover:cursor-pointer transition">
                        <img src="/images/logo-sort-of.png" alt="logo" className="h-8"></img>
                    </Link>

                    <nav className="hidden md:flex items-center space-x-6 text-[#2D324F] font-ntr text-2xl">
                        <Link href="/about" className="hover:text-red-400 transition">About</Link>
                        <Link href="/experience" className="hover:text-red-400 transition">Experience</Link>
                        <Link href="/projects" className="hover:text-red-400 transition">Projects</Link>
                    </nav>
                </div>

                <div className="hidden md:flex items-center space-x-4 text-[#2D324F]">
                    <a href="https://github.com/maloudnee" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition">
                        <FaGithub className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/maloudneemarcier" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition">
                        <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a href="mailto:marciermaloudnee@gmail.com" className="hover:text-red-400 transition">
                        <FaEnvelope className="w-5 h-5" />
                    </a>
                </div>

                <button 
                className="md:hidden text-white" 
                onClick={() => setIsMenuOpen(true)}
                >
                    <FaBars className="w-6 h-6" />
                </button>
            </div>

            <div 
            className={`
                fixed top-0 right-0 w-full h-full bg-[#000223] z-[51] transform transition-transform duration-300
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} 
                md:hidden 
            `}
            >
                <div className="flex justify-end p-5">
                    <button 
                        className="text-red-400" 
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <FaTimes className="w-8 h-8" />
                    </button>
                </div>

                <nav className="flex flex-col items-center space-y-10 mt-16 font-ntr text-3xl">
                    <Link href="/about" className="text-white hover:text-red-400" onClick={() => setIsMenuOpen(false)}>About</Link>
                    <Link href="/experience" className="text-white hover:text-red-400" onClick={() => setIsMenuOpen(false)}>Experience</Link>
                    <Link href="/projects" className="text-white hover:text-red-400" onClick={() => setIsMenuOpen(false)}>Projects</Link>
                </nav>

                <div className="flex items-center justify-center space-x-6 text-white mt-16">
                    <a href="https://github.com/maloudnee" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">
                        <FaGithub className="w-8 h-8" />
                    </a>
                    <a href="https://www.linkedin.com/in/maloudneemarcier" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">
                        <FaLinkedin className="w-8 h-8" />
                    </a>
                    <a href="mailto:marciermaloudnee@gmail.com" className="hover:text-red-400">
                        <FaEnvelope className="w-8 h-8" />
                    </a>
                </div>
            </div>
        </header>
    );
}    

export default NavBar;