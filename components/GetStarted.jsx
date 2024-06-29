"use client";
import Image from "next/image";
import { useEffect } from "react";

const GetStarted = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "Home") {
      scrollToTop();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <section className="p-16 max-sm:px-4 bg-[#e9f8fd] flex flex-col gap-10 duration-500">
      <div className="flex flex-col gap-10">
        <h1 className="text-2xl font-bold italic max-sm:text-xl">
          Your <span className="text-v-1">Hobby</span>, Your{" "}
          <span className="text-b-1">Community...</span>
        </h1>
        <button className="bg-v-1 w-32 text-white  px-4 py-2 rounded-lg hover:opacity-85">
          Get Started
        </button>
      </div>
      <div
        onClick={scrollToTop}
        className="self-end flex flex-col items-center gap-2 max-sm:hidden"
      >
        <button className="bg-white p-4 rounded-full shadow-2xl shadow-black">
          <Image src="/icons/up.png" alt="group" width={10} height={30} />
        </button>
        <h1 className="text-xs text-v-1 bg-white px-3 py-1 shadow-2xl shadow-black">
          Go to top(Ctrl+Home)
        </h1>
      </div>
      <Image src="/icons/Group99.png" alt="group" width={1200} height={30} />
    </section>
  );
};

export default GetStarted;
