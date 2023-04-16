import React, { useRef } from "react";
import Link from "next/link";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
function recruit() {
  return (
    <section className="mentor-section">
      <Navbar />
      <div className="sections mentor flex items-center">
        <div className="flex flex-col items-center w-[80%] mx-auto mt-10 boxes">
          <div className="mt-20">
            <h1 className="text-left text-4xl ml-3 font-4xl">Recruitment</h1>
            <p className="mt-10 ml-3">
              At Alt Tab Consulting, we understand the importance of mentoring
              by IT industry experience. That's why we have a team of
              experienced recruiters who have extensive knowledge of the IT
              industry and can guide job seekers towards their dream job. We
              also provide mentorship programs to help job seekers enhance their
              skills and knowledge to become successful in their IT career.
              <br/>
              <span className="underline">If you would like to know more, please <Link className="text-blue-500" href="/Contact">contact us</Link></span>
            </p>
          </div>
        </div>
      </div>
      <div className="sections interview flex items-center">
        <div className="flex w-[80%] mx-auto mt-10 boxes">
          <div className="mt-20">
            <p className="mt-10 ml-3">
              We have job vacancies in various areas such as Business Analyst,
              Project Manager/Scrum Master and more. Our IT job search is
              designed to help you find the right job that matches your skills,
              experience, and career goals.
              <br />
              We offer a range of services to employers, including IT
              recruitment, staffing, executive search, headhunting, and talent
              acquisition. Our team of experienced recruiters has a thorough
              understanding of the IT industry and can help you find the right
              talent for your business. We work with companies of all sizes,
              from startups to Fortune 500 companies, to provide them with the
              best staffing solutions.
        
              
            </p>
          
              
              
            
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default recruit;
