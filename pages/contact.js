import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../src/components/Navbar";
import { useRouter } from "next/router";
import Footer from "../src/components/Footer";
import data from "../data.json"

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
    option3: false,
  });

  const handleCheckboxChange = (event) => {
    setOptions({
      ...options,
      [event.target.name]: event.target.checked,
    });
  };

  const { option1, option2, option3 } = options;

  return (
    <section className="mentor-section">
      <Navbar />
      <div className="sections mentor flex items-center">
        <div className="flex flex-col items-center w-[80%] mx-auto mt-10 boxes-2">
          <div className="mt-20">
            <p className="text-left text-4xl font-4xl">{data.contactTitle}</p>
            <form ref={form} onSubmit={sendEmail}>
              <p>{data.contactText}</p>

              <div className="column flex flex-col">
                <label htmlFor="the-name">Your Name</label>
                <input type="text" name="user_name" id="the-name" />

                <label htmlFor="the-email">Email Address</label>
                <input type="email" name="user_email" id="the-email" />

                <label htmlFor="the-phone">Phone Number</label>
                <input type="tel" name="phone_num" id="the-phone" />

                <label htmlFor="the-options">Select options</label>
                <div id="the-options">
                  <label>
                    <input
                      type="checkbox"
                      name="option1"
                      checked={option1}
                      onChange={handleCheckboxChange}
                    />
                    Mentor
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="option2"
                      checked={option2}
                      onChange={handleCheckboxChange}
                    />
                    Recruit
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="option3"
                      checked={option3}
                      onChange={handleCheckboxChange}
                    />
                    Other
                  </label>
                </div>

                <label htmlFor="the-message">Message</label>
                <textarea
                  name="message"
                  id="the-message"
                  value={`Selected options: ${option1 ? "Mentor, " : ""}${
                    option2 ? "Recruit, " : ""
                  }${option3 ? "Other" : ""}`}
                ></textarea>

                <button className="mt-3 send click" type="submit">
                  Send Details
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
 
  )};
  export default Contact