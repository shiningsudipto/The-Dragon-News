import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeftNavbarEditorsInsights from './LeftNavbarEditorsInsights';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://shiningsudipto.github.io/the-dragon-news-api/news-category.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    })
    return (
        <div>
            <h4>All Category</h4>
            <div className='ms-3'>
                {
                    categories.map(category => <Link className='text-decoration-none text-dark d-block py-1 my-1' to={`/category/${category.id}`}
                        key={category.id}
                    >{category.name}</Link>)
                }
            </div>
            <div className='mt-4'>
                <LeftNavbarEditorsInsights />
            </div>
        </div>
    );
};

export default LeftNav;