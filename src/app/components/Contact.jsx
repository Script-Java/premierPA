"use client";
import React, { useState } from "react";

function Contact() {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      phone: formData.get("phone"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowToast(true);
        e.target.reset();
        setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div id="contact" className="container m-auto">
      <div className="my-20">
        <div className="p-4 text-center">
          <h1 className="text-3xl lg:text-6xl text-primary font-bold">
            Contact Us
          </h1>
          <p className="text-xl pt-2">We're here to help</p>
        </div>
        <div>
          <form className="flex flex-col w-full gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="phone #"
              className="input input-bordered w-full"
              required
            />
            <textarea
              name="message"
              className="textarea textarea-bordered"
              placeholder="Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
          {showToast && (
            <div className="toast toast-top toast-end">
              <div className="alert alert-success">
                <span>Message sent successfully!</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
