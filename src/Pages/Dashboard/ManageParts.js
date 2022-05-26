import React, { useState } from 'react';
import useParts from '../../hooks/useParts';

const ManageParts = () => {
    const [parts, setParts] = useParts([]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you over sure!!');
        if (proceed) {
            const url = `https://polar-harbor-29275.herokuapp.com/part/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainig = parts.filter(part => part._id !== id);
                    setParts(remainig);
                })
        }
    }

    return (
        <div className='container mt-12 my-12 mb-5'>
            <h1 className='text-3xl font-bold py-2'>Warehouse stock Product: {parts.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    parts.map(part =>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img className='lg:w-80' src={part.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title justify-center">{part.name}</h2>
                                <p>{part.description}</p>
                                <p>Minimum Order: {part.miniumOrder}</p>
                                <p>Available Quantity: {part.availableQuantity}</p>
                                <p>Per unit Price: {part.perUnitPrice}</p>
                                <div className="card-actions justify-center">
                                    <button className='btn btn-danger' onClick={() => handleDelete(part._id)}>Delete Item</button>                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManageParts;