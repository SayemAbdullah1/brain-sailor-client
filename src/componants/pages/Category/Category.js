import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Category.css'

const Category = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/course-category')
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
                            <Link className='category' to={`/category/${category.id}`}>{category.name}</Link>

                        </p>)
                }
            </div>
        </div>
    );
};

export default Category;