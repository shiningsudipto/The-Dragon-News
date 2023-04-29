import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const HeaderNavbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
                console.log(error);
            });
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="white" className='mb-4'>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className=" fw-semibold">
                        <Nav.Link ><Link to="/" className='text-decoration-none btn btn-outline-danger variant="outline-danger" fw-semibold'>Home</Link> </Nav.Link>
                        <Nav.Link ><Link to="" className='text-decoration-none btn btn-outline-danger variant="outline-danger" fw-semibold'>About</Link> </Nav.Link>
                        <Nav.Link ><Link to="" className='text-decoration-none btn btn-outline-danger variant="outline-danger" fw-semibold'>Career</Link> </Nav.Link>
                    </Nav>
                    <Nav className='d-flex align-items-center ms-auto'>

                        {
                            user && <Nav.Link ><FaUserCircle style={{ fontSize: '2.5rem' }} /></Nav.Link>
                        }

                        <Nav eventKey={2}>
                            {
                                user ?
                                    <Button onClick={handleLogOut} className='rounded-0 px-4' variant="dark">Logout</Button>
                                    :
                                    <Link to='/login'><Button className='rounded-0 px-4' variant="dark">Login</Button></Link>

                            }
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default HeaderNavbar;