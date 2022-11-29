import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get("https://mobile-resell-bd-server-sarwarhridoy4.vercel.app/blogs")
      .then((data) => {
        const blogsdata = data.data;
        setBlogs(blogsdata);
      });
  }, []);

  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='container px-6 py-10 mx-auto'>
        <div className='text-center'>
          <h1 className='text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white'>
            From the blog
          </h1>

          <p className='max-w-lg mx-auto mt-4 text-gray-500'>
            Here is Our most popular Blogs.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2'>
          {blogs.map((blog, i) => (
            <Blog key={i} blog={blog}></Blog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
