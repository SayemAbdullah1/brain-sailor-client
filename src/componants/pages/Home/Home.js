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

                <div class="row g-4 mt-5" >
                    <div class="col-sm-12 col-lg-4">
                        <div class="card h-100">
                            <Image src={network} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Network Security</h5>
                                    <p class="card-text"></p>
                                </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-4">
                        <div class="card h-100">
                            <Image src={python} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Python programming</h5>
                                    <p class="card-text"></p>
                                </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-4">
                        <div class="card h-100">
                            <Image src={cyber} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Cyber security</h5>
                                    <p class="card-text"></p>
                                </div>
                        </div>
                    </div>
                    
                </div>
            </Container>
        </div>
    );
};

export default Home;