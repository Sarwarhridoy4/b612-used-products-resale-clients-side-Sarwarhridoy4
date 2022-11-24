import React from 'react';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import NewsLetter from './NewsLetter/NewsLetter';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;