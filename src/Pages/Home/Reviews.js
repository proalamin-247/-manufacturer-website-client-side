import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Review from './Review'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://polar-harbor-29275.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div className='container mt-5'>
            <h3 className='text-3xl text-primary font-bold py-2'>Latest Reviews</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                    reviews.slice(0, 3).map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
            <Link to='/reviews' className="btn btn-outline btn-primary mt-5 mr-2">Show All Review</Link>
        </div>
    );
};

export default Reviews;