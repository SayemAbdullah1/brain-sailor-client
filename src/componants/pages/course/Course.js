import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    // console.log(course)
    const { _id, title, image_url, details } = course
    return (
 
            <div className="">
            <div className="">
                    <div className="card h-100">
                        <Image style={{height: '150px'}} src={image_url} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p>{details.slice(0, 60) + '...'}</p>
                        <Link to={`/course/${_id}`}>
                        <button className="btn btn-primary">Course detaild</button>
                        </Link>

                            </div>
                    </div>
                </div>
               
            </div>
    );
};

export default Course;