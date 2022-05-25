import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {

    const [orders, setOrders] = useState([]);
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?userEmail=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data));
        }
    }, [user])


    return (
        <div className='mt-5'>
            <h2 className='text-2xl text-bold'>My total Orders: {orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Phone Number</th>
                            <th>Delivery Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(o=>
                                <tr>
                                    <td>{o.partName}</td>
                                    <th>{o.userName}</th>
                                    <td>{o.quantity}</td>
                                    <td>{o.userPhone}</td>
                                    <td>{o.userAddress}</td>
                                </tr>    
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;