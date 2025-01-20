"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import preview from "../assets/logo/preview.jpg";

function Hero() {
  const [overviewToggle, setOverviewToggle] = useState(false);

  const toggleOverviewTrue = () => {
    setOverviewToggle(true);
  };
  const toggleOverviewFalse = () => {
    setOverviewToggle(false);
  };

  return (
    <div className="">
      {overviewToggle && (
  <div className="fixed inset-0 h-screen bg-black bg-opacity-90 z-10 flex items-center justify-center overflow-auto">
    <div className="rounded-lg shadow-lg max-w-4xl w-full overflow-hidden">
      <button
        onClick={toggleOverviewFalse}
        className="absolute top-4 right-4 text-2xl bg-base-200 p-4 text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
        aria-label="Close"
      >
        X
      </button>

      <div className="p-6">
        <div className="mb-6">
          <video
            controls
            preload="auto"
            className="w-full mt-96 lg:mt-20 rounded-lg"
            poster={preview}
            onError={(e) => {
              const fallback = e.target.parentNode.querySelector(
                ".fallback-transcript"
              );
              if (fallback) fallback.style.display = "block";
              e.target.style.display = "none";
            }}
          >
            <source src="/video/landing-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div
            className="fallback-transcript mt-4 hidden"
            style={{ display: "none" }}
          >
            <h3 className="text-lg font-semibold text-gray-700">
              Video Transcript:
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              At Premier Public Adjusters we understand how overwhelming it can
              be to deal with property damage and navigate the insurance claims
              process. That's why we're here to make the process simple,
              stress-free, and effective. As licensed professionals, we work
              exclusively for you, the policyholder...
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">
            Key Points
          </h3>
          <p className="text-white text-sm leading-relaxed mb-4">
            <span className="font-bold">Main Idea: </span>Premier Public Adjusters
            provides professional assistance to property owners in navigating the
            insurance claims process, ensuring they receive the maximum compensation
            for property damage or loss while relieving them of the stress of
            paperwork and negotiations.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-white">
            <li>
              Premier Public Adjusters conducts thorough property inspections,
              documents damage with high-quality evidence, and prepares claims
              that accurately reflect the extent of losses.
            </li>
            <li>
              The team reviews insurance policies in detail to ensure all
              entitled benefits are claimed, communicates with insurance
              companies on behalf of clients, and negotiates for fair
              settlements.
            </li>
            <li>
              They keep clients informed throughout the process, handle all
              interactions with insurance adjusters, and provide expert guidance
              to maximize claims, covering repairs, replacements, or temporary
              living expenses if needed.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)}


      <div className="hero-background w-full h-[90vh] flex items-center justify-center">
        <div className="container m-auto px-4">
          <div className="text-center flex flex-col justify-center items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-primary">Premier Public Adjusters:</span>{" "}
              Maximizing Claims, Minimizing Stress!
            </h1>
            <p className="text-lg md:text-2xl lg:text-3xl my-4">
              See how Premier Public Adjusters Works for You
            </p>
            <button
              onClick={toggleOverviewTrue}
              className="btn px-8 md:px-10 my-4 btn-primary flex items-center gap-2"
            >
              Play the overview <FaPlay />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
