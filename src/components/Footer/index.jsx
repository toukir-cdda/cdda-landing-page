import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="container mx-auto px-4 mt-6">
      <div>
        <div className="flex lg:space-x-7 flex-col lg:flex-row space-y-8 lg:space-y-0">
          <div className=" w-full lg:w-1/4">
            <div>
              <Image
                src="/assets/logo.svg"
                width={1000}
                height={1000}
                alt=""
                className="w-32 h-12   "
              />
            </div>
            <p className="pt-4 pb-0 m-0 md:text-sm text-xs">
              We are a team of high-performing self-managed engineers and
              leaders delivering purposeful technology solutions for the future.
            </p>
          </div>
          <div className="w-full lg:w-3/4 grid md:grid-cols-4 grid-cols-2 gap-x-6 gap-y-4 md:gap-y-0">
            <div>
              <p className="text-[#AFAFAF] text-sm font-normal pb-3.5 m-0">
                Digital Product Engineering
              </p>
              <ul className="space-y-2">
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  API Enablement services
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Custom Software Development
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Digital Customer Experience
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Mobile Application Development
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[#AFAFAF] text-sm font-normal pb-3.5 m-0">
                Cloud Platform
              </p>
              <ul className="space-y-2">
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  App Modernization
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Data on Cloud
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Cloud-Native Development
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  DevOps Engineering
                </li>
                <li className="text-[#545454] md:text-sm text-xs  "> Data</li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Data Management
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Data Visualization
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Artificial Intelligence
                </li>
              </ul>
            </div>

            <div className="w-full">
              <p className="text-[#AFAFAF] text-sm font-normal pb-3.5 m-0">
                Engagement Models
              </p>
              <ul className="space-y-2">
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Product Engineering Methodology
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Managed Team Extension
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Product Oriented Delivary
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Build Operate & Transfer
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Industries
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Healthcare Services
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  SaaS/ISV
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Retail and CPG
                </li>
              </ul>
            </div>
            <div className="w-full">
              <p className=" text-[#AFAFAF] md:text-sm text-xs font-normal pb-3.5 m-0">
                About US
              </p>
              <ul className="space-y-2">
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  CEO Speak
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Employee Speak
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Impact on the World
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Client Speak
                </li>

                <li className="text-[#545454] md:text-sm text-xs  "> CSR</li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Insights
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Careers
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Contact Us
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="mt-8 mb-5 text-[#B3B3B3] h-1" />
      </div>
      <FooterEnd />
    </footer>
  );
};

export default Footer;

const FooterEnd = () => {
  return (
    <div className="flex  justify-between pb-5">
      <div>
        <span className="text-[#545454] text-xs md:text-sm  font-normal">
          © 2024 Cdda Ltd. All rights reserved.
        </span>
      </div>
      <div className="flex justify-between space-x-6">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M6.2918 18.1251C13.8371 18.1251 17.9652 11.8724 17.9652 6.45167C17.9652 6.27589 17.9613 6.0962 17.9535 5.92042C18.7566 5.33967 19.4496 4.62033 20 3.7962C19.2521 4.12896 18.458 4.34627 17.6449 4.44074C18.5011 3.92755 19.1421 3.12135 19.4492 2.17159C18.6438 2.64892 17.763 2.98563 16.8445 3.1673C16.2257 2.50976 15.4075 2.07439 14.5164 1.9285C13.6253 1.78261 12.711 1.93433 11.9148 2.3602C11.1186 2.78607 10.4848 3.46238 10.1115 4.28455C9.73825 5.10672 9.64619 6.02897 9.84961 6.9087C8.21874 6.82686 6.62328 6.40321 5.16665 5.6652C3.71002 4.9272 2.42474 3.89132 1.39414 2.62472C0.870333 3.52782 0.710047 4.59649 0.945859 5.61353C1.18167 6.63057 1.79589 7.51966 2.66367 8.10011C2.01219 8.07943 1.37498 7.90402 0.804688 7.58839V7.63917C0.804104 8.58691 1.13175 9.50561 1.73192 10.2391C2.3321 10.9726 3.16777 11.4756 4.09687 11.6626C3.49338 11.8277 2.85999 11.8518 2.2457 11.7329C2.50788 12.548 3.01798 13.2609 3.70481 13.7721C4.39164 14.2833 5.22093 14.5673 6.07695 14.5845C4.62369 15.726 2.82848 16.3452 0.980469 16.3423C0.652739 16.3418 0.325333 16.3217 0 16.2821C1.87738 17.4866 4.06128 18.1263 6.2918 18.1251Z"
              fill="#6B6B6B"
            />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
              fill="#6B6B6B"
            />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0_16_3777)">
              <path
                d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z"
                fill="#6B6B6B"
              />
            </g>
            <defs>
              <clipPath id="clip0_16_3777">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0_16_3778)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017C0 14.442 2.865 18.197 6.839 19.521C7.339 19.613 7.521 19.304 7.521 19.038C7.521 18.801 7.513 18.17 7.508 17.335C4.726 17.94 4.139 15.992 4.139 15.992C3.685 14.834 3.029 14.526 3.029 14.526C2.121 13.906 3.098 13.918 3.098 13.918C4.101 13.988 4.629 14.95 4.629 14.95C5.521 16.48 6.97 16.038 7.539 15.782C7.631 15.135 7.889 14.694 8.175 14.444C5.955 14.191 3.62 13.331 3.62 9.493C3.62 8.4 4.01 7.505 4.649 6.805C4.546 6.552 4.203 5.533 4.747 4.155C4.747 4.155 5.587 3.885 7.497 5.181C8.31277 4.95851 9.15444 4.84519 10 4.844C10.85 4.848 11.705 4.959 12.504 5.181C14.413 3.885 15.251 4.154 15.251 4.154C15.797 5.533 15.453 6.552 15.351 6.805C15.991 7.505 16.379 8.4 16.379 9.493C16.379 13.341 14.04 14.188 11.813 14.436C12.172 14.745 12.491 15.356 12.491 16.291C12.491 17.629 12.479 18.71 12.479 19.038C12.479 19.306 12.659 19.618 13.167 19.52C15.1583 18.8521 16.8893 17.5753 18.1155 15.87C19.3416 14.1648 20.0009 12.1173 20 10.017C20 4.484 15.522 0 10 0Z"
                fill="#6B6B6B"
              />
            </g>
            <defs>
              <clipPath id="clip0_16_3778">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
      </div>
    </div>
  );
};
