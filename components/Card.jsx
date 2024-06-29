"use client";
import Image from "next/image";
import { useState } from "react";

const Card = ({
  image,
  alt,
  title,
  description,
  color,
  hoverImage,
  isSelected,
  onSelect,
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      onClick={onSelect}
      className={` duration-500 border-[1px] border-v-1 py-10 max-md:py-5 px-14 flex flex-col gap-6 rounded-lg cursor-pointer overflow-x-auto max-sm:px-4 max-sm:text-center hover:text-white hover:${
        isHover ? `text-white ${color}` : ""
      } ${isHover || isSelected ? `text-white ${color}` : ""}`}
    >
      <div className="flex gap-4 items-center max-sm:justify-center">
        <Image
          className="w-7"
          src={isHover || isSelected ? hoverImage : image}
          alt={alt}
          height={20}
          width={20}
        />
        <h1 className="font-extrabold">{title}</h1>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Card;
