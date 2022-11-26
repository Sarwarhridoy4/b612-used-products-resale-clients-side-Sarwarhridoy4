import React from "react";
import { Link } from "react-router-dom";


const CategoryCard = ({ category }) => {
  const { name, image, category_id } = category;
  return (
    <div className='w-full max-w-xs text-center'>
      <img
        className='object-cover object-center w-full h-48 mx-auto rounded-lg'
        src={image}
        alt='avatar'
      />

      <div className='mt-2'>
        <h3 className='text-lg font-medium text-gray-700 dark:text-gray-200'>
          {name}
        </h3>
        <span className='mt-1 font-medium text-gray-600 dark:text-gray-300'>
          <Link to={`/category/${category_id}`}><button className='btn btn-sm btn-success'>Expolre</button></Link>
        </span>
      </div>
      
    </div>
  );
};

export default CategoryCard;
