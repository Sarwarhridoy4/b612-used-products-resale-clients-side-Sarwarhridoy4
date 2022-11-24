import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryCard from "../../../CategoryCard/CategoryCard";

const Categories = () => {
  const [catrgories, setCategories] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/phonecategory')
      .then(data => {
        const categoriesdata = data.data;
        setCategories(categoriesdata)
        


    })
  },[])
  return (
    <section class='bg-white dark:bg-gray-900'>
      <div class='container px-6 py-8 mx-auto'>
        <h2 class='text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white'>
          Our Team
        </h2>
        
        <div class='grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-4/5 mx-auto'>
          {
            catrgories.map((category,i)=><CategoryCard key={i} category={category}></CategoryCard>)
          }
        </div>
      </div>
    </section>
  );
};

export default Categories;
