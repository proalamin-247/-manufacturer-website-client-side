import React from 'react';

const reviewCard = ({ review }) => {
    return (
        <div className="card lg:mx-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{review.review}</p>
                <div className="flex items-center mt-5">
                    <div className="avatar">
                        <div className=" rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt="" />
                        </div>
                        <div>
                            <h4 className='text-xl'>{review.name}</h4>
                            <h4 className='text-xl'>{review.location}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default reviewCard;