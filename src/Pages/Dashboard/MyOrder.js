import React from 'react';

const MyOrder = () => {
    return (
        <div className='mt-5'>
            <h2 className='text-2xl text-bold'>My Orders</h2>
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
                        <tr>
                            <td>Chakka</td>
                            <th>Md AL AMin</th>
                            <td>10</td>
                            <td>49886512</td>
                            <td>aa</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;