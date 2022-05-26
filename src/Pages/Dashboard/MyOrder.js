import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {

    const [orders, setOrders] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://polar-harbor-29275.herokuapp.com/order?userEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        navigate('/');
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                    }
                    return res.json()
                })
                .then(data => {

                    setOrders(data)
                });
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
                            orders.map(o =>
                                <tr key={o._id}>
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