import React from "react";

const ComingSoon = () => {
    
  return (
    <div
      class='w-full h-screen'
      style={{
        backgroundImage: `url("https://vojislavd.com/ta-template-demo/assets/img/coming-soon.jpg")`,
      }}
    >
      <div class='w-full h-screen bg-black bg-opacity-70'>
        <div class='w-full h-full flex flex-col items-start justify-between container mx-auto py-8 px-8 lg:px-4 xl:px-0'>
          <div class='flex-1 flex flex-col items-start justify-center'>
            <h1 class='text-6xl lg:text-7xl xl:text-8xl text-gray-200 tracking-wider font-bold font-serif mt-12 text-center md:text-left'>
              We Are <span class='text-yellow-300'>Coming</span> Soon
            </h1>

            <div class='mt-12 flex flex-col items-center ml-2'>
              <p class='text-gray-300 uppercase text-sm'>
                Time left until lunching
              </p>
              <div
                class='flex items-center justify-center space-x-4 mt-4'
                x-data='timer(new Date().setDate(new Date().getDate() + 1))'
                x-init='init();'
              >
                <div class='flex flex-col items-center px-4'>
                  <span
                    x-text='time().days'
                    class='text-4xl lg:text-5xl text-gray-200'
                  >
                    00
                  </span>
                  <span class='text-gray-400 mt-2'>Days</span>
                </div>
                <span class='w-[1px] h-24 bg-gray-400'></span>
                <div class='flex flex-col items-center px-4'>
                  <span
                    x-text='time().hours'
                    class='text-4xl lg:text-5xl text-gray-200'
                  >
                    23
                  </span>
                  <span class='text-gray-400 mt-2'>Hours</span>
                </div>
                <span class='w-[1px] h-24 bg-gray-400'></span>
                <div class='flex flex-col items-center px-4'>
                  <span
                    x-text='time().minutes'
                    class='text-4xl lg:text-5xl text-gray-200'
                  >
                    59
                  </span>
                  <span class='text-gray-400 mt-2'>Minutes</span>
                </div>
                <span class='w-[1px] h-24 bg-gray-400'></span>
                <div class='flex flex-col items-center px-4'>
                  <span
                    x-text='time().seconds'
                    class='text-4xl lg:text-5xl text-gray-200'
                  >
                    28
                  </span>
                  <span class='text-gray-400 mt-2'>Seconds</span>
                </div>
              </div>
            </div>
            <div class='flex flex-col items-center space-y-4 mt-16 px-6'>
              <p class='text-gray-300 uppercase text-sm'>
                Notify me when it's ready
              </p>
              <form class='w-full flex items-center'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  class='w-72 p-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded-tl rounded-bl text-sm'
                  placeholder='Email'
                  autocomplete='off'
                />
                <button class='bg-blue-600 py-2 px-6 text-gray-100 border border-blue-600 rounded-tr rounded-br text-sm'>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div class='w-full flex items-center justify-center md:justify-end'>
            <ul class='flex items-center space-x-4'>
              <li>
                              <a href='/' title='Facebook'>
                              <svg fill="#ffffff" width="64px" height="64px" viewBox="-15.36 -15.36 62.72 62.72" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>facebook</title> <path d="M30.996 16.091c-0.001-8.281-6.714-14.994-14.996-14.994s-14.996 6.714-14.996 14.996c0 7.455 5.44 13.639 12.566 14.8l0.086 0.012v-10.478h-3.808v-4.336h3.808v-3.302c-0.019-0.167-0.029-0.361-0.029-0.557 0-2.923 2.37-5.293 5.293-5.293 0.141 0 0.281 0.006 0.42 0.016l-0.018-0.001c1.199 0.017 2.359 0.123 3.491 0.312l-0.134-0.019v3.69h-1.892c-0.086-0.012-0.185-0.019-0.285-0.019-1.197 0-2.168 0.97-2.168 2.168 0 0.068 0.003 0.135 0.009 0.202l-0.001-0.009v2.812h4.159l-0.665 4.336h-3.494v10.478c7.213-1.174 12.653-7.359 12.654-14.814v-0z"></path> </g></svg>
                </a>
              </li>
              <li>
                <a href='/' title='Twitter'>
                  <svg
                    class='w-8 h-8 hover:scale-110 transition duration-300'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 333333 333333'
                    shape-rendering='geometricPrecision'
                    text-rendering='geometricPrecision'
                    image-rendering='optimizeQuality'
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                  >
                    <path
                      d='M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm90493 110539c-6654 2976-13822 4953-21307 5835 7669-4593 13533-11870 16333-20535-7168 4239-15133 7348-23574 9011-6787-7211-16426-11694-27105-11694-20504 0-37104 16610-37104 37101 0 2893 320 5722 949 8450-30852-1564-58204-16333-76513-38806-3285 5666-5022 12109-5022 18661v4c0 12866 6532 24246 16500 30882-6083-180-11804-1876-16828-4626v464c0 17993 12789 33007 29783 36400-3113 845-6400 1313-9786 1313-2398 0-4709-247-7007-665 4746 14736 18448 25478 34673 25791-12722 9967-28700 15902-46120 15902-3006 0-5935-184-8860-534 16466 10565 35972 16684 56928 16684 68271 0 105636-56577 105636-105632 0-1630-36-3209-104-4806 7251-5187 13538-11733 18514-19185l17-17-3 2z'
                      fill='#e2e8f0'
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href='/' title='LinkedIn'>
                  <svg
                    class='w-8 h-8 hover:scale-110 transition duration-300'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 333333 333333'
                    shape-rendering='geometricPrecision'
                    text-rendering='geometricPrecision'
                    image-rendering='optimizeQuality'
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                  >
                    <path
                      d='M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-18220 138885h28897v14814l418 1c4024-7220 13865-14814 28538-14814 30514-1 36157 18989 36157 43691v50320l-30136 1v-44607c0-10634-221-24322-15670-24322-15691 0-18096 11575-18096 23548v45382h-30109v-94013zm-20892-26114c0 8650-7020 15670-15670 15670s-15672-7020-15672-15670 7022-15670 15672-15670 15670 7020 15670 15670zm-31342 26114h31342v94013H96213v-94013z'
                      fill='#e2e8f0'
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
