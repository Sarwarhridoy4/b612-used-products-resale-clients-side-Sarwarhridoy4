import React from 'react';
import Promo from '../../Components/Promo/Promo';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import NewsLetter from './NewsLetter/NewsLetter';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Promo></Promo>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;