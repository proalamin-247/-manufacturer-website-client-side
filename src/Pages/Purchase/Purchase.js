import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const [user, loading, error] = useAuthState(auth);
    const { partId } = useParams();


    const [part, setPart] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/part/${partId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data));
    }, [partId, part]);

    const handalePurchase = event => {
        event.preventDefault();

        const orderDetails = {
            partId: part._id,
            partName: part.name,
            userName: user?.displayName,
            userEmail: user?.email,
            userPhone: event.target.phone.value,
            userAddress: event.target.address.value,
        }

        const url = `http://localhost:5000/order`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(result => {

            })

        document.getElementById('address').value = ' ';
        document.getElementById('phone').value = ' ';

        console.log(orderDetails);
    }
    return (
        <div className='grid justify-items-center lg:mt-5'>
            <h3 className="font-bold text-lg text-secondary">Order for: {part.name}</h3>
            <div className="card card-compact bg-base-100 shadow-xl justify-items-center grid grid-cols-2">

                <div className='w-96'>
                    <figure><img src={part.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center">{part.name}</h2>
                        <p>Minimum Order: {part.minimumOrder}</p>
                        <p>Available Quantity: {part.availableQuntity}</p>
                        <p>Per unit Price: {part.unitPrice}</p>
                    </div>
                </div>

                <form onSubmit={handalePurchase} className='grid grid-cols-1 gap-3 justify-items-center mt-10 w-full h-100'>
                    <input type="text" name='product' value={part.name} disabled className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='name' value={user?.displayName} disabled className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='email' value={user?.email} disabled className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='phone' id='phone' placeholder="Phone Number" required className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='address' id='address' placeholder="Address" required className="input input-bordered w-full max-w-xs" />
                    <input type="submit" value='Make Payment' placeholder="Type here" className="btn btn-secondary w-full max-w-xs my-2" />
                </form>
            </div>
        </div>

    );
};

export default Purchase;