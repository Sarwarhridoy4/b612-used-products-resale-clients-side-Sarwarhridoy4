import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const BookingModal = () => {
  const { productdata } = useContext(AuthContext)
  console.log(productdata);
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type='checkbox' id='booking-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>
            Congratulations random Internet user!
          </h3>
          <p className='py-4'>
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className='modal-action'>
            <label htmlFor='booking-modal' className='btn'>
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
