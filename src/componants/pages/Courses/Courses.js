import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import Course from '../course/Course';
import './Course.css'

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div className=''>
            <Container>
                <div className='row'>
                    <h1 className='mt-5 mb-5 fw-bold text-primary text-center'>Computer science fundamental</h1>
                    <hr />
                    <div className='col-lg-3'>
                        <Category></Category>
                    </div>
                    <div className='col-lg-9'>
                        <h3 className='text-center'>All courses</h3>
                        <hr />

                        <div className=" g-4">
                            <div className='col'>
                                {
                                    courses.map(course => <Course
                                        key={course._id}
                                        course={course}
                                    ></Course>)
                                }
                                </div>
                        </div>
                    </div>
                    
                </div>
            </Container>
        </div>
    );
};

export default Courses;