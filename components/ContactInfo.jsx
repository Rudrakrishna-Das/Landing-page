"use client";
import Image from "next/image";
import { useState } from "react";

const ContactInfo = () => {
  const [openHobbycure, setOpenHobbycure] = useState(false);
  const [openHowDoI, setOpenHowDoI] = useState(false);
  const [openQuickLinks, setOpenQuickLinks] = useState(false);
  return (
    <section className=" duration-500 p-16 max-sm:px-4 flex max-lg:gap-10 max-lg:flex-col lg:justify-between lg:items-center">
      {/* Hobbycure */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <h1 className="text-[#08090A] font-extrabold">Hobbycue</h1>
          <Image
            onClick={() => setOpenHobbycure((prevState) => !prevState)}
            className="invert object-contain lg:hidden"
            src={`/icons/${openHobbycure ? "up.png" : "down.png"}`}
            alt="up"
            height={10}
            width={10}
          />
        </div>
        <ul
          className={`text-slate-500 max-lg:${openHobbycure ? "" : "hidden"}`}
        >
          <li className="hover:underline cursor-pointer">About Us</li>
          <li className="hover:underline cursor-pointer">Our Services</li>
          <li className="hover:underline cursor-pointer">Work with Us</li>
          <li className="hover:underline cursor-pointer">FAQ</li>
          <li className="hover:underline cursor-pointer">Contact Us</li>
        </ul>
      </div>
      {/* How do i */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <h1 className="text-[#08090A] font-extrabold">How Do I</h1>
          <Image
            onClick={() => setOpenHowDoI((prevState) => !prevState)}
            className="invert object-contain lg:hidden"
            src={`/icons/${openHowDoI ? "up.png" : "down.png"}`}
            alt="up"
            height={10}
            width={10}
          />
        </div>
        <ul className={`text-slate-500 max-lg:${openHowDoI ? "" : "hidden"}`}>
          <li className="hover:underline cursor-pointer">Sign Up</li>
          <li className="hover:underline cursor-pointer">Add a Listing</li>
          <li className="hover:underline cursor-pointer">Claim Listing</li>
          <li className="hover:underline cursor-pointer">Post a Querry</li>
          <li className="hover:underline cursor-pointer">Add a Blog Post</li>
          <li className="hover:underline cursor-pointer">Other Queries</li>
        </ul>
      </div>
      {/* Quick Links */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <h1 className="text-[#08090A] font-extrabold">Quick Links</h1>
          <Image
            className="invert object-contain lg:hidden"
            onClick={() => setOpenQuickLinks((prevState) => !prevState)}
            src={`/icons/${openQuickLinks ? "up.png" : "down.png"}`}
            alt="up"
            height={10}
            width={10}
          />
        </div>
        <ul
          className={`text-slate-500 max-lg:${openQuickLinks ? "" : "hidden"}`}
        >
          <li className="hover:underline cursor-pointer">Listings</li>
          <li className="hover:underline cursor-pointer">Blog Posts</li>
          <li className="hover:underline cursor-pointer">Shop/Store</li>
          <li className="hover:underline cursor-pointer">FAQ</li>
          <li className="hover:underline cursor-pointer">Community</li>
        </ul>
      </div>
      {/* SOCIAL */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <h1 className="font-extrabold">Social Media</h1>
          <div className="flex gap-4 max-sm:flex-col">
            <div className="flex gap-4">
              <Image
                src="/icons/facebook.svg"
                alt="facebook"
                height={20}
                width={20}
              />
              <Image
                src="/icons/twitter.svg"
                alt="twitter"
                height={20}
                width={20}
              />
              <Image
                src="/icons/insta.svg"
                alt="insta"
                height={20}
                width={20}
              />
              <Image
                src="/icons/pinterest.svg"
                alt="pinterest"
                height={20}
                width={20}
              />
            </div>
            <div className="flex gap-4">
              <Image
                src="/icons/google.svg"
                alt="google"
                height={20}
                width={20}
              />
              <Image
                src="/icons/youtube.svg"
                alt="youtube"
                height={20}
                width={20}
              />
              <Image
                src="/icons/telegram.svg"
                alt="telegram"
                height={20}
                width={20}
              />
              <Image src="/icons/mail.svg" alt="mail" height={20} width={20} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <label className="font-extrabold" htmlFor="invite">
            Invite Friends
          </label>
          <div className="flex items-center">
            <input
              className="border-[1px] border-v-1 rounded-l-lg px-3 py-2 max-sm:px-1 max-sm:w-[80%]"
              id="invite"
              type="email"
              placeholder="Email ID"
            />
            <button className="bg-v-1 text-white px-3 py-2 rounded-r-lg border-[1px] border-v-1 hover:opacity-85">
              Invite
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
