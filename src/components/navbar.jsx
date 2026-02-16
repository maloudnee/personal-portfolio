"use client";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import { Nav } from "react-bootstrap";

const NavBar = () => {
    
    return (
        <Navbar fixed="top" className=" bg-[#510400] h-16 px-2 max-w-screen">
            <Container className="flex items-end w-full">

                <Navbar.Brand href="#">
                    <img src="/images/me-chibi.png" alt="chibi of me" className="w-10 h-14 object-contain"/>
                </Navbar.Brand>

                <div className="hidden overflow-hidden md:flex me-auto">
                    <Nav className="gap-4">

                        <Nav.Link href="#home">
                            <img src="/images/home.png" alt="home icon" className="w-20 object-contain hover:scale-200"/>
                        </Nav.Link>

                        <Nav.Link href="#about">
                            <img src="/images/about-me.png" alt="about icon" className="w-20 object-contain hover:scale-200"/>
                        </Nav.Link>

                        <Nav.Link href="#experience">
                            <img src="/images/experience.png" alt="experience icon" className="w-20 object-contain hover:scale-200"/>
                        </Nav.Link>

                        <Nav.Link href="#projects">
                            <img src="/images/projects.png" alt="projects icon" className="w-20 object-contain hover:scale-200"/>
                        </Nav.Link>

                    </Nav>
                </div>

                <Nav className="ml-auto">

                    <Nav.Link href="https://github.com/maloudnee" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-[#A13046] w-5 h-5 hover:scale-150"/>
                    </Nav.Link>

                    <Nav.Link href="https://www.linkedin.com/in/maloudneemarcier/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-[#A13046] w-5 h-5 hover:scale-150"/>
                    </Nav.Link>

                    <Nav.Link href="mailto:marciermaloudnee@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope className="text-[#A13046] w-5 h-5 hover:scale-150"/>
                    </Nav.Link>
                
                </Nav>


            </Container>
        </Navbar>
    );
}    

export default NavBar;