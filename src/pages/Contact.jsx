import { useState, createRef } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  const recaptchaRef = createRef();
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const CAPTCHA_KEY = '6Le6qHQpAAAAAJr6dHVWFfQhK6vhCBEu8EgMw0st';

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [formMessage, setFormMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const onReCAPTCHAChange = (value) => {
    console.log("CAPTCHA value:", value);
    setIsCaptchaValid(!!value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const recaptchaValue = recaptchaRef.current.getValue();
    if (!recaptchaValue) {
      setFormMessage("Please verify that you are not a robot");
      return;
    }

    // Form validation
    if (!formData.user_name || formData.user_name.trim() === "") {
      setFormMessage("Please enter your name.");
      return;
    }
    if (!isValidEmail(formData.user_email)) {
      setFormMessage("Please enter a valid email address.");
      return;
    }
    if (!formData.message || formData.message.trim() === "") {
      setFormMessage("Please enter your message.");
      return;
    }

    // emailjs service id, template id, formData, user id
    emailjs.send('service_wjvgxh6', 'template_q39hvus', formData, '7IwBj_xp__7TjBhH8')
      .then((result) => {
          console.log('Email successfully sent!', result.text);
          setFormMessage('Email sent! We will get back to you soon.');
      }, (error) => {
          console.log('Failed to send email:', error.text);
      });
    
      // Reset CAPTCHA validation state
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
      setIsCaptchaValid(false); 
    }

    setFormData({
      user_name: '',
      user_email: '',
      message: '',
    });
  };

  return (
    <div className="max-w-screen-md p-12 mx-auto">
      <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
        Contact Us
      </h2>
      <p className="mb-8 font-light text-center text-gray-500 lg:mb-16 dark:text-gray-400 sm:text-xl">
        Fill this information and we will get back to you within 48 hours.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="pb-12 border-b border-gray-900/10">
          <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="user_name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  onChange={handleChange}
                  value={formData.user_name}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  onChange={handleChange}
                  value={formData.user_email}
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="message"
                className="block text-sm font-medium leading-6 text-gray-900"
                onChange={handleChange}>
                Message
              </label>
              <div className="mt-2">
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  onChange={handleChange}
                  value={formData.message}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end mt-6 gap-x-6">
          <button
            type='submit'
            disabled={!isCaptchaValid}
            className={`inline-flex justify-center items-center py-3 px-5 font-medium text-center text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 ${
              isCaptchaValid ? 'bg-secondary hover:bg-primary' : 'bg-gray-400 cursor-not-allowed'
            }`}
          >  
            Submit
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={CAPTCHA_KEY}
            onChange={onReCAPTCHAChange}
          />
        </div>
        {formMessage && (
          <p className="mt-4 text-sm text-center text-gray-900">{formMessage}</p>
        )}
      </form>
    </div>
  );
}

export default Contact;
