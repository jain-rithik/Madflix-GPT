import React from 'react';

const OfflinePage = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-3 items-center justify-center bg-black text-white">
      <h1 className='text-3xl font-bold'>Oops! You're Offline</h1>
      <p className='text-xl'>Please check your internet connection and try again.</p>
    </div>
  );
};

export default OfflinePage;
