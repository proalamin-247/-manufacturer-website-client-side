import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const url = `https://polar-harbor-29275.herokuapp.com/addProduct`;
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
        toast.success('Product added successfull');
    }
    return (
        <div className='container mt-3'>
            <h2 className="text-center text-2xl font-bold">Add New Products</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" placeholder="Product Name" className="input input-bordered" required {...register("name")} />
                </div>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Minimum Order</span>
                    </label>
                    <input type="number" placeholder="Minimum Order" className="input input-bordered" required {...register("miniumOrder")} />
                </div>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input type="number" placeholder="Available Quantity" className="input input-bordered" required {...register("availableQuantity")} />
                </div>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Per unit Price</span>
                    </label>
                    <input type="number" placeholder="Per unit Price" className="input input-bordered" required {...register("perUnitPrice")} />
                </div>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Product Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered" placeholder="Product Description" required {...register("description")}></textarea>
                </div>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="text" placeholder="img link ( 1600 X 900 pixels)" className="input input-bordered " {...register("img")} />
                </div>
                <input className='btn  mt-5' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddProduct;