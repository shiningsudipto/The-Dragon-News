import React from 'react';
import HeaderNavbar from './shared/HeaderNavbar';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthProvider, { AuthContext } from '../Provider/AuthProvider';


const Login = () => {
    const navigate = useNavigate();
    const { signIn } = useContext(AuthContext);

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                // Signed in 
                const loggedUser = result.user;
                // navigating to the aimed road
                navigate(from, { replace: true })
                console.log(loggedUser);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    return (
        <div className='container'>
            <HeaderNavbar />
            <h3>Login Page</h3>
            <div className=''>
                <Form onSubmit={handleSignIn} className='w-50 mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <br />
                    <p>You don't have any account? please <Link to="/signup">Sign up</Link></p>
                    <br />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form>
            </div>
        </div>
    );
};

export default Login;