/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import MinusIcon from "./MinusIcon";
import PlusIcon from "./PlusIcon";

function Accordian({ title, describtion, open, onClick }) {
  return (
    <>
      <div className="rounded-sm shadow shadow-gray-200  p-2 ">
        <div className="flex justify-between items-center">
          <p className="text-purple-950 text-left text-xs md:text-sm text-bold  ">
            {title}
          </p>
          {open ? (
            <MinusIcon onClick={onClick} />
          ) : (
            <PlusIcon onClick={onClick} />
          )}
        </div>
        <p
          className={`text-xs text-left text-purple-800 
          ${open ? "block" : "hidden"} 
          }`}
        >
          {describtion}
        </p>
      </div>
    </>
  );
}
export default Accordian;
