import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

function Contact() {
  return (
    <div id="contact" className="container m-auto">
      <div className="my-20">
        <div className="p-4 text-center">
          <h1 className="text-3xl lg:text-6xl text-primary font-bold">
            Contact Us
          </h1>
          <p className="text-xl pt-2">We're here to help</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-4 my-20">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <FaPhoneAlt className="text-3xl" />
            <p className="text-base lg:text-2xl text-primary font-bold">214-470-8137</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <MdAlternateEmail className="text-3xl" />
            <p className="text-base lg:text-2xl text-primary font-bold">
              claims@premierpa.claims
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
