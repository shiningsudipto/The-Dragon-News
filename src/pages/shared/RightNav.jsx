import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGofore, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from './QZone';
import bg from '../../assets/bg.png'
import bg2 from '../../assets/bg1.png'

const RightNav = () => {
    return (
        <div>
            <h4 className='mb-3'>Login with</h4>
            <div>
                <Button className='mb-3' variant="outline-primary"><FaGofore /> Login with Google</Button>
                <br />
                <Button variant="outline-secondary"><FaGithub /> Login with Github</Button>
            </div>
            <div className=' my-3'>
                <ListGroup >
                    <ListGroup.Item><FaFacebookF className='facebook-icon' /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter className='twitter-icon' /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram className='instagram-icon' /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <QZone />
            </div>
            <div className='position-relative mt-3'>
                <img src={bg} alt="" />
                <div className='position-absolute top-0 text-white text-center p-4'>
                    <h2 className='mt-5 mb-4'> Create an Amazing Newspaper</h2>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="danger rounded-0 px-3 mt-4">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;