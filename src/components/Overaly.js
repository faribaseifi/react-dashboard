import React from 'react';

const Overaly = ({menuHandler}) => {
  return (
    <div onClick={menuHandler} className='w-full h-full fixed top-0 right-0 bg-gray-900 bg-opacity-50'></div>

  );
};

export default Overaly;