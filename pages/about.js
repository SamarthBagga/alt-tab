import React, { useRef } from 'react';
import Navbar from '../src/components/Navbar';
import Link from 'next/link';
import Footer from '../src/components/Footer';
function mentor() {
  return (
    <section>
        <Navbar/>
        <div className='h-[80vh] bg-blue-500 w-[60rem] mx-auto flex flex-col'>
            <h1 className='mt-8'>About</h1>
            <p>Alt Tab Consulting is a consulting firm based in Alberta, Australia. We are committed to mentoring and recruiting new immigrants who aspire to find well-paying jobs and settle in Australia. Our team of experts provides tailored guidance and support to help our clients navigate the Australian job market and overcome any challenges that may arise during the recruitment process. With our extensive knowledge and experience, we help our clients realize their career goals and establish themselves in their new home. Join us on this exciting journey and let us help you build a successful career in Australia.
            </p>
            <div className='flex'>
                <div><div>hello</div><p>I am Ashish Kakkan</p></div>
                <div><div>hello</div><p>I am Divya Kakkan</p></div>
            </div>





        </div>
    <Footer className="bottom-0"/>
    </section>
  );
}

export default mentor