import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../src/components/Navbar";
import { useRouter } from "next/router";
import Footer from "../src/components/Footer";
import { useState } from "react";

function Contact() {
  const form = useRef();
  const router = useRouter();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x3zid9d",
        "template_y6biong",
        form.current,
        "gJvlNiZo3mc0qLlvf"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert("Message sent!");
          router.push("/");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const [options, setOptions] = useState({
    option1: false,
    option2: false,
    option3: false
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setOptions({ ...options, [name]: checked });
  };


  return (
      <section className='mentor-section'>
        <Navbar/>
        <div className='sections mentor flex items-center'>
        
        <div className='flex flex-col items-center w-[80%] mx-auto mt-10 boxes-2'>
          <div className='mt-20'>
          <h1 className='text-left text-4xl font-4xl'>Contact Us</h1>
          <form ref={form} onSubmit={sendEmail}>
          <p>
            Please take a moment to get in touch, we will get back to you
            shortly.
          </p>

          <div class="column flex flex-col">
            <label for="the-name">Your Name</label>
            <input type="text" name="user_name" id="the-name" />

            <label for="the-email">Email Address</label>
            <input type="email" name="user_email" id="the-email" />

            <label for="the-phone">Phone Number</label>
            <input type="tel" name="phone_num" id="the-phone" />
          
            <label for="the-message">Message</label>
            <textarea name="message" id="the-message"></textarea>

            <div>
      <label>
        <input
          type="checkbox"
          name="option1"
          checked={options.option1}
          onChange={handleCheckboxChange}
        />
        Option 1
      </label>
      <label>
        <input
          type="checkbox"
          name="option2"
          checked={options.option2}
          onChange={handleCheckboxChange}
        />
        Option 2
      </label>
      <label>
        <input
          type="checkbox"
          name="option3"
          checked={options.option3}
          onChange={handleCheckboxChange}
        />
        Option 3
      </label>
    </div>

            <button className=" mt-3 send click" type="submit">
              Send Details
            </button>
          </div>
        </form>
</div>
          

        </div>
        </div>
        <Footer/>
    </section>
  );
}

export default Contact;
