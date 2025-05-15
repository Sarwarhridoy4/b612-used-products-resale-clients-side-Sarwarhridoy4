import React from "react";
import { useLoaderData } from "react-router";

const MyOrder = () => {
  const order = useLoaderData();
  console.log(order);
  return (
    <div>
      <p>My Order here</p>
    </div>
  );
};

export default MyOrder;
