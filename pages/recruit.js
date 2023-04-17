import React from "react";
import Link from "next/link";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import 'aos/dist/aos.css'
import Aos from 'aos';
import { useEffect } from "react";
import data from "../data.json"

function Recruit() {
  useEffect(()=>{
    Aos.init({duration:1500});
  },[]);
  return (
    <section className="mentor-section">
      <Navbar />
      <div className="sections mentor flex items-center">
        <div className="flex flex-col items-center w-[80%] mx-auto mt-10 boxes" data-aos="fade-down">
          <div className="mt-20">
            <h1 className="text-left text-4xl ml-3 font-4xl">{data.recruitTitle}</h1>
            <p className="mt-10 ml-3">
              {data.recruitText1}
              <br/>
              <span className="underline">If you would like to know more, please <Link className="text-blue-500" href="/Contact">contact us</Link></span>
            </p>
          </div>
        </div>
      </div>
      <div className="sections interview flex items-center">
        <div className="flex w-[80%] mx-auto mt-10 boxes" data-aos="fade-down">
          <div className="mt-20">
            <p className="mt-10 ml-3">{data.recruitText2}</p>
          
              
              
            
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Recruit;
