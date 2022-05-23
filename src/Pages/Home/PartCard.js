import React from 'react';
import { useNavigate } from 'react-router-dom';

const PartCard = ({part}) => {
    const { _id, name, description, minimumOrder, availableQuntity, unitPrice,img}= part;

    const navigate = useNavigate();

    const navigateToPurchase = id => {
        navigate(`/part/${id}`);
    }


    return (
        <div>
            <div class="card card-compact bg-base-100 shadow-xl">
                <figure><img className='lg:w-80' src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title justify-center">{name}</h2>
                    <p>{description}</p>
                    <p>Minimum Order: {minimumOrder}</p>
                    <p>Available Quantity: {availableQuntity}</p>
                    <p>Per unit Price: {unitPrice}</p>
                    <div class="card-actions justify-center">
                        <button onClick={() => navigateToPurchase(_id)} class="btn btn-primary">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartCard;