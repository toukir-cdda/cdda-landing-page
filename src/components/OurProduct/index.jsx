"use client";
import React, { useEffect } from "react";
import ProductCard from "../Card/ProductCard";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const OurProduct = () => {
  // useEffect(() => {
  //   var copy = document.querySelector(".logos-slide").cloneNode(true);
  //   document.querySelector(".logos").appendChild(copy);
  // }, []);
  return (
    <div className="container mx-auto px-4  flex justify-between flex-col lg:flex-row gap-4">
      {/* left side  */}
      <div className="w-full lg:w-2/6">
        <div>
          <div className="flex justify-center items-center md:lg:items-start text-center flex-col gap-2">
            <h3 className="uppertitle text-left">Meet Our Wings</h3>
            <h2 className="title md:text-left relative">
              We Are Never Limited to One Single Solution
              {/*product title  underline  */}
              <Image
                className="product__title__underline absolute "
                src="/assets/line.svg"
                alt=""
                width={500}
                height={500}
              />
            </h2>
          </div>
          <div className="my-3 bg-light-blue flex items-center gap-2 px-3 py-4 self-stretch  border-l-[var(--primary-blue)]  border-l-4 ">
            <p className="text-xs md:text-base lg:text-xl font-normal leading-4 md:leading-5 lg:leading-7 text-[#333]">
              We are trusted partners for realizing digital-at-the-core success
              strategies for businesses across the world and across industries.
            </p>
          </div>
        </div>
        <button className="primary-btn">
          <span>Explore More</span>
          <FaArrowRight />
        </button>
      </div>
      {/* righ side */}
      {/* flex gap-3 flex-wrap */}
      <div className="w-full lg:w-1/2 ">
        {/* product card */}
        <ProductCard />
        {/* <div class="logos">
          <div class="logos-slide ">
            {[11, 1, 1, 1, 2].map((item) => (
              <div className="w-20 h-16 bg-red-500" key={item}>
                <ProductCard />
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default OurProduct;
