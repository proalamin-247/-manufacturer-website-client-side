import React from 'react';
import Footer from '../Sheard/Footer';
import Banner from './Banner';
import Qna from './Qna';
import BusinessSummary from './BusinessSummary';
import Parts from './Parts';

import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Qna></Qna>
            <Footer></Footer>
        </div>
    );
};

export default Home;