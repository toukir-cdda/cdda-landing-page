import React from "react";
import Accordion from "../Accordion";

const FAQ = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col justify-center items-center py-4 md:py-7 lg:py-14 self-stretch">
        <h3 className="uppertitle">Frequently Asked Questions</h3>
        <h1 className="title lg:mx-56 text-center">
          If you have anything else you want to ask, reach out to us.
        </h1>
      </div>

      {/* accordion */}
      <Accordion
        data={[
          {
            id: 11,
            title:
              "Do you offer custom software development services for my industry?",
            content:
              "Absolutely, our expertise extends to providing bespoke software development services tailored to your specific industry requirements. With a focus on innovation, we craft solutions that optimize your processes, enhance efficiency, and align with your unique business objectives. Our dedicated team is committed to delivering cutting-edge technology that ensures a seamless integration of customized software for the sustained success of your business.",
          },
          {
            id: 12,
            title: "What is your process for end-to-end software development?",
            content:
              "Absolutely, our expertise extends to providing bespoke software development services tailored to your specific industry requirements. With a focus on innovation, we craft solutions that optimize your processes, enhance efficiency, and align with your unique business objectives. Our dedicated team is committed to delivering cutting-edge technology that ensures a seamless integration of customized software for the sustained success of your business.",
          },
          {
            id: 13,
            title: "How does your team augmentation process work?",
            content:
              "Absolutely, our expertise extends to providing bespoke software development services tailored to your specific industry requirements. With a focus on innovation, we craft solutions that optimize your processes, enhance efficiency, and align with your unique business objectives. Our dedicated team is committed to delivering cutting-edge technology that ensures a seamless integration of customized software for the sustained success of your business.",
          },
          {
            id: 14,
            title: "Do you offer teams for mobile app development?",
            content:
              "Absolutely, our expertise extends to providing bespoke software development services tailored to your specific industry requirements. With a focus on innovation, we craft solutions that optimize your processes, enhance efficiency, and align with your unique business objectives. Our dedicated team is committed to delivering cutting-edge technology that ensures a seamless integration of customized software for the sustained success of your business.",
          },
          {
            id: 15,
            title: "What is your preferred development methodology?",
            content:
              "Absolutely, our expertise extends to providing bespoke software development services tailored to your specific industry requirements. With a focus on innovation, we craft solutions that optimize your processes, enhance efficiency, and align with your unique business objectives. Our dedicated team is committed to delivering cutting-edge technology that ensures a seamless integration of customized software for the sustained success of your business.",
          },
          {
            id: 16,
            title: "Can you help me identify the core features for my MVP?",
            content:
              "Absolutely, our expertise extends to providing bespoke software development services tailored to your specific industry requirements. With a focus on innovation, we craft solutions that optimize your processes, enhance efficiency, and align with your unique business objectives. Our dedicated team is committed to delivering cutting-edge technology that ensures a seamless integration of customized software for the sustained success of your business.",
          },
        ]}
      />

      {/* contact us card  */}

      <div
        className="bg-cover bg-center bg-no-repeat rounded-lg p-8   bg-[#2AA7DF] my-9"
        style={{ backgroundImage: 'url("/assets/BG.svg")' }}
      >
        <div className="flex flex-col gap-3 items-start justify-center self-stretch ">
          <h1 className="title text-white">Have Any Project idea</h1>
          <p className=" text-white text-xl font-medium">
            Lets discuss about your offshore project. We can Help you by our
            skillful Global team. You can take a free counciling by taking a
            schedule
          </p>
          <button className="primary-btn bg-white text-[#2aa7df]">
            <span>Contact us</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M12.0254 4.94165L17.0837 9.99998L12.0254 15.0583"
                stroke="#2AA7DF"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.91699 10H16.942"
                stroke="#2AA7DF"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
