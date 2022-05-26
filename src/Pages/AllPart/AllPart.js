import React, { useEffect, useState } from 'react';
import PartCard from '../Home/PartCard';

const AllPart = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/part')
            .then(res => res.json())
            .then(data => setParts(data));
    }, [])

    return (
        <div className='container mt-12 my-12 mb-5'>
            <h1 className='text-3xl text-primary font-bold py-2'>All Parts</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    parts.map(part => <PartCard
                        key={part._id}
                        part={part}
                    ></PartCard>)
                }
            </div>
        </div>
    );
};

export default AllPart;