import styles from '../styles/Home.module.css'
import Navbar from '../src/components/Navbar'
import React from 'react'
import Head from 'next/head'
import Footer from '../src/components/Footer'
import Link from 'next/link'
import SimpleImageSlider from "react-simple-image-slider";
import { useMediaQuery } from '@material-ui/core';

const images = [
  { url: "/resume.webp" },
  { url: "/interview.webp" },
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
     
      
      

    <div className='buttons flex flex-col w-[20rem] h-[25rem] justify-between'>
      <div className='flex flex-col h-[10rem] justify-between'>
      <Link href="/Contact"><div className=' button h-[4rem] border-2 border-white text-4xl font-medium'>We Recruit</div></Link>
      <Link href="/Contact"><div className=' button h-[4rem] border-2 border-white mt-1 text-4xl font-medium '>We Mentor</div></Link>
      <Link href="/Contact"><div className=' button h-[4rem] border-2 border-white mt-1 text-4xl font-medium'>We Deliver</div></Link>
      </div>
      <div className='box h-[12rem] text-white font-medium '>
      Welcome to Alt Tab Consulting, your go-to partner for IT recruitment, mentoring, and project delivery. We specialize in providing customized and innovative solutions to help you find the best IT talent, develop your existing team, and deliver successful IT projects.
      </div>

    </div>
    </div>
    
    
      

      
      
    
   
    
   
 




    
    <Footer className="foot bottom-0"/>
 </section>

  );
}
