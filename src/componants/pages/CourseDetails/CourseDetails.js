import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetaild = useLoaderData()
    // console.log(courseDetaild)
    const { _id, title, image_url, details } = courseDetaild
    return (
        <div className='mt-5'>
            <Container>
            <h1 className='fw-bold text-primary text-center'>Course Details</h1>
                <hr />
            <div className='col-sm-12 col-lg-5 mx-auto'>
                <div className="card text-center">
                    <div className="card-header">
                        {title}
                    </div>
                    <div className="card-body">
                            <Image className="card-img-top img-fluid w-100" src={image_url} alt="Card image cap" />
                        <p className="card-text">{details}</p>
                    </div>
                    <div className="card-footer">
                            <Link className="btn btn-primary" to={`/checkout/${_id}`} >Get premium</Link>
                    </div>
                </div>
            </div>
            </Container>
        </div>
    );
};

export default CourseDetails;