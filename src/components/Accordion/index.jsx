import React, { useState } from "react";

const Accordion = ({ data }) => {
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const handleAccordionClick = (id) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  return (
    <div className="w-full">
      <ul className="divide-y-2">
        {data?.map((item, index) => (
          <li key={index} className="item">
            <input
              type="checkbox"
              id={item.id}
              className="peer appearance-none"
              checked={openAccordionId === item.id}
            />
            <label
              htmlFor={item.id}
              className="py-4 cursor-pointer grow flex justify-between items-center"
              onClick={() => handleAccordionClick(item.id)}
            >
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
