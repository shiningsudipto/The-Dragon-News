import React from 'react';
import moment from 'moment';
import Marquee from "react-fast-marquee";
import logo from '../../assets/logo.png';
import profileIcon from '../../assets/profile-icon.jpg'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div className='text-center'>
            <img src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            {/* horizontal scrolling */}
            <div className='d-flex bg-light p-3 mt-4'>
                <Button className='rounded-0 px-4' variant="danger">Latest</Button>
                <Marquee className='fw-bold' speed={50} pauseOnHover>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            {/* Navbar */}
            <Navbar collapseOnSelect expand="lg" bg="white" variant="white" className='mb-4'>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto fw-semibold">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Career</Nav.Link>
                    </Nav>
                    <Nav className='d-flex align-items-center'>
                        <Nav.Link ><img className='profileIcon' src={profileIcon} alt="" /></Nav.Link>
                        <Nav.Link eventKey={2}>
                            <Button className='rounded-0 px-4' variant="dark">Login</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;