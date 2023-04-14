import React, { useRef } from 'react';
import Navbar from '../src/components/Navbar';
import Link from 'next/link';
import Footer from '../src/components/Footer';
import Image from 'next/image';
function mentor() {
  return (
<section>
  <Navbar />
  <div className="about h-[80vh] w-[70rem] mx-auto flex flex-col">
    <h1 className="mt-8 text-4xl font-medium">About</h1>
    <p className="mt-8 w-[80vw]">
      Alt Tab Consulting is a consulting firm based in Alberta, Australia. We
      are committed to mentoring and recruiting new immigrants who aspire to
      find well-paying jobs and settle in Australia. Our team of experts
      provides tailored guidance and support to help our clients navigate the
      Australian job market and overcome any challenges that may arise during
      the recruitment process. With our extensive knowledge and experience, we
      help our clients realize their career goals and establish themselves in
      their new home. Join us on this exciting journey and let us help you
      build a successful career in Australia.
    </p>
    <div className="stuff flex w-[80%] mx-auto mt-10">
      <div className="w-[20rem]">
        <div className="name flex flex-row items-center">
          <Image src="/logo.jpeg" height={500} width={150} />
          <div>
            <h1 className="ml-8">Ashish Kakkan</h1>
          </div>
        </div>
        <div>
          <p>I am Ashish Kakkan</p>
        </div>
      </div>
      <div className="second w-[20rem] ml-10 ">
        <div className="name flex flex-row items-center">
          <Image src="/logo.jpeg" height={500} width={150} />
          <div>
            <h1 className="ml-8">Ashish Kakkan</h1>
          </div>
        </div>
        <div>
          <p>I am Ashish Kakkan</p>
        </div>
      </div>
    </div>
  </div>
  <Footer className="foot mt-auto" style={{ minHeight: "calc(100vh - 80vh)" }} />
</section>

  );
}

export default mentor