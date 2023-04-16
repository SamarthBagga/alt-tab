import styles from '../styles/Home.module.css'
import Navbar from '../src/components/Navbar'
import React from 'react'
import Head from 'next/head'
import Footer from '../src/components/Footer'
import Link from 'next/link'
import SimpleImageSlider from "react-simple-image-slider";
import { useMediaQuery } from '@material-ui/core';
import data from "../data.json"

const images = [
  { url: "/peoples.jpg" },
  { url: "/people.jpg" },
  { url: "/mentor.webp" },
  
];












export default function Home() {
  const isSmallScreen = useMediaQuery('(max-width: 800px)');
  return (
   <section className='hero-section'>
    <Head>
    <meta charset="UTF-8"/>
  <meta name="description" content="Job Consulting in Australia"/>
  <meta name="keywords" content="Alt Tab Consulting"/>
  <meta name="keywords" content="Job Consulting in Australia"/>
  <meta name="author" content="Ashish Kakkan"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Alt Tab Consulting</title>
      
      </Head>   
      <Navbar/> 
      <div className='hero flex h-[80vh] mt-3 w-[65rem] mx-auto justify-between'>
      <div>
      {isSmallScreen
        ? <SimpleImageSlider width={320} height={150} images={images} showBullets={true} showNavs={true} />
        : <SimpleImageSlider width={700} height={400} images={images} showBullets={true} showNavs={true} />
      }
      </div>
     
      
      

    <div className='buttons flex flex-col w-[20rem] h-[25rem] '>
      <div className='flex flex-col h-[10rem]'>
      <Link href="/recruit"><div className=' text-white button h-[3.5rem] border-2 orange border-white text-2xl font-medium'><p className='ml-3'>We Recruit</p></div></Link>
      <Link href="/mentor"><div className=' text-white mt-3 button h-[3.5rem] green border-2 border-white text-2xl font-medium '><p className='ml-3'>We Mentor</p></div></Link>
      </div>
      <div className='box mt-3 h-[12rem] text-white font-medium'>
      {data.homePageText}
      </div>
    </div>
    </div>
  
    <Footer className="bottom-0"/>
 </section>

  );
}
