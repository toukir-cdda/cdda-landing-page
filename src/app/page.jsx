"use client";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurInfo from "@/components/OurInfo";
import OurProduct from "@/components/OurProduct";
import Teams from "@/components/Teams";
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

      <section className="">
        <div className="container mx-auto px-4 py-2 ">
          <hr />
        </div>
        <OurInfo />
      </section>

      <section className="py-9 gradient-bg relative">
        {/* <Image
          className="w-64  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute md:block"
          src="/assets/downCArrow.png"
          alt=""
          width={500}
          height={500}
        /> */}
        <OurProduct />
      </section>

      <section className="">
        {/* header  */}
        <Teams />
      </section>

      <section className="">
        <FAQ />
      </section>

      <hr />

      <Footer />
    </div>
  );
}
