import React from 'react';
import { Container, Image } from 'react-bootstrap';
import network from './../../Others/images/network.png'
import python from './../../Others/images/python.png'
import cyber from './../../Others/images/cyber.png'

const Home = () => {
    return (
        <div>
            <Container>
                <h1 className='text-primary text-center fw-bold mt-5'>Our populer courses</h1>
                <hr />

                <div className="row g-4 mt-5" >
                    <div className="col-sm-12 col-lg-4">
                        <div className="card h-100">
                            <Image src={network} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Network Security</h5>
                                    <p className="card-text"></p>
                                </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-4">
                        <div className="card h-100">
                            <Image src={python} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Python programming</h5>
                                    <p className="card-text"></p>
                                </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-4">
                        <div className="card h-100">
                            <Image src={cyber} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Cyber security</h5>
                                    <p className="card-text"></p>
                                </div>
                        </div>
                    </div>
                    
                </div>
            </Container>
        </div>
    );
};

export default Home;