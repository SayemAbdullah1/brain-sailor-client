import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className='row'>
            <div className=' mx-auto mt-5 border p-4 col-lg-3'>
                <h2 className='text-primary fw-bold text-center'>Login</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <div>
                        <small>You didn't have any Account, <Link to='/register'>please Register</Link></small>
                    </div>
                    

                    <Button className='mt-2' variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
      </div>
    );
};

export default Login;