import React from 'react';
import { useForm } from 'react-hook-form';


const AddReviews = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        const url = `http://localhost:5000/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {

            })
        reset();
    };

    return (
        <div className='flex justify-center items-center'>
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Add Your Honorable Review</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" {...register("name")} />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">City</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" {...register("city")} />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Review</span>
                            </label>
                            <textarea className="textarea textarea-bordered" placeholder="Bio" {...register("review")}></textarea>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Ratting </span>
                            </label>
                            <input type="number" placeholder="Your ratting Out of 10" className="input input-bordered w-full max-w-xs" {...register("ratting")} />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" placeholder="img link (90 X 90 pixels)" className="input input-bordered w-full max-w-xs" {...register("img")} />
                        </div>
                        <input className='btn w-full max-w-xs mt-5' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReviews;