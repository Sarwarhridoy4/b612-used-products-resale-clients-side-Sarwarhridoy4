import React from 'react';
import Contact from '../../Components/Contact/Contact ';
import OurClients from '../../Components/OurClients/OurClients';
import Promo from '../../Components/Promo/Promo';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import NewsLetter from './NewsLetter/NewsLetter';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <OurClients></OurClients>
            <Promo></Promo>
            <Contact></Contact>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;