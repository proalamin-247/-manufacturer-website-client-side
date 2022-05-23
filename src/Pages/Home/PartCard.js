import React from 'react';

const PartCard = ({part}) => {
    const { name, description, minimumOrder, availableQuntity, unitPrice,img}= part;


    return (
        <div>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title justify-center">{name}</h2>
                    <p>{description}</p>
                    <p>Minimum Order: {minimumOrder}</p>
                    <p>Available Quantity: {availableQuntity}</p>
                    <p>Per unit Price: {unitPrice}</p>
                    <div class="card-actions justify-center">
                        <button class="btn btn-primary">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartCard;