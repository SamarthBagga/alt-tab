import React from 'react';

function Footer() {
  return (
    <footer className="main-footer bg-black text-white p-4 h-[10rem] text-center">
     <div className='w-[90%] flex flex-row mx-auto footerr'>
      <div className='w-1/4 flex flex-col text-left'>
        <h1 className='text-[18px] font-medium'>Visit</h1>
        <p className='text-[12px] font-medium'>500 Terry Francois Street</p>
        <p className='text-[12px] font-medium'>San Francisco, CA  94158</p>
      </div>
      <div className='w-1/4 flex flex-col text-left'>
        <h1 className='text-[18px] font-medium'>Call</h1>
        <p className='text-[12px] font-medium'>T:123-456-7890</p>
        <p className='text-[12px] font-medium'>F: 123-456-7890</p>
      </div>
      <div className='w-1/4 flex flex-col text-left'>
        <h1 className='text-[18px] font-medium'>Contact</h1>
        <p className='text-[12px] font-medium'>info@mysite.com</p>
      </div>
      <div className='w-1/4 flex flex-col text-left'>
        <p className='text-[12px] font-medium'>© 2023 by Ashish Kakkan</p>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
