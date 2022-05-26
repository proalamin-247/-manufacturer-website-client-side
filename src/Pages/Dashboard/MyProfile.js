import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-4xl font-bold">Wellcome to user profile </h1>
                    <p class="py-6 text-3xl">I am {user.displayName}</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" value={user?.email} readOnly disabled class="input input-bordered" />
                        </div>
                        
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;