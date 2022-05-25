import React from 'react';

const SendMessage = () => {
    return (
            <div className="my-5 container">
                <h3 className="text-3xl">Have a <span className='text-primary'>question</span>?</h3>
                <form className="p-3">
                    <div className="mb-3">
                        <input className="form-control" id="name" type="text" placeholder="Name" />
                    </div>
                    <div className="mb-3">
                        <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" />
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" id="message" type="text" placeholder="Write Your Question" style={{ height: '10rem' }}></textarea>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary btn-lg" type="submit">Submit</button>
                    </div>
                </form>
            </div>
    );
};

export default SendMessage;