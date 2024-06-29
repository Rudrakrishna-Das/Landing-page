"use client";
import Image from "next/image";
import { useState } from "react";
import AllCards from "./AllCards";

const AddNew = () => {
  const [canSelect, setCanSelect] = useState(false);
  return (
    <section className="bg-[#eefbff]  p-16 max-sm:px-4 duration-500">
      <div className="flex flex-col gap-8 bg-white p-10 border-2 border-slate-200 rounded-lg">
        <div className="flex gap-8 max-sm:gap-3">
          <Image src="/icons/add.svg" alt="add" height={25} width={25} />
          <h1 className="font-bold text-xl max-sm:text-base">Add your own</h1>
        </div>
        <p>
          Are you a teacher or expert? Do you sell or rent out equipment, venue
          or event tickets? Or, you know someone who should be on hobbycue? Go
          ahead and Add your Own page
        </p>
        <button
          onClick={() => setCanSelect((prevState) => !prevState)}
          className="border-[1px] border-v-1 w-32 py-2 font-bold text-v-1 rounded-lg hover:bg-v-1 hover:text-white"
        >
          {canSelect ? "Close" : "Add New"}
        </button>
        {canSelect && <AllCards />}
      </div>
    </section>
  );
};

export default AddNew;
