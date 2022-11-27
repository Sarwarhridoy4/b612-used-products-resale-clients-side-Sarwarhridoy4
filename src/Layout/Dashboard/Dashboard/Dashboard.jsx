import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../Shared/Navbar/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='drawer'>
      <input id='my-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        {/* <!-- Page content here --> */}
        <label htmlFor='my-drawer' className='btn btn-primary drawer-button'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
      </div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer' className='drawer-overlay'></label>
        <ul className='menu p-4 w-80 bg-base-100 text-base-content'>
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link>My Order</Link>
          </li>
          <li>
            <Link>Add A Product</Link>
          </li>
          <li>
            <Link>All Buyer</Link>
          </li>
          <li>
            <Link>All Seller</Link>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
