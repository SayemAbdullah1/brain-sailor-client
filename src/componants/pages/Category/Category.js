import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Category.css'

const Category = () => {

    // console.log(courses)
    // const { _id } = course;
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://brain-sailor-server.vercel.app/course-category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div >
            <h3>All category: {categories.length}</h3>
            <div className='categories'>
                {
                    categories.map(category =>
                        <p key={category.id}>
                            <Link className='category'>{category.name}</Link>
                        </p>)
                }
            </div>
        </div>
    );
};

export default Category;