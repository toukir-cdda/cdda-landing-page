"use client";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurInfo from "@/components/OurInfo";
import OurProduct from "@/components/OurProduct";
import Teams from "@/components/Teams";
import Image from "next/image";
export default function Home() {
  return (
    <div className="">
      <div className="z-50 sticky container mx-auto px-4  top-0  mt-4">
        {/* navbar  */}
        <Navbar />
      </div>
      <section className="gradient-bg">
        <Hero />
      </section>

      <section className="" id="our-info">
        <div className="container mx-auto px-4 py-2 ">
          <hr />
        </div>
        <OurInfo />
      </section>

      <section className="py-9 gradient-bg relative">
        <Image
          className="w-64  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden absolute lg:w-[170px] xl:w-64 lg:block "
          src="/assets/downCArrow.png"
          alt=""
          width={500}
          height={500}
        />
        <OurProduct />
      </section>

      <section className="gradient-bg relative">
        {/* header  */}
        <Teams />
        <div className="absolute bottom-0 w-full h-28 flex justify-center items-center bg-gradient-to-b from-transparent via-blue-0 to-white rounded-b-md">
          <button className="primary-btn">
            <span>See all Member</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M9.62012 3.95337L13.6668 8.00004L9.62012 12.0467"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.33301 8H13.553"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </section>

      <section className="">
        <FAQ />
      </section>

      <hr />

      <Footer />
    </div>
  );
}
