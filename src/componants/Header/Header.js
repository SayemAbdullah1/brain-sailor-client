import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { authContext } from '../Contexts/AuthProvider/AuthProvider';
import logo from './../Others/images/logo.png'
import { FaUser } from 'react-icons/fa';
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(authContext)

    const handleLogOut =()=>{
        logOut()
    }
    return (
        <div className='header'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand>
                        <Link to='/'>
                            <img
                                src={logo}
                                width="100"
                                height="30"
                                className="d-inline-block align-top"
                                alt="Brain sailor logo"
                            />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to='/' className='option'>Home</Link></Nav.Link>
                            <Nav.Link><Link to='/courses' className='option'>Courses</Link></Nav.Link>
                            <Nav.Link><Link to='/FAQ' className='option'>FAQ</Link></Nav.Link>
                            <Nav.Link><Link to='/blog' className='option'>Blog</Link></Nav.Link>
                           
                        </Nav>
                        <>
                        {
                            user?.uid ?
                            <>
                            <Button className='pe-3 me-2' onClick={handleLogOut} variant="light" size="sm"><Nav.Link><Link  to='/'>LogOut</Link></Nav.Link></Button>
                            </>
                            :
                            <>
                            <Nav.Link><Link className='pe-3 me-3 option' to='/login'>Login</Link></Nav.Link>
                            <Nav.Link><Link className='pe-3 option me-2' to='/register'>Register</Link></Nav.Link>
                            </>
                        }

                            <Nav.Link eventKey={2}>
                                {
                                    user?.photoURL ?
                                        
                                            <Image
                                                src={user?.photoURL}
                                                roundedCircle
                                                style={{ height: '40px' }}
                                            ></Image>

                                        :
                                        <FaUser></FaUser>

                                }
                            </Nav.Link>
                            
                        </>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;