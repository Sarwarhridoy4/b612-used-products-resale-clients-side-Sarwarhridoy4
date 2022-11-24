import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const { title, image, des } = blog;
  const short = des.slice(0, 400) + "...";
  return (
    <div>
      <img
        className='relative z-10 object-cover w-full rounded-md h-96'
        src={image}
        alt=''
      />

      <div className='relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900'>
        <Link className='font-semibold text-gray-800 hover:underline dark:text-white md:text-xl'>
          {title}
        </Link>

        <p className='mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm'>
          {short}
        </p>

        <p className='mt-3 text-sm text-blue-500'>Read More..</p>
      </div>
    </div>
  );
};

export default Blog;
