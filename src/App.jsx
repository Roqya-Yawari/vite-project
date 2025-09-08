/* eslint-disable react/react-in-jsx-scope */

import "./App.css";
import Accordian from "./components/Accordian";

function App() {
  return (
    <>
      <div className="container absolute   left-1/2  -translate-x-1/2 rounded-md  bg-white w-100  shadow-sm shadow-gray-200 p-3  top-[10%] md:top-1/2 md:-translate-y-1/2 max-sm:w-[250px] md:w-[400px]  ">
        <div className="flex justify-start p-3 items-center gap-3">
          <img
            className="w-5"
            src="../src/assets/images/icon-star.svg"
            alt="star icon"
          />
          <h1 className="text-2xl font-bold text-purple-950">FAQs</h1>
        </div>
        <Accordian
          defaultAccordion={false}
          title="What is Frontend Mentor, and how will it help me?"
          describtion="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
        />
        <Accordian
          defaultAccordion={true}
          title="Can I use Frontend Mentor projects in my portfolio?"
          describtion="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
        />{" "}
        <Accordian
          defaultAccordion={true}
          title="How can I get help if I'm stuch on a challenge?"
          describtion="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
        />{" "}
        <Accordian
          defaultAccordion={true}
          title="Is Frontend Mentor free?"
          describtion="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
        />
      </div>
    </>
  );
}

export default App;
// -----------------------------------------------------------
// import React, { useState } from "react";
// import plusicon from "../src/assets/images/icon-plus.svg";
// import minusicon from "../src/assets/images/icon-minus.svg";

// // Plus icon component
// function PlusIcon({ onClick }) {
//   return (
//     <img
//       src={plusicon}
//       alt="plus"
//       className="w-5 cursor-pointer"
//       onClick={onClick}
//     />
//   );
// }
// // Minus icon component
// function MinusIcon({ onClick }) {
//   return (
//     <img
//       src={minusicon}
//       alt="minus"
//       className="w-5 cursor-pointer"
//       onClick={onClick}
//     />
//   );
// }

// // Accordion component
// export default function Accordion() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="p-4 border rounded w-64">
//       {open ? (
//         <MinusIcon onClick={() => setOpen(false)} />
//       ) : (
//         <PlusIcon onClick={() => setOpen(true)} />
//       )}

//       {open && <p className="mt-2 text-xs text-purple-800">hhhhhhhh</p>}
//     </div>
//   );
// }
