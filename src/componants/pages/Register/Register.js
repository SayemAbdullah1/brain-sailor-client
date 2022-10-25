import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(authContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleregister = (event)=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoURL, email, password)

        createUser(email, password)
        .then((result) =>{
            const user = result.user;
            setError('')
            navigate('/')
            console.log(user)
        })
        .catch((error)=>{
            console.error(error)
            setError(error.message)
        })


    }



    return (
        <div className='row'>
            <div className=' mx-auto mt-5 border p-4 col-lg-3'>
                <h2 className='text-primary fw-bold text-center'>Register</h2>
                <Form onSubmit={handleregister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Your Name" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='photoURL' placeholder="Enter PhotoURL" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <div>
                        <small className=''>You already have an Account, <Link to='/login'>please Login</Link></small>
                    </div>
                    <Button className='mt-2' variant="primary" type="submit">
                        Register
                    </Button>
                        <small className='text-danger'>{error}</small>
                </Form>
            </div>
        </div>
    );
};

export default Register;