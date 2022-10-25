import React from 'react';
import { Image } from 'react-bootstrap';

const Course = ({course}) => {
    const { title, image_url, details } = course
    return (
 
            <div className="">
            <div className="">
                    <div className="card h-100">
                        <Image style={{height: '150px'}} src={image_url} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                            </div>
                    </div>
                </div>
               
            </div>
    );
};

export default Course;