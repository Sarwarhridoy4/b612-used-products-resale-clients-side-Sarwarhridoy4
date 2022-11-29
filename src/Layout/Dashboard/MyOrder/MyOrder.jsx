import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyOrder = () => {
    const order = useLoaderData()
    console.log(order);
    return (
        <div>
            <p>My Order here</p>
        </div>
    );
};

export default MyOrder;