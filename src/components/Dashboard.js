import React, {useState} from 'react';

const Dashboard = () => {

  return (

    <main>
      <div className='p-8'>
        <div className='max-w-7xl mx-auto'>
          <span className='text-2xl font-semibold text-gray-900'>داشبورد</span>
        </div>
        <div className='max-w-7xl mx-auto py-4'>
          <div className='border-4 border-dashed border-gray-700 h-96 rounded-lg'></div>
        </div>
      </div>
    </main>

  );
};

export default Dashboard;