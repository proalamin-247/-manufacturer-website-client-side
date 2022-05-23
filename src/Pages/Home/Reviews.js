import React, { useEffect, useState } from 'react';
import Review from './Review'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div className='my-12 lg:mx-12 '>
            <h3 className='text-3xl text-primary font-bold py-2'>Latest Reviews</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.slice(0, 3).map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;