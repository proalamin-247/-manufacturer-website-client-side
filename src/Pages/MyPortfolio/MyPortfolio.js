import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='container'>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/CvyLtF4/me.jpg" class="max-w-md rounded-lg shadow-2xl" />
                    <div className='text-left'>
                        <h1 class="text-4xl font-bold">MD AL AMIN</h1>
                        <p className='text-2xl'>Front-Eeb Developer</p>
                        <div className='py-3'>
                            <p >E-mail :  pro.alamin247@gmail.com </p>
                            <p >Linkedin : <a href="linkedin.com/in/pro-alamin247/">linkedin.com/in/pro-alamin247/</a></p>
                        </div>
                        <div className='py-3'>
                            <p >Diploma in Engineering (Electrical)</p>
                            <p >Rangpur Polytechnic Institute, Rangpur</p>
                        </div>
                        <div>
                            <p className='text-xl'>Recently Completed Project</p>
                            <div className='py-1'>
                                <p>❖ Panda-Commerce    | 🔗 <a href="https://pro-panda-commerce.netlify.app/">https://pro-panda-commerce.netlify.app/</a></p>
                                <p>❖ Tour With Alamin  | 🔗 <a href="https://tour-with-alamin.web.app/">https://tour-with-alamin.web.app/</a></p>
                                <p>❖ Convention Cente  | 🔗 <a href=" https://pro-alamin-convention-center.netlify.app/"> https://pro-alamin-convention-center.netlify.app/</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;