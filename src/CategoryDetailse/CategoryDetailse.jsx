import React from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../Components/BookingModal/BookingModal";
import DetalCard from "./DetalCard";

const CategoryDetailse = () => {
  const categorydata = useLoaderData();
  // console.log(categorydata);
  
  return (
    <div className="md:w-1/2 mx-auto grid grid-cols-1 lg:grid-cols-2">
      {categorydata.map((data, i) => (
        <DetalCard key={i} data={data} ></DetalCard>
      ))}
      <BookingModal></BookingModal>
    </div>
  );
};

export default CategoryDetailse;
