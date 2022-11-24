import React from "react";
import Bannerimg from "../../../assets/Banner/banner.png";
const Banner = () => {
  return (
    <div className='container px-6 py-16 mx-auto'>
      <div className='items-center lg:flex gap-5'>
        <div className='flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2'>
          <img
            className='w-full h-full lg:max-w-full'
            src={Bannerimg}
            alt='Catalogue'
          />
        </div>
        <div className='w-full lg:w-1/2 mt-5'>
          <div className='lg:max-w-lg'>
            <h1 className='text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl'>
              Best Place To Choose Used Mobile Phones To Buy Sell Replace
            </h1>

            <p className='mt-2 text-gray-600 dark:text-gray-400'>
              We Provide You the oppourtunity to make mony from your Used
              Phones. All the Buyer and seller are varified here. We Provide the
              authenticity of user and 7 days return Policy.
            </p>

            <button className='w-full tracking-wider px-6 py-2.5 mt-6 text-sm text-white uppercase transition-colors duration-300 transform bg-green-600 rounded-md lg:w-auto hover:bg-green-800 focus:outline-none focus:bg-blue-500'>
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
