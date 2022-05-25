import React from 'react';
import { useNavigate } from 'react-router-dom';

const PartCard = ({ part }) => {
    const { _id, name, description, minimumOrder, availableQuntity, unitPrice, img } = part;

    const navigate = useNavigate();

    const navigateToPurchase = id => {
        navigate(`/part/${id}`);
    }


    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className='lg:w-80' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title justify-center">{name}</h2>
                    <p>{description}</p>
                    <p>Minimum Order: {minimumOrder}</p>
                    <p>Available Quantity: {availableQuntity}</p>
                    <p>Per unit Price: {unitPrice}</p>
                    <div className="card-actions justify-center">
                        <button onClick={() => navigateToPurchase(_id)} className="btn btn-primary">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartCard;