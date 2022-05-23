import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const [user, loading, error] = useAuthState(auth);
    const { partId } = useParams();
    const [part, setPart] = useState({});
    useEffect(() => {
        const url = `http://localhost:5001/part/${partId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data));
    }, [partId, part]);

    return (
        <div className='grid justify-items-center lg:mt-5'>
            <h3 className="font-bold text-lg text-secondary">Order for: {part.name}</h3>
            <div class="card card-compact bg-base-100 shadow-xl justify-items-center grid grid-cols-2">
                <div className='w-96'>
                    <figure><img src={part.img} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title justify-center">{part.name}</h2>
                        <p>Minimum Order: {part.minimumOrder}</p>
                        <p>Available Quantity: {part.availableQuntity}</p>
                        <p>Per unit Price: {part.unitPrice}</p>
                    </div>
                </div>
                <form className='grid grid-cols-1 gap-3 justify-items-center mt-10 w-full h-48'>
                    <input type="text" name='name' value={user?.displayName} disabled className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='email' value={user?.email} disabled className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xs" />
                    <input type="submit" value='Make Payment' placeholder="Type here" className="btn btn-secondary w-full max-w-xs" />
                </form>
            </div>
        </div>

    );
};

export default Purchase;