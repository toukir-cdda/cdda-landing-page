import React from "react";

const OurProduct = () => {
  return (
    <div className="container mx-auto px-4  flex justify-between flex-col lg:flex-row gap-4">
      {/* left side  */}
      <div className="w-full lg:w-2/6">
        <div>
          <div className="flex justify-center items-center text-center flex-col gap-2">
            <h3 className="uppertitle">Meet Our Wings</h3>
            <h2 className="title">
              We Are Never Limited to One Single Solution
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
      {/* righ side */}
      <div className="flex gap-3">
        {/* product card  */}
        <div className="lg:w-[389px] bg-primary-light block sm:flex lg:block rounded-lg shadow-lg border border-gray-100">
          <div
            className="flex justify-center items-center py-[43px] px-[80px] bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: 'url("/assets/BG.svg")' }}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 234 240"
                fill="none"
                className="h-[100px] w-[100px]"
              >
                <path
                  d="M210.798 0H23.2016C10.7188 0 0.599609 10.1369 0.599609 22.6415V217.358C0.599609 229.863 10.7188 240 23.2016 240H210.798C223.28 240 233.4 229.863 233.4 217.358V22.6415C233.4 10.1369 223.28 0 210.798 0Z"
                  fill="#2AA7DF"
                />
                <path
                  d="M184.361 87.5462C187.081 93.6966 188.457 100.333 188.155 106.887C187.905 113.439 185.985 119.812 182.936 125.496C179.874 131.184 175.689 136.216 170.999 140.431C168.934 142.226 166.827 143.89 164.634 145.368C162.457 146.789 160.37 148.138 158.139 149.315C142.777 157.726 125.526 160.921 109.087 159.088L103.605 190.844C102.772 195.204 84.6547 195.097 83.3713 190.67L68.3743 93.7936C59.1885 96.5114 51.9567 97.8329 51.6889 95.9429L51.3986 94.7904L45.8037 72.5514L60.1433 61.9713C70.4863 54.339 82.0905 49.5122 93.6528 47.1308C105.243 44.722 116.882 44.7131 128.049 46.8421C139.204 48.9486 149.964 53.148 159.531 59.4744C161.874 61.148 164.209 62.817 166.409 64.6596L169.617 67.5578C170.705 68.5298 171.673 69.4726 172.76 70.6251C177.607 75.6772 181.648 81.3802 184.361 87.5462ZM149.932 112.684C150.765 109.349 149.626 105.938 147.424 103.953C146.368 102.936 145.175 102.208 144.024 101.696C143.133 101.105 141.843 100.539 140.846 99.9253C139.731 99.3795 138.545 98.9374 137.433 98.4345C132.716 96.743 127.553 96.0123 122.472 96.2446C121.607 96.2762 120.752 96.3823 119.896 96.4771L112.878 137.13C123.741 135.49 133.922 130.869 141.618 124.19C142.85 123.187 143.996 122.01 145.067 120.947C146.089 119.89 146.983 118.758 147.803 117.65C148.836 116.017 149.554 114.358 149.932 112.684Z"
                  fill="#EEEEEE"
                />
              </svg>
            </span>
          </div>
          <div className="flex  lg:justify-start flex-col gap-3 p-5 ">
            <div className="flex justify-between items-center">
              <span className="text-[24px] font-medium text-primary-dark">
                Pyreactor
              </span>
              <span className="h-8 w-8 rounded-full flex justify-center items-center bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M12.8545 9.99133L20.0081 9.99133L20.0081 17.1449"
                    stroke="#545454"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.99121 20.0087L19.9084 10.0915"
                    stroke="#545454"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className="h-[84px] items-stretch overflow-hidden ">
              <p className="text-ellipsis whitespace-no-wrap  text-[#666] text-[16px] font-normal leading-5">
                Lorem ipsum dolor sit amet consectetur. Ut consequat et gravida
                morbi mi et ac mauris sit. Rutrum varius gravida ornare volutpat
                elit facilisis malesuada.Lorem ipsum dolor sit amet consectetur
                Lorem ipsum dolor sit amet consectetur. Ut consequat et gravida
                morbi mi et ac mauris sit. Rutrum varius gravida
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
