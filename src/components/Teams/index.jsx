import React, { useState } from "react";
import Carousel from "../Carousel";
import Card from "../Card";
import Image from "next/image";
import { teamData } from "./teamData";
import TeamHeading from "./TeamHeading";

const Teams = () => {
  const [visibleCards, setVisibleCards] = useState(4);

  const handleShowMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 4);
  };

  const handleShowLess = () => {
    setVisibleCards((prevVisibleCards) =>
      prevVisibleCards > 4 ? 4 : prevVisibleCards
    );
  };
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center py-8 lg:py-14 self-stretch">
          <h3 className="uppertitle">Meet Our Teams</h3>
          <h1 className="title lg:px-40 text-center relative">
            Meet our team of Creators, Designers, and world-class Problem
            Solvers
            {/*teams title  underline  */}
            <Image
              className="team__title__underline absolute "
              src="/assets/line.svg"
              alt=""
              width={500}
              height={500}
            />
          </h1>
        </div>

        {/* leader heading  */}

        <TeamHeading
          title="Meet Our Leader"
          subtitle="Our team is Dedicated to helping world-class professional Software build
        and improve their business with our industry-leading software."
        />

        {/* leader carousal  */}
        <div>
          <Carousel />
        </div>

        {/* Member heading  */}

        <TeamHeading
          title="Meet Our Member"
          subtitle="Our team is Dedicated to helping world-className professional Software
        build and improve their business with our industry-leading software."
        />
        {/* member cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 overflow-hidden  `}
        >
          {teamData.slice(0, visibleCards).map((member, index) => (
            <Card item={member} key={index} />
          ))}

          {/* <div>
            {teamData.length > visibleCards && (
              <button onClick={handleShowMore}>Show More</button>
            )}
            {visibleCards > 4 && (
              <button onClick={handleShowLess}>Show Less</button>
            )}
          </div> */}

          {/*       
        {teamData?.map((item, index) => (
          <Card item={item} key={index} />
        ))} */}
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-28 flex justify-center items-center gap-4 bg-gradient-to-b from-transparent via-blue-0 to-white rounded-b-md">
        {visibleCards > 4 && (
          // <button onClick={handleShowMore}>Show More</button>
          <button
            className="primary-btn hover:bg-[#2ab5df]"
            onClick={handleShowLess}
          >
            <span>Show Less</span>
            {/* <FaArrowRight /> */}
          </button>
        )}

        {teamData.length > visibleCards && (
          // <button onClick={handleShowMore}>Show More</button>
          <button
            className="primary-btn hover:bg-[#2ab5df]"
            onClick={handleShowMore}
            // onClick={() => route.push("/about-us/#teams")}
          >
            <span>Show More</span>
            {/* <FaArrowRight /> */}
          </button>
        )}
      </div>
    </div>
  );
};

export default Teams;
