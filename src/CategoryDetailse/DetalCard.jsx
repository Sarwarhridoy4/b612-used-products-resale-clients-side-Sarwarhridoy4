import { useContext } from "react";
import AuthContext from "../Context/Auth";


const DetalCard = ({ data }) => {
  const { setProductdata } = useContext(AuthContext);

  return (
    <div className='p-5 m-5 mx-auto max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800'>
      <img className='object-cover w-full h-64' src={data?.img} alt='Article' />

      <div className='p-6'>
        <div>
          <span className='text-xs font-medium text-blue-600 uppercase dark:text-blue-400'>
            Seller: {data?.sellerName}
          </span>
          <h2
            className='block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline'
            tabIndex='0'
            role='link'
          >
            {data?.name}
          </h2>
          <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
            Post Date:{data?.timePosted}
          </p>
          <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
            Original Price: {data?.originalPrice}
          </p>
          <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
            Resell Price: {data?.resalePrice}
          </p>
          <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
            Used For: {data?.usedYear} Year
          </p>
          <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
            Location: {data?.location}
          </p>
          <label
            onClick={() => {
              setProductdata(data);
            }}
            htmlFor='booking-modal'
            className='btn btn-sm btn-outline btn-success block px-5 mx-auto'
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default DetalCard;
