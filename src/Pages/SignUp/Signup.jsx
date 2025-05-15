import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";

import logo from "../../assets/Logo/logo.png";
import toast from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";
import SaveUser from "../../Hooks/SaveUser";
import AuthContext from "../../Context/Auth";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState("");
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  // const onSubmit = (data) => console.log(data);
  const handelSignUp = (data) => {
    setSignUPError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Created Successfully.");
        const userInfo = {
          displayName: data.username,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.username, data.email, data.Role);

            toast("inside update user");
          })
          .catch((err) => console.log(err));
      })

      .catch((error) => {
        console.log(error);
        setSignUPError(error.message);
      });
  };

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch("https://mobile-resell-bd-server-sarwarhridoy4.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/");
      });
  };

  //google signin
  const handelGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        SaveUser(user?.displayName, user?.email);
        console.log(user);
        toast(`authenticated as ${user?.displayName}`);
        navigate("/");
      })
      .catch((error) => {
        console.error(error.message);
        toast(error.message);
      });
  };

  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='container flex items-center justify-center min-h-screen px-6 mx-auto'>
        <form onSubmit={handleSubmit(handelSignUp)} className='w-full max-w-md'>
          <img
            className='object-cover w-24 h-24 mx-auto rounded-full'
            src={logo}
            alt='user avatar'
          />

          <div className='flex items-center justify-center mt-6'>
            <span className='w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white'>
              sign up
            </span>
          </div>

          <div className='relative flex items-center mt-8'>
            <span className='absolute'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 mx-3 text-gray-300 dark:text-gray-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                />
              </svg>
            </span>

            <input
              type='text'
              {...register("username", { required: true })}
              className='block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
              placeholder='Username'
              aria-invalid={errors.username ? "true" : "false"}
            />
            {errors.username && (
              <p className='text-red-600 block' role='alert'>
                {errors.username?.message}
              </p>
            )}
          </div>

          <div className='relative flex items-center mt-6'>
            <span className='absolute'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 mx-3 text-gray-300 dark:text-gray-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
            </span>

            <input
              type='email'
              {...register("email", { required: "Email Address is required" })}
              className='block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
              placeholder='Email address'
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p className='text-red-600 block' role='alert'>
                {errors.email?.message}
              </p>
            )}
          </div>

          <div className='relative flex items-center mt-4'>
            <span className='absolute'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 mx-3 text-gray-300 dark:text-gray-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                />
              </svg>
            </span>

            <input
              type='password'
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "at least 6 carecter" },
              })}
              className='block w-full px-10 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
              placeholder='Password'
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && (
              <p className='text-red-600' role='alert'>
                {errors.password?.message}
              </p>
            )}
          </div>

          <div className='relative flex items-center mt-4'>
            <select
              {...register("Role", { required: "Select a role" })}
              className='select select-bordered w-full'
              aria-invalid={errors.Role ? "true" : "false"}
            >
              <option disabled defaultValue>
                Registered as:
              </option>
              <option value='Buyer'>Buyer</option>
              <option value='Seller'>Seller</option>
            </select>
          </div>

          <div className='mt-6'>
            <button className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'>
              Sign Up
            </button>

            <button
              onClick={handelGoogleSignIn}
              className='w-full px-6 py-3 my-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'
            >
              Google
            </button>

            <div className='mt-6 text-center '>
              <Link
                to='/login'
                className='text-sm text-blue-500 hover:underline dark:text-blue-400'
              >
                Already have an account?
              </Link>
              {signUpError && toast.error(signUpError)}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
