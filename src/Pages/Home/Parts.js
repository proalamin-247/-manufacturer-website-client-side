import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PartCard from './PartCard';

const Parts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('https://polar-harbor-29275.herokuapp.com/part')
            .then(res => res.json())
            .then(data => setParts(data));
    }, [])

    return (
        <div className='container mt-12 my-12 mb-5'>
            <h1 className='text-3xl text-primary font-bold py-2'>All Parts</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    parts.slice(0, 6).map(part => <PartCard
                        key={part._id}
                        part={part}
                    ></PartCard>)
                }
            </div>
            <Link to='/allparts' className="btn btn-outline btn-primary mt-5 mr-2 mb-5">Show All Parts</Link>
        </div>
    );
};

export default Parts;