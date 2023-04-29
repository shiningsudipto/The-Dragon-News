import React from 'react';
import HeaderNavbar from './shared/HeaderNavbar';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import MyModal from './shared/Modal';
import { useState } from 'react';

const Registration = () => {
    const { createUser, settingDataToProfile } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false)
    const handleUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                // update profile
                settingDataToProfile(name, photo)
                    .then(() => {
                        console.log("Profile updated");
                    }).catch((error) => {
                        setRegError(error.message)
                    });
            })

            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    const handleCheckAccepted = event => {
        setAccepted(event.target.checked)
    }

    const [modalShow, setModalShow] = useState(false);
    return (
        <div className='container'>
            <HeaderNavbar />
            <h3>Please Sign up</h3>
            <div className=''>
                <Form onSubmit={handleUser} className='w-50 mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox"
                            onClick={handleCheckAccepted}
                            label={
                                <>
                                    <p onClick={() => setModalShow(true)}>
                                        see   <span className='text-danger' >terms and condition</span>
                                    </p>

                                    <MyModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    /></>
                            }
                        />
                    </Form.Group>
                    <Button disabled={!accepted} variant="primary" type="submit">
                        Sign up
                    </Button>
                    <br />
                    <p>Already have an account? please <Link to="/login">Log in</Link></p>
                    <br />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form>
            </div>
        </div>
    );
};

export default Registration;