// import Image from "next/image";
// import React from "react";

// const ProductCard = () => {
//   return (
//     <div className="lg:w-[389px] bg-primary-light block sm:flex lg:block rounded-lg shadow-lg border border-gray-100">
//       <div
//         className="flex justify-center items-center py-[43px] px-[80px] bg-cover bg-center bg-no-repeat "
//         style={{ backgroundImage: 'url("/assets/BG.svg")' }}
//       >
//         <span>
//           <Image
//             className="h-[100px] w-[100px]"
//             src="/assets/product.svg"
//             alt=""
//             width={500}
//             height={500}
//           />
//         </span>
//       </div>
//       <div className="flex  lg:justify-start flex-col gap-3 p-5 ">
//         <div className="flex justify-between items-center">
//           <span className="text-[18px] md:text-[20px] lg:text-[24px] font-medium text-primary-dark">
//             Pyreactor
//           </span>
//           <span className="h-8 w-8 rounded-full flex justify-center items-center bg-gray-200">
//             <GoArrowUpRight />
//           </span>
//         </div>
//         <div className="h-[84px] items-stretch overflow-hidden ">
//           <p className="text-ellipsis whitespace-no-wrap  text-[#666] text-[14px] lg:text-[16px] font-normal leading-5">
//             Lorem ipsum dolor sit amet consectetur. Ut consequat et gravida
//             morbi mi et ac mauris sit. Rutrum varius gravida ornare volutpat
//             elit facilisis malesuada.Lorem ipsum dolor sit amet consectetur
//             Lorem ipsum dolor sit amet consectetur. Ut consequat et gravida
//             morbi mi et ac mauris sit. Rutrum varius gravida
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

"use client";
import { GoArrowUpRight } from "react-icons/go";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const ProductCard = () => {
  return <MarqueeComponent />;
};

export default ProductCard;

const Cards = () => {
  return (
    <div className="lg:w-[389px] bg-primary-light block sm:flex lg:block rounded-lg shadow-lg border border-gray-100">
      <div
        className="flex justify-center items-center py-[43px] px-[80px] bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: 'url("/assets/BG.svg")' }}
      >
        <span>
          <Image
            className="h-[100px] w-[100px]"
            src="/assets/product.svg"
            alt=""
            width={500}
            height={500}
          />
        </span>
      </div>
      <div className="flex  lg:justify-start flex-col gap-3 p-5 ">
        <div className="flex justify-between items-center">
          <span className="text-[18px] md:text-[20px] lg:text-[24px] font-medium text-primary-dark">
            Pyreactor
          </span>
          <span className="h-8 w-8 rounded-full flex justify-center items-center bg-gray-200">
            <GoArrowUpRight />
          </span>
        </div>
        <div className="h-[84px] items-stretch overflow-hidden ">
          <p className="text-ellipsis whitespace-no-wrap  text-[#666] text-[14px] lg:text-[16px] font-normal leading-5">
            Lorem ipsum dolor sit amet consectetur. Ut consequat et gravida
            morbi mi et ac mauris sit. Rutrum varius gravida ornare volutpat
            elit facilisis malesuada.Lorem ipsum dolor sit amet consectetur
            Lorem ipsum dolor sit amet consectetur. Ut consequat et gravida
            morbi mi et ac mauris sit. Rutrum varius gravida
          </p>
        </div>
      </div>
    </div>
  );
};

const Card = ({ shape, index }) => {
  return <Cards />;
};

const MarqueeComponent = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleClosePopup = () => {
    setActiveCard(null);
  };

  const cards = ["circle", "rectangle"].map((shape, index) => (
    <Card key={index} index={index} shape={shape} />
  ));
  useEffect(() => {
    var copy = document.querySelector(".marquee__group").cloneNode(true);
    document.querySelector(".marquee").appendChild(copy);
  }, []);
  return (
    <div onClick={handleClosePopup}>
      <article className="wrapper">
        <div className="marquee">
          <div className="marquee__group">{cards}</div>
        </div>
      </article>
    </div>
  );
};
