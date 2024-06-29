"use client";
import { useState } from "react";

const Explore = ({ showExplore }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`bg-white border-2 border-slate-400 fixed top-[3.1rem] left-[57%]  duration-500  ${
        !showExplore && !isHovered ? "hidden" : ""
      }`}
    >
      <p className="border-b-2 border-slate-600 p-2 hover:bg-v-1 hover:text-white cursor-pointer">
        People - Community
      </p>
      <p className="border-b-2 border-slate-600 p-2 hover:bg-v-1 hover:text-white cursor-pointer">
        Places - Events
      </p>
      <p className="border-b-2 border-slate-600 p-2 hover:bg-v-1 hover:text-white cursor-pointer">
        Programs - Events
      </p>
      <p className="border-b-2 border-slate-600 p-2 hover:bg-v-1 hover:text-white cursor-pointer">
        Products - Store
      </p>
      <p className=" p-2 hover:bg-v-1 hover:text-white cursor-pointer">Blogs</p>
    </section>
  );
};

export default Explore;
