import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";

import { GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";
import AuthContext from "../../Context/Auth";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const onSubmit = data => console.log(data);
  const { signIn, googleSignIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const [loginError, setloginError] = useState("");
  const locaton = useLocation();
  const navigate = useNavigate();
  const from = locaton.state?.from?.pathname || "/";

  const handelLogIn = (data) => {
    console.log(data);
    setloginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast.success("User login Successfully!");
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setloginError(error.message);
      });
  };

  //google signin
  const handelGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
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
        <form onSubmit={handleSubmit(handelLogIn)} className='w-full max-w-md'>
          <h1 className='text-3xl text-center font-semibold text-gray-800 capitalize dark:text-white'>
            sign In
          </h1>

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
                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
            </span>

            <input
              type='email'
              {...register("email", { required: "Provide Email" })}
              className='block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
              placeholder='Email address'
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p className='text-red-500 block' role='alert'>
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
              <p className='text-red-500 block' role='alert'>
                {errors.password?.message}
              </p>
            )}
          </div>

          <div className='mt-6'>
            <button className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'>
              Sign in
            </button>

            <p className='mt-4 text-center text-gray-600 dark:text-gray-400'>
              or sign in with
            </p>

            <span className='flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600'>
              <svg className='w-6 h-6 mx-2' viewBox='0 0 40 40'>
                <path
                  d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                  fill='#FFC107'
                />
                <path
                  d='M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z'
                  fill='#FF3D00'
                />
                <path
                  d='M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z'
                  fill='#4CAF50'
                />
                <path
                  d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                  fill='#1976D2'
                />
              </svg>

              <span onClick={handelGoogleSignIn} className='mx-2'>
                Sign in with Google
              </span>
            </span>
            <div>{loginError && toast.error(loginError)}</div>
            <div className='mt-6 text-center '>
              <Link
                to='/signup'
                className='text-sm text-blue-500 hover:underline dark:text-blue-400'
              >
                Don’t have an account yet? Sign up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
