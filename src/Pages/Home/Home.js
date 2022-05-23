import React from 'react';
import Footer from '../Sheard/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <BusinessSummary></BusinessSummary> */}
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;