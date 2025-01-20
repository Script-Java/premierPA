import React from "react";
import Image from "next/image";
import s1 from "../assets/services/1.jpg";
import s2 from "../assets/services/2.jpg";
import s3 from "../assets/services/3.jpg";
import s4 from "../assets/services/4.jpg";
import s5 from "../assets/services/5.jpg";
import s6 from "../assets/services/6.jpg";
import s7 from "../assets/services/7.jpg";
import s8 from "../assets/services/8.jpg";

function Services() {
  return (
    <div>
      <div id="services" className="container m-auto my-10">
        <div className="p-4 text-center my-20">
          <h1 className="text-3xl lg:text-6xl text-primary font-bold">
            Our Services
          </h1>
          <p className="text-xl p-2">Property Damage</p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="card card-compact bg-base-200 w-80 lg:w-96 shadow-xl">
              <figure>
                <Image src={s1} alt="water damage"></Image>
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">Water Damage</h2>
                <p className="text-primary">
                  Leaks can cause major damage, but we help you get coverage.
                </p>
              </div>
            </div>

            <div className="card card-compact bg-base-200 w-80 lg:w-96 shadow-xl">
              <figure>
                <Image src={s2} alt="mold damage"></Image>
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">Mold Damage</h2>
                <p className="text-primary">
                  Moisture leads to mold; we ensure it’s addressed and covered.
                </p>
              </div>
            </div>
            <div className="card card-compact bg-base-200 w-80 lg:w-96 shadow-xl">
              <figure>
                <Image src={s3} alt="leak damage"></Image>
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">Roof Leak Damage</h2>
                <p className="text-primary">
                  Roof leaks cause costly damage; we secure your claim.
                </p>
              </div>
            </div>
            <div className="card card-compact bg-base-200 w-80 lg:w-96 shadow-xl">
              <figure>
                <Image src={s4} alt="fire damage"></Image>
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">Fire & Smoke Damage</h2>
                <p className="text-primary">
                  We ease the stress of fire damage with fair settlements.
                </p>
              </div>
            </div>
            <div className="card card-compact bg-base-200 w-80 lg:w-96 shadow-xl">
              <figure>
                <Image src={s5} alt="sinkhole damage"></Image>
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">Sinkhole Damage</h2>
                <p className="text-primary">
                  Sinkholes often go unnoticed; we ensure you're protected.
                </p>
              </div>
            </div>
            <div className="card card-compact bg-base-200 w-80 lg:w-96 shadow-xl">
              <figure>
                <Image src={s6} alt="storm damage"></Image>
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">
                  Storm & Hurricane Damage
                </h2>
                <p className="text-primary">
                  We help cover damage from storms and natural disasters.
                </p>
              </div>
            </div>
            <div className="card card-compact bg-base-200 w-80 lg:w-96 shadow-xl">
              <figure>
                <Image src={s7} alt="vandalsim damage"></Image>
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">Vandalism Damage</h2>
                <p className="text-primary">
                  Vandalism damage? We maximize your settlement.
                </p>
              </div>
            </div>
            <div className="card card-compact bg-base-200 w-80 lg:w-96">
              <figure>
                <Image src={s8} alt="underpaid"></Image>
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">
                  Underpaid or Denied Claim
                </h2>
                <p className="text-primary">
                  Denied or underpaid claims? We fight for fairness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
