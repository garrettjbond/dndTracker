import React from "react";
import type { FactSection } from "../types/FactSection";

interface CardNumberProps {
  fact: FactSection;
}

const CardNumber: React.FC<CardNumberProps> = ({ fact }) => {

  return (
    <div className={`flex flex-col ${fact.step % 2 ? "items-start" : "items-end"}`}>
      <div className="px-5 tracking-tighter z-1">
        <h3 className="text-8xl sm:text-9xl font-bold text-offblack">0<span className="bg-gradient-to-l from-red-400 to-red-200 text-transparent bg-clip-text">{fact.step}</span></h3>
      </div>
      <div className={`${fact.step % 2 ? "bg-lightgrey text-offblack" : "bg-offblack text-white"} z-10 rounded-4xl max-w-lg drop-shadow-lg p-5 flex flex-col text-left -mt-4 sm:-mt-6 gap-4 mb-5`}>
        <h4 className="font-semibold text-4xl">{fact.title}</h4>
        <div className={`flex items-end ${fact.step % 2 && "flex-row-reverse"}`}>
          <ul className="list-disc list-inside">
            {fact.factoids.map((x, index) => (
              <li key={index}>{x}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardNumber;