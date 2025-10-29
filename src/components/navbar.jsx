// components/navbar.jsx

"use client";
import Link from "next/link";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.css';

export default function NavBar() {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" fixed="top" className="z-[9999]">
            <Container>
                <Navbar.Brand as={Link} href="/">
                    <img
                    src="/images/logo-sort-of.png"
                    alt="logo"
                    width="250"
                    height="250"
                    className="d-inline-block align-top"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} href="/about">
                            About
                        </Nav.Link>
                        <Nav.Link as={Link} href="/experience">
                            Experience
                        </Nav.Link>
                        <Nav.Link as={Link} href="/projects">
                            Projects
                        </Nav.Link>
                    </Nav>

                    <Nav className="ms-auto d-flex align-items-center gap-3">
                        <a
                        href="https://github.com/maloudnee"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white fs-4"
                        >
                            <FaGithub size={22} color="#d75858" />
                        </a>

                        <a
                        href="https://www.linkedin.com/in/maloudneemarcier/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white fs-4"
                        >
                            <FaLinkedin size={22} color="#d75858"/>
                        </a>

                        <a
                        href="mailto:marciermaloudnee@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white fs-4"
                        >
                            <FaEnvelope size={22} color="#d75858"/>
                        </a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}