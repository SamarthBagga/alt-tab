import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x3zid9d', 'template_y6biong', form.current, 'gJvlNiZo3mc0qLlvf')
      .then((result) => {
          console.log(result.text);
          console.log("messgae sent");
      }, (error) => {
          console.log(error.text);
      });
  };
  const [options, setOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const handleOptionChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setOptions({
      ...options,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Combine the selected options into the message text
    const message = `Selected options: 
      Option 1: ${options.option1}
      Option 2: ${options.option2}
      Option 3: ${options.option3}`;

    // Send the message using emailjs
    // ...
    emailjs.sendForm('service_x3zid9d', 'template_y6biong', form.current, 'gJvlNiZo3mc0qLlvf')
      .then((result) => {
          console.log(result.text);
          console.log("messgae sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
<form onSubmit={handleFormSubmit}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Options</label>
      <label>
        <input
          type="checkbox"
          name="option1"
          checked={options.option1}
          onChange={handleOptionChange}
        />
        Mentor
      </label>
      <label>
        <input
          type="checkbox"
          name="option2"
          checked={options.option2}
          onChange={handleOptionChange}
        />
        Recruiter
      </label>
      <label>
        <input
          type="checkbox"
          name="option3"
          checked={options.option3}
          onChange={handleOptionChange}
        />
        Other
      </label>
      <label>Message</label>
      <textarea name="message" value={message} />
      <input type="submit" value="send" />
    </form>

  );
};