import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { authContext } from '../Contexts/AuthProvider/AuthProvider';
import logo from './../Others/images/logo.png'
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(authContext)

    const handleLogOut =()=>{
        logOut()
    }
    return (
        <div>
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
                            <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                            <Nav.Link><Link to='/courses'>Courses</Link></Nav.Link>
                            <Nav.Link><Link to='/FAQ'>FAQ</Link></Nav.Link>
                            <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>
                           
                        </Nav>
                        <>
                        {
                            user?.uid ?
                            <>
                            <Button className='pe-3' onClick={handleLogOut} variant="light" size="sm"><Nav.Link><Link  to='/'>LogOut</Link></Nav.Link></Button>
                            </>
                            :
                            <>
                            <Nav.Link><Link className='pe-3' to='/login'>Login</Link></Nav.Link>
                            <Nav.Link><Link className='pe-3' to='/register'>Register</Link></Nav.Link>
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