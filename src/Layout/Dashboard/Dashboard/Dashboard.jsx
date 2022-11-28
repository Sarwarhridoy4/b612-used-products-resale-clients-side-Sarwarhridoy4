import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext";
import Navbar from "../../../Shared/Navbar/Navbar";
import useAdmin from "../../../Hooks/useAdmin/useAdmin";
import useSeller from "../../../Hooks/useSeller/useSeller";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className='drawer drawer-mobile'>
        <input
          id='dashboard-drawer'
          type='checkbox'
          className='drawer-toggle'
        />
        <div className='drawer-content'>
          <Outlet></Outlet>
        </div>
        <div className='drawer-side'>
          <label htmlFor='dashboard-drawer' className='drawer-overlay'></label>
          <ul className='menu p-4 w-80 text-base-content'>
            <li>
              <Link to='/dashboard'>My Orders</Link>
            </li>
            
            {isAdmin && (
              <>
                <li>
                  <Link to='/dashboard/allbuyer'>All Buyer</Link>
                </li>
                <li>
                  <Link to='/dashboard/allseller'>All Seller</Link>
                </li>
              </>
            )}
            {isSeller && (
              <>
                <li>
              <Link to='/dashboard/add-a-product'>Add A Product</Link>
            </li>
            <li>
              <Link to='/dashboard/my-product'>My Products</Link>
            </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
