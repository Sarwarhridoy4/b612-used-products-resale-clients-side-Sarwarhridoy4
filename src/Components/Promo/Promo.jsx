import React from "react";
import { Link } from "react-router";

const Promo = () => {
  return (
    <section className='py-24 flex items-center min-h-screen justify-center bg-white my-10'>
      <div className='mx-auto max-w-[43rem]'>
        <div className='text-center'>
          <p className='text-lg font-medium leading-8 text-indigo-600/95'>
            Introducing our new Platform
          </p>
          <h1 className='mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black'>
            Varify The Ownership and Get the 100% authentic product from us.
          </h1>
          <p className='mt-3 text-lg leading-relaxed text-slate-400'>
            Specify helps you unify your brand identity by collecting, storing
            and distributing design tokens and assets — automatically.
          </p>
        </div>

        <div className='mt-6 flex items-center justify-center gap-4'>
          <Link
            to='/coming-soon'
            className='transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700'
          >
            Get started for free
          </Link>
          <Link
            to='/coming-soon'
            className='transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50'
          >
            {" "}
            Request a demo{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Promo;
