import React from 'react';
import data from "../../data.json"

function Footer() {
  return (
    <footer className="main-footer bg-black text-white p-4 h-[10rem] text-center">
     <div className='w-[90%] flex flex-row mx-auto footerr'>
      <div className='w-1/4 flex flex-col text-left'>
        <h1 className='text-[18px] font-medium'>{data.footerTitle1}</h1>
        <p className='text-[12px] font-medium'>{data.footerText12}</p>
        <p className='text-[12px] font-medium'>San Francisco, CA  94158</p>
      </div>
      <div className='w-1/4 flex flex-col text-left'>
        <h1 className='text-[18px] font-medium'>{data.footerTitle2}</h1>
        <p className='text-[12px] font-medium'>{data.footertext21}</p>
        <p className='text-[12px] font-medium'>{data.footertext22}</p>
      </div>
      <div className='w-1/4 flex flex-col text-left'>
        <h1 className='text-[18px] font-medium'>{data.footerTitle3}</h1>
        <p className='text-[12px] font-medium'>{data.footerText31}</p>
      </div>
      <div className='w-1/4 flex flex-col text-left'>
        <p className='text-[12px] font-medium'>{data.footerTitle4}</p>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
