import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo/logo.png";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
  //menu-items goes here//
  const { user, logOut } = useContext(AuthContext);

  const handelLogout = () => {
    logOut()
      .then(() => {
        toast.success("User Logged Out");
      })
      .catch((error) => console.log(error));
  };
  const menuItems = (
    <React.Fragment>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        {user ? (
          <button onClick={handelLogout} className='btn btn-success'>
            LogOut
          </button>
        ) : (
          <Link to='/Login'>LogIn</Link>
        )}
      </li>
      <li>
        <Link to='/dashboard'>DashBoard</Link>
      </li>
      <li>
        <Link to='/blogs'>Blogs</Link>
      </li>
    </React.Fragment>
  );

  return (
    <div className='navbar bg-green-300'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            {menuItems}
          </ul>
        </div>
        <img src={logo} alt='logo' className='w-16' />
        <Link to='/' className='btn btn-ghost normal-case text-xl'>
          UsedMobileDeal
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal p-0'>{menuItems}</ul>
      </div>
      <div className='navbar-end'>
        <div className='avatar online'>
          <div className='w-12 rounded-full'>
            <img src='https://placeimg.com/192/192/people' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
