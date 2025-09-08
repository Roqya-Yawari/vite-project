/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import MinusIcon from "./MinusIcon";
import PlusIcon from "./PlusIcon";

import { useState } from "react";

function Accordian({ title, describtion, defaultAccordion = false }) {
  const [close, setClose] = useState(defaultAccordion);

  return (
    <>
      <div className="rounded-sm shadow shadow-gray-200  p-2 ">
        <div className="flex justify-between items-center">
          <p className="text-purple-950 text-left text-xs md:text-sm text-bold  ">
            {title}
          </p>
          {close ? (
            <PlusIcon onClick={() => setClose(false)} />
          ) : (
            <MinusIcon onClick={() => setClose(true)} />
          )}
        </div>
        <p
          className={`text-xs text-left text-purple-800 
          ${close ? "hidden" : "block"} 
          }`}
        >
          {describtion}
        </p>
      </div>
    </>
  );
}
export default Accordian;
