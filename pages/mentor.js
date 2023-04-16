import React, { useEffect, useRef } from 'react';
import Navbar from "../src/components/Navbar"
import Link from 'next/link';
import Footer from '../src/components/Footer';
import { useState } from 'react';
import 'aos/dist/aos.css'
import Aos from 'aos';



function mentor() {
  useEffect(()=>{
    Aos.init({duration:1500});
  },[]);


  return (
    <section className='mentor-section top'>
        <Navbar/>
        

        <div className='sections mentor flex items-center'>
          
        
        <div className='flex flex-col items-center w-[80%] mx-auto mt-10 boxes' data-aos="fade-down" >
          <div className='mt-20'>
          <h1 className='text-left text-4xl ml-3 font-4xl'>Mentorship</h1>
          <p className='mt-10 ml-3'>We understand that job interviews can be nerve-wracking, but with our mock interview services, you can gain the confidence and skills you need to succeed. We'll provide feedback on your responses, body language, and overall performance, helping you identify areas for improvement and fine-tune your interview skills.
Don't let your next interview catch you off guard. Sign up for our mock interview services today and land your dream job!
<br/>
      <span className="underline">If you would like to know more, please <Link className="text-blue-500" href="/Contact">contact us</Link></span>
</p>
</div>
          

        </div>
        </div>
        <div className='sections interview flex items-center' >

        
        <div className='flex w-[80%] mx-auto mt-10 boxes' data-aos="fade-down" >
        <div className='mt-20'>
          <h1 className='text-left text-4xl ml-3 font-4xl'>Resume Services
</h1>
          <p className='mt-10 ml-3'> Your resume is your first impression to potential employers, and it's crucial to make it stand out from the crowd. At our resume services, we understand the importance of a strong and professional resume.

 

Our team of expert writers will work with you to create a personalized, eye-catching resume that highlights your skills, achievements, and experiences. We understand that crafting a standout resume can be a daunting task, which is why we're here to help.

​

With our resume services, you can rest assured that your resume will make a lasting impression on potential employers, giving you the best chance of landing your dream job. Contact us today to get started!


</p>
</div>
          

        </div>
        </div>
        <div className='sections resume flex items-center' >

        
        <div className='flex w-[80%] mx-auto mt-10 boxes' data-aos="fade-down">
        <div className='mt-20'>
          <h1 className='text-left text-4xl ml-3 font-4xl'>Mock Interviews</h1>
          <p className='mt-10 ml-3'>
          We understand that job interviews can be nerve-wracking, but with our mock interview services, you can gain the confidence and skills you need to succeed. We'll provide feedback on your responses, body language, and overall performance, helping you identify areas for improvement and fine-tune your interview skills.

Don't let your next interview catch you off guard. Sign up for our mock interview services today and land your dream job!


</p>
</div>
          

        </div>
        </div>
        
        <Footer/>
    </section>
  );
}

export default mentor