import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='grid justify-items-center mt-5'>
            <img className='' src="https://i.ibb.co/pdJ63kG/404.webp" alt="" />
            <br />
            <Link to='/home' class="btn btn-outline btn-primary">Back TO Home</Link>
        </div>
    );
};

export default NotFound;