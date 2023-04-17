import React from 'react';
import Navbar from "../src/components/Navbar"
import Link from 'next/link';
import Footer from '../src/components/Footer';
import 'aos/dist/aos.css'
import Aos from 'aos';
import data from "../data.json"
import { useEffect } from 'react';




function mentor() {
  useEffect(()=>{
    Aos.init({duration:1500});
  },[]);


  return (
    <section className='mentor-section top'>
        <Navbar/>
        

        <div className='sections mentor flex items-center'>
  <div className='background-image-wrapper'>
  </div>
  <div className='flex flex-col items-center w-[80%] mx-auto mt-10 boxes' data-aos="fade-down">
    <div className='mt-20'>
      <h1 className='text-left text-4xl ml-3 font-4xl'>{data.mentorTitle1}</h1>
      <p className='mt-10 ml-3'>{data.mentorText1}<br/><span className="underline">If you would like to know more, please <Link className="text-blue-500" href="/Contact">contact us</Link></span></p>
    </div>
  </div>
</div>
        <div className='sections interview flex items-center' >

        
        <div className='flex w-[80%] mx-auto mt-10 boxes' data-aos="fade-down" >
        <div className='mt-20'>
          <p className='text-left text-4xl ml-3 font-4xl'>{data.mentorTitle2}
</p>
          <p className='mt-10 ml-3'>{data.mentorText2}</p>
</div>
          

        </div>
        </div>
        <div className='sections resume flex items-center' >

        
        <div className='flex w-[80%] mx-auto mt-10 boxes' data-aos="fade-down">
        <div className='mt-20'>
          <p className='text-left text-4xl ml-3 font-4xl'>{data.mentorTitle3}</p>
          <p className='mt-10 ml-3'>{data.mentorText3}</p>
</div>
          

        </div>
        </div>
        
        <Footer/>
    </section>
  );
}

export default mentor