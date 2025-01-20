import React from "react";
import Image from "next/image";
import img1 from "../assets/about/1.jpg";
import img2 from "../assets/about/2.jpg";
import img3 from "../assets/about/3.jpg";

function About() {
  return (
    <div id="about" className="container m-auto">
      <div className="my-40">
        <div className="p-4 text-center">
          <h1 className="text-3xl lg:text-6xl text-primary font-bold">
            About Us
          </h1>
          <p className="text-xl pt-2">Meet our team</p>
        </div>

        <div className="">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="max-w-2xl flex text-center flex-col gap-4 my-10 p-4 bg-base-200 rounded-xl shadow-xl">
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="avatar">
                  <div className="w-44 rounded-full">
                    <Image src={img1} alt="David"></Image>
                  </div>
                </div>
                <div className="text-center lg:text-start">
                  <h2 className="text-2xl font-bold">David Crosby</h2>
                  <p className="text-lg">President/Co-Owner</p>
                </div>
              </div>
              <div className="my-4">
                <p className="text-lg text-center lg:text-start text-primary">
                  As a licensed Property and Casualty Claims adjuster since
                  2004, Dave has handled over 15,000 residential and commercial
                  losses in over 20 states in the country. During his carrier
                  Dave has handled a vast array of claims to include hurricane,
                  hail, theft, water, mold and fire losses, and many more. Dave
                  also has skills and knowledge in the field of construction and
                  insurance, that qualifies him to handle your loss from
                  beginning to end, to ensure you receive a fair and accurate
                  settlement, in accordance with the benefits your policy
                  allows. As a former adjuster for the insurance carriers, Dave
                  has elected to advocate his experience and knowledge towards
                  the fair and reasonable settlement for the homeowner. Dave is
                  dedicated to your rights and needs during the difficult times
                  you face, after you have suffered a loss.
                </p>
              </div>
            </div>
            <div className="max-w-2xl flex flex-col my-10 gap-4 p-4 bg-base-200 rounded-xl shadow-xl">
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="avatar">
                  <div className="w-44 rounded-full">
                    <Image src={img3} alt="david"></Image>
                  </div>
                </div>
                <div className="text-center lg:text-start">
                  <h2 className="text-2xl font-bold">James Gannon Davis</h2>
                  <p className="text-lg">President/Co-Owner</p>
                </div>
              </div>
              <div className="my-4">
                <p className="text-lg text-center lg:text-start text-primary">
                  Gannon Davis is a highly experienced Public Adjuster with over
                  20 years of expertise in residential real estate, general
                  construction, and insurance. His diverse career has provided
                  him with a deep understanding of property valuation, claims
                  evaluation, project management, and client advocacy. As the
                  owner of RFG Systems, LLC, Gannon led residential and
                  commercial construction projects, managing all phases from
                  bidding to completion. Previously, he worked as an Independent
                  Insurance Adjuster for All Lines, gaining expertise in complex
                  property damage claims and negotiating favorable settlements.
                  Earlier in his career, he also worked in residential real
                  estate, advising on buying, selling, remodeling, and
                  maintenance. Gannon’s unique blend of construction, insurance,
                  and real estate expertise allows him to effectively advocate
                  for clients, ensuring they receive full compensation while
                  navigating the claims process.
                </p>
              </div>
            </div>
            <div className="max-w-2xl flex flex-col bg-base-200 my-10 gap-4 p-4 rounded-xl shadow-xl">
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="avatar">
                  <div className="w-44 rounded-full">
                    <Image src={img2} alt="david"></Image>
                  </div>
                </div>
                <div className="text-center lg:text-start">
                  <h2 className="text-2xl font-bold">Travis Opgenorth</h2>
                  <p className="text-lg">PA Manager</p>
                </div>
              </div>
              <div className="my-4">
                <p className="text-lg text-center lg:text-start text-primary">
                  Travis Opgenorth is a retired Youth Minister from Minessota.
                  In 2007 he started his career in the insurance industry. With
                  over 17 years of claims handling experience in 8 states, he
                  has excelled as a public adjuster for the last 6 years,
                  advocating for policyholders and ensuring they receive fair
                  settlements for their claims. Travis spent 11 years on the
                  insurance side, gaining invaluable insights into the claims
                  process and the inner workings of insurance companies. This
                  unique combination of experience gives him a well-rounded
                  perspective and a strategic edge in representing his clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
