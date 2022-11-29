import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryCard from "../../../CategoryCard/CategoryCard";

const Categories = () => {
  const [catrgories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://mobile-resell-bd-server-sarwarhridoy4.vercel.app/phonecategory"
      )
      .then((data) => {
        const categoriesdata = data.data;
        setCategories(categoriesdata);
      });
  }, []);
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='container px-6 py-8 mx-auto'>
        <h2 className='text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white'>
          Choose From Below Category
        </h2>

        <div className='grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-4/5 mx-auto'>
          {catrgories.map((category, i) => (
            <CategoryCard key={i} category={category}></CategoryCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
