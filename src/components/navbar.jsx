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
        <Navbar fixed="top" className="max-w-screen">
            <Container className="flex items-end w-full">

                <Navbar.Brand href="#">
                    <p className="text-white text-sm font-be-vietnam-pro font-bold"> Maloudnee </p>
                </Navbar.Brand>

                <div className="hidden overflow-hidden md:flex me-auto">
                    <Nav className="gap-4">

                        <Nav.Link href="#home">
                            <p className="text-white text-sm font-be-vietnam-pro hover:scale-130"> Home </p>
                        </Nav.Link>

                        <Nav.Link href="#about">
                            <p className="text-white text-sm font-be-vietnam-pro hover:scale-130"> About </p>
                        </Nav.Link>

                        <Nav.Link href="#experience">
                            <p className="text-white text-sm font-be-vietnam-pro hover:scale-130"> Experience </p>
                        </Nav.Link>

                        <Nav.Link href="#projects">
                            <p className="text-white text-sm font-be-vietnam-pro hover:scale-130"> Projects </p>
                        </Nav.Link>

                    </Nav>
                </div>

                <Nav className="ml-auto">

                    <Nav.Link href="https://github.com/maloudnee" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-white w-5 h-5 hover:scale-150"/>
                    </Nav.Link>

                    <Nav.Link href="https://www.linkedin.com/in/maloudneemarcier/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-white w-5 h-5 hover:scale-150"/>
                    </Nav.Link>

                    <Nav.Link href="mailto:marciermaloudnee@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope className="text-white w-5 h-5 hover:scale-150"/>
                    </Nav.Link>
                
                </Nav>


            </Container>
        </Navbar>
    );
}    

export default NavBar;