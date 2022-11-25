import React from 'react';

const DetalCard = ({ data }) => {
    console.log(data);
    return (
        <div class="p-5 m-5 mx-auto max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <img class="object-cover w-full h-64" src={data?.img} alt="Article"/>

    <div class="p-6">
        <div>
            <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Seller: {data?.sellerName}</span>
            <h2 class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">{data?.name}</h2>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Post Date:{data?.timePosted}</p>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Original Price: {data?.originalPrice}</p>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Resell Price: {data?.resalePrice}</p>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Used For: {data?.usedYear} Year</p>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Location: {data?.location}</p>
                    <button className="btn btn-sm btn-outline btn-success block px-5 mx-auto">Book Now</button>
        </div>
    </div>
</div>
    );
};

export default DetalCard;