import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl text-primary font-bold'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                    <li><Link to='/dashboard'>My Profile</Link></li>
                    <li><Link to='/dashboard/order'>My Orders</Link></li>
                    <li>{ <Link to='/dashboard/addReviews'>Add Review</Link>}</li>
                    <li>{admin && <Link to='/dashboard/addproduct'>Add Products</Link>}</li>
                    <li>{admin && <Link to='/dashboard/users'>All Users</Link>}</li>
                    <li>{admin && <Link to='/dashboard/manageParts'>Manage Parts</Link>}</li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;