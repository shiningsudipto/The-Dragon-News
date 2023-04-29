import React, { useContext } from 'react';
import moment from 'moment';
import Marquee from "react-fast-marquee";
import logo from '../../assets/logo.png';
import profileIcon from '../../assets/profile-icon.jpg'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import HeaderNavbar from './HeaderNavbar';

const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='text-center pt-4'>
            <img src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            {/* <p>{user?.name}</p> */}
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            {/* horizontal scrolling */}
            <div className='d-flex bg-light p-3 mt-4'>
                <Button className='rounded-0 px-4' variant="danger">Latest</Button>
                <Marquee className='fw-bold' speed={50} pauseOnHover>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            {/* Navbar */}
            <HeaderNavbar />
        </div>
    );
};

export default Header;