import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../Contexts/AuthProvider/AuthProvider';


const Login = () => {
    const { login, googleLogin, GithubLogin } = useContext(authContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'
    const handleLogin =(event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log( email, password)

        login(email, password)
            .then((result) => {
                const user = result.user;
                setError('')
                navigate(from, { replace: true })
                console.log(user)
            })
            .catch((error) => {
                console.error(error)
                setError(error.message)
            })

    }

    const handleGoogleLogin = ()=>{
        googleLogin()
            .then((result) => {
                const user = result.user;
                navigate('/')
                console.log(user)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const handleGithubLogin = ()=>{
        GithubLogin()
        .then((result) => {
            const user = result.user;
            navigate('/')
            console.log(user)
        })
    .catch((error) => {
        console.error(error)
    })
    }



    return (
        <div className='row'>
            <div className=' mx-auto mt-5 border p-4 col-lg-3'>
                <h2 className='text-primary fw-bold text-center'>Login</h2>
                <Form onSubmit={handleLogin}>
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
                    <small className='text-danger'>{error}</small>
                </Form>
                <Button onClick={handleGoogleLogin} className='mt-2 w-100' variant="secondary">
                    Google Login
                </Button>
                <Button onClick={handleGithubLogin} className='mt-2 w-100' variant="dark" >
                    Github Login
                </Button>
            </div>
      </div>
    );
};

export default Login;