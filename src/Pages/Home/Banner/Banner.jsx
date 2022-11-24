import React from 'react';
import Bannerimg from '../../../assets/Banner/banner.png';
const Banner = () => {
    return (
        <div class="container px-6 py-16 mx-auto">
            <div class="items-center lg:flex gap-5">
            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img class="w-full h-full lg:max-w-full" src={Bannerimg} alt="Catalogue"/>
            </div>
            <div class="w-full lg:w-1/2 mt-5">
                <div class="lg:max-w-lg">
                    <h1 class="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">Best Place To Choose Used Mobile Phones To Buy Sell Replace</h1>
                    
                    <p class="mt-2 text-gray-600 dark:text-gray-400">We Provide You the oppourtunity to make mony from your Used Phones. All the Buyer and seller are varified here. We Provide the authenticity of user and 7 days return Policy.</p>
                    
                    <button class="w-full tracking-wider px-6 py-2.5 mt-6 text-sm text-white uppercase transition-colors duration-300 transform bg-green-600 rounded-md lg:w-auto hover:bg-green-800 focus:outline-none focus:bg-blue-500">Shop Now</button>
                </div>
            </div>

            
        </div>
    </div>
    );
};

export default Banner;