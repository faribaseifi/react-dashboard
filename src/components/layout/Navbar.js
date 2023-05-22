import React, { useState } from 'react';

const Navbar = ({menuHandler}) => {

  return (
    <div className='flex justify-between items-center shadow h-16 px-4'>
      <button
        onClick={menuHandler}
        className='text-gray-500 ml-4 p-2 focus:ring-2 focus:ring-indigo-200 md:hidden'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
        </svg>

      </button>
      <div className='w-full'>
        <form className='flex items-center'>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
            </svg>
          </div>
          <input
            className='w-full h-14 pr-4 outline-none'
            type='text'
            placeholder='جستجو'/>
        </form>
      </div>
      <div className='flex items-center'>
        <div className='pl-4'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className='w-6 h-6 text-gray-500'
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
          </svg>

        </div>
        <div className='flex-shrink-0 '>
          <img
            className='w-12 h-12 rounded-full'
            src="https://lh3.googleusercontent.com/a/AGNmyxavJT293usIKgMhA9PQS228wRo-fCXLvL9YDkeZvg=s288-c-no"/>
        </div>
      </div>
    </div>

  );
};

export default Navbar;