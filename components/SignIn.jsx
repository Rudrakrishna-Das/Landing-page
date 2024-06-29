"use client";
import Image from "next/image";
import { useState } from "react";

const getPasswordStrength = (password) => {
  let strength = 0;
  if (password.length > 5) strength++;
  if (password.length > 7) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;
  return strength;
};

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [changeTab, setChnageTab] = useState(false);
  const [password, setPassword] = useState("");
  const strength = getPasswordStrength(password);

  const strengthPercent = (strength / 5) * 100;
  let strengthColor = "bg-red-500";

  if (strengthPercent > 20) strengthColor = "bg-orange-500";
  if (strengthPercent > 40) strengthColor = "bg-yellow-500";
  if (strengthPercent > 60) strengthColor = "bg-lime-500";
  if (strengthPercent > 80) strengthColor = "bg-green-500";

  const passwordShow = () => {
    setShowPassword(true);
  };
  const passwordHide = () => {
    setShowPassword(false);
  };
  const sighnIntab = () => {
    setPassword("");
    setChnageTab(false);
  };
  const joinIntab = () => {
    setPassword("");
    setChnageTab(true);
  };
  return (
    <section className="bg-slate-200 px-8 pt-8 flex gap-14 justify-around max-lg:flex-col duration-500">
      {/* Details */}
      <div className=" lg:w-[50%]">
        <div className="flex flex-col gap-8 ">
          <h1 className="text-2xl italic font-bold max-sm:text-xl">
            Explore your <span className="text-sky-600">hobby</span> or{" "}
            <span className="text-v-1">passion</span>{" "}
          </h1>
          <p className="max-sm:text-xs">
            sign-in to interact with a community of fellow hobbyits and an
            eco-system of experts,teachers,suppliers,classes, workshops and
            places to practice, perticipate or perform. Yoy hobby maybe visula
            or performing arts,games,gardening,model making, cooking, indoor or
            outdoor activitise...
          </p>
          <p className="max-sm:text-xs">
            If you are an expert or a seller, you can add your Listing and
            promote yourself,your students, products, service or events, Hop on
            your hobby horse and enjoy the ride.
          </p>
        </div>
        <Image
          className="w-full max-lg:hidden"
          src="/icons/Group 27.svg"
          alt="group1"
          height={10}
          width={450}
        />
      </div>
      <div className="text-center max-lg:mx-auto max-sm:w-full">
        {/* TAB Button */}
        <div className="flex flex-col gap-5 ">
          <div className="flex gap-4 max-lg:justify-center">
            <button
              onClick={sighnIntab}
              className={`font-extrabold text-lg ${
                !changeTab ? "text-v-1 underline underline-offset-8 " : ""
              }`}
            >
              Sign In
            </button>
            <button
              onClick={joinIntab}
              className={`font-extrabold text-lg ${
                changeTab ? "text-v-1 underline underline-offset-8 " : ""
              }`}
            >
              Join In
            </button>
          </div>
          {/* OAUTH Button */}
          <div className="flex flex-col gap-2">
            <button className="flex items-center justify-between w-full border-2 border-v-1 py-1 px-3 rounded-lg">
              <Image
                src="/icons/google.png"
                alt="google"
                height={15}
                width={15}
              />
              <h1 className="font-bold text-center max-sm:text-xs">
                Continue With Google
              </h1>
              <h1></h1>
            </button>
            <button className="flex  items-center justify-between  w-full border-2 border-v-1 py-1 px-3 rounded-lg">
              <Image
                src="/icons/Facebook.png"
                alt="google"
                height={15}
                width={15}
              />
              <h1 className="font-bold max-sm:text-xs">
                Continue With Facebook
              </h1>
              <h1></h1>
            </button>
          </div>
          {/* contact with */}
          <div className="flex gap-5 max-sm:gap-2 justify-center">
            <Image
              className="object-contain max-sm:w-[20%]"
              src="/icons/line.png"
              alt="line"
              height={5}
              width={100}
            />
            <p className="max-sm:text-xs">Or connect with</p>
            <Image
              className="object-contain max-sm:w-[20%]"
              src="/icons/line.png"
              alt="line"
              height={5}
              width={100}
            />
            <hr />
          </div>
          {/* Signin form */}
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email"
                className="px-3 py-2 rounded-lg"
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="px-3 py-2 rounded-lg"
                value={password ? password : ""}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={passwordHide} type="button">
                <Image
                  className={`relative -top-[2.4rem] ${
                    changeTab ? "-right-[23rem]" : "-right-[22rem]"
                  } max-sm:-right-[85%] ${!showPassword ? "hidden" : ""}`}
                  src="/icons/eye.png"
                  alt="eye"
                  height={20}
                  width={20}
                />
              </button>
              <button onClick={passwordShow} type="button">
                <Image
                  className={`relative -top-[2.9rem] ${
                    changeTab ? "-right-[23rem]" : "-right-[22rem]"
                  } max-sm:-right-[85%] ${showPassword ? "hidden" : ""} `}
                  src="/icons/eyeclose.png"
                  alt="eye"
                  height={20}
                  width={20}
                />
              </button>
            </div>
            {/* Password strength */}
            {changeTab && (
              <div className="flex justify-between items-center -mt-14">
                <div className="w-[40%] bg-white rounded h-2">
                  <div
                    className={`h-full rounded ${strengthColor}`}
                    style={{ width: `${strengthPercent}%` }}
                  ></div>
                </div>
                <p className="mt-2 text-sm">
                  Strength:{" "}
                  {strength === 0
                    ? "Too weak"
                    : strength === 5
                    ? "Very strong"
                    : "Moderate"}
                </p>
              </div>
            )}
            {/* Remember me */}
            {!changeTab && (
              <div className="flex justify-between items-center -mt-8">
                <div className="flex items-center gap-1">
                  <input id="remember" type="checkbox" />
                  <label className="max-sm:text-xs" htmlFor="remember">
                    Remember me
                  </label>
                </div>
                <p className="flex items-center gap-1 max-sm:text-xs">
                  <Image
                    className="object-contain"
                    src="/icons/lock.png"
                    alt="lock"
                    height={20}
                    width={15}
                  />
                  Forgot Password?
                </p>
              </div>
            )}
            {/* Declaration */}
            {changeTab && (
              <p className=" w-[90%] mx-auto text-xs text-gray-400 ">
                By continuing, you agree to our{" "}
                <span className="font-extrabold text-black">
                  Terms os Services
                </span>{" "}
                and{" "}
                <span className="font-extrabold text-black">
                  Privacy policy
                </span>
                .
              </p>
            )}

            <button
              onClick={(e) => e.preventDefault()}
              className="border-2 border-v-1 py-2 rounded-lg text-white bg-v-1 hover:opacity-80"
            >
              {changeTab ? "Agree and Continue" : "Continue"}
            </button>
          </form>
        </div>
      </div>
      <Image
        className="mx-auto lg:hidden"
        src="/icons/Group 27.svg"
        alt="group1"
        height={10}
        width={850}
      />
    </section>
  );
};

export default SignIn;
