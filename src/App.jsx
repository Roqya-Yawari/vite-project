/* eslint-disable react/react-in-jsx-scope */

import "./App.css";
import Accordian from "./components/Accordian";
import star from "../src/assets/images/icon-star.svg";
import { useState } from "react";
import { accordions } from "./data";

function App() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <div className="container absolute   left-1/2  -translate-x-1/2 rounded-md  bg-white w-100  shadow-sm shadow-gray-200 p-3  top-[10%] md:top-1/2 md:-translate-y-1/2 max-sm:w-[300px] md:w-[400px]  ">
        <div className="flex justify-start p-3 items-center gap-3">
          <img className="w-5" src={star} alt="star icon" />
          <h1 className="text-2xl font-bold text-purple-950">FAQs</h1>
        </div>
        {accordions.map((accordion, index) => (
          <Accordian
            key={index}
            title={accordion.title}
            describtion={accordion.describtion}
            open={open === index}
            onClick={() => setOpen(open === index ? null : index)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
