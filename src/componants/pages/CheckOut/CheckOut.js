import React from 'react';
import { useContext } from 'react';
import { Container, Image } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { authContext } from '../../Contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const {user} = useContext(authContext)
    const checkOut = useLoaderData()
    const { _id, title, image_url, details } = checkOut
    return (
        <div>
            <Container>
                <h1 className='fw-bold text-primary text-center'>Course checkout</h1>
                <hr />
                <div className='text'>
                    <div>
                        {
                            user?.displayName ?
                                <>
                                    <p>Welcome, <span className='text-primary fs-1'>{user.displayName}</span></p>
                                    <h3>You get access our <span className='text-danger fs-2'>{title}</span> premium courses.</h3>
                                </>

                                :
                                <p></p>
                        }
                    </div>
                    <div>
                        <p className='fs-2 fw-bold text-center text-primary mt-4 mb-4'>See course details</p>
                        <div className='col-sm-12 col-lg-5 mx-auto'>
                            <div className="card text-center">
                                <div className="card-header">
                                    {title}
                                </div>
                                <div className="card-body">
                                    <Image className="card-img-top img-fluid w-100" src={image_url} alt="Card image cap" />
                                    <p className="card-text">{details}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CheckOut;