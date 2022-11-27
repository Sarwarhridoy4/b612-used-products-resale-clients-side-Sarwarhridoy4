import React, { useContext} from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";


const BookingModal = () => {
  const { productdata, user } = useContext(AuthContext);
  const navigate = useNavigate();
  //event handler
  const handelBooking = event => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const email = form.email.value;
    const itemname = form.itemname.value;
    const price = form.price.value;
    const contact = form.contact.value;
    const location = form.location.value;

    const bookingdata = {
      username,
      email,
      itemname,
      price,
      contact,
      location
    }
    // console.log(bookingdata);
    event.target.reset();
    //posting to server
    fetch('https://mobile-resell-bd-server.vercel.app/bookings', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(bookingdata)
    })
    .then(res => res.json())
    .then(data =>{
      navigate('/')
      toast.success('Successfully Booked!')
    })
    
    
  }
  

  console.log(productdata);
  
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type='checkbox' id='booking-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box'>
          <div className="image w-24 mx-auto my-5">
            <img src={productdata?.img} alt={productdata?.name} />
          </div>

          <form onSubmit={handelBooking}>
            <div className="grid grid-cols-1 gap-3">
              {/* username */}
              <input type="text"
                name="username"
                placeholder="Username"
                className="input input-bordered input-primary w-full max-w-xs mx-auto block"
                required
                defaultValue={user?.displayName}
                disabled
              />
              {/* Email */}
              <input type="email" name="email" placeholder="Email" className="input input-bordered input-primary w-full max-w-xs mx-auto block"
              required
              defaultValue={user?.email}
              disabled
              />
              {/* Item Name */}
              <input type="text" name="itemname" placeholder="Itemname" className="input input-bordered input-primary w-full max-w-xs mx-auto block"
              required
              defaultValue={productdata?.name}
              disabled/>
              {/* Price */}
              <input type="text" name="price" placeholder="Price" className="input input-bordered input-primary w-full max-w-xs mx-auto block"
              required
              defaultValue={productdata?.resalePrice}
              disabled
              />
              {/* Contact */}
              <input type="text" name="contact" placeholder="Contact" className="input input-bordered input-primary w-full max-w-xs mx-auto block"
              required
              />
              {/* Meeting Location */}
              <input type="text" name="location" placeholder="Location" className="input input-bordered input-primary w-full max-w-xs mx-auto block"
              required
              />
              <input className="btn btn-outline btn-primary w-full max-w-xs mx-auto block" type="submit"/>
            </div>
          </form>
          <div className='modal-action'>
            <label htmlFor='booking-modal' className='btn'>
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
