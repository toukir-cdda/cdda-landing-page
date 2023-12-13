import React from "react";

const Accordion = ({ data }) => {
  return (
    <div className="w-full">
      <ul className="divide-y-2">
        {data?.map((item, index) => (
          <li key={index} className="item">
            <input
              type="checkbox"
              id={item.id}
              className="peer appearance-none"
            />
            <label htmlFor={item.id} className="py-4 cursor-pointer grow">
              {/* title */}
              <p>{item.title}</p>
            </label>
            <span className="pr-4 text-[#2aa7df]  text-2xl peer-checked:hidden inline">
              +
            </span>
            <span className="pr-4 text-[#2aa7df]  text-2xl peer-checked:inline hidden">
              -
            </span>
            <div className="accordion-content">
              <p>{item.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
