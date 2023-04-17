import React, { useRef } from 'react';
import Navbar from '../src/components/Navbar';
import Link from 'next/link';
import Footer from '../src/components/Footer';
import Image from 'next/image';
import data from "../data.json"
function mentor() {
  return (
    <section>
        <Navbar/>
        <div className='about h-[80vh] w-[70vw] mx-auto flex flex-col'>
            <p className='mt-8 text-4xl font-medium'>{data.aboutTitle}</p>
            <p className='mt-8'>{data.aboutText}<br/><span className="underline">If you would like to know more, please <Link className="text-blue-500" href="/Contact">contact us</Link></span></p>
            {/* <div className='names flex w-[80%] mx-auto mt-10'>
                <div className='w-[20rem]'><div className='name flex flex-row items-center'><Image src="/logo.jpeg" height={500} width={150}/><div><h1 className='ml-8'>Ashish Kakkan</h1></div></div><div><p>I am Ashish Kakkan</p></div></div>
                <div className='w-[20rem] name2 ml-10 '><div className='name flex flex-row items-center'><Image src="/logo.jpeg" height={500} width={150}/><div><h1 className='ml-8'>Ashish Kakkan</h1></div></div><div><p>I am Ashish Kakkan</p></div></div>
            </div> */}
            <Image className='mx-auto' src="/hero-image.jpg" width={400} height={100}/>



        
    
    </div>
    <Footer className="bottom-0 mt-10"/>
    </section>
  );
}

export default mentor