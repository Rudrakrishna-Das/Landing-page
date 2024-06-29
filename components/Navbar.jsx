import Image from "next/image";

const Navbar = ({ sidebartoggle, exploreToggle }) => {
  return (
    <nav className="sticky top-0 left-0 bg-white p-2 flex justify-around items-center max-sm:mx-1 duration-500">
      {/* LOGO */}
      <div className="flex items-center gap-2">
        <h1 className=" border-[3px] border-v-1 text-sky-500 font-bold max-sm:text-lg max-sm:py-1 max-sm:px-2 text-2xl italic py-2 px-3">
          h
        </h1>
        <div>
          <h1 className="text-sky-500 font-bold max-sm:text-base max-md:text-xl text-2xl italic">
            hobby<span className="text-v-1">cue</span>
          </h1>
          <p className="text-slate-400 font-semibold max-sm:text-[9px] max-md:text-xs text-sm italic">
            Your hobby, Your Community
          </p>
        </div>
      </div>
      {/* SEARCHBAR */}
      <div className="flex max-lg:hidden">
        <input
          type="text"
          className="bg-slate-200 py-2 px-3 rounded-l-lg"
          placeholder="seach here..."
        />
        <button className="bg-v-1 p-2 text-3xl rounded-r-lg">
          <Image src="/icons/search.png" alt="search" height={20} width={20} />
        </button>
      </div>

      {/* Explore */}
      <div
        onMouseOver={exploreToggle}
        onMouseOut={exploreToggle}
        className="flex gap-2 items-center cursor-pointer max-lg:hidden"
      >
        <Image src="/icons/Explore.png" alt="explore" height={25} width={25} />
        <h1>Explore</h1>
        <Image
          src="/icons/down.png"
          className="object-contain"
          alt="explore"
          height={12}
          width={12}
        />
      </div>
      {/* Hobbies */}
      <div className="flex gap-2 items-center max-lg:hidden">
        <Image src="/icons/Hobbies.png" alt="explore" height={25} width={25} />
        <h1>Hobbies</h1>
        <Image
          src="/icons/down.png"
          className="object-contain"
          alt="explore"
          height={12}
          width={12}
        />
      </div>
      {/* Icons */}
      <div className="flex gap-4">
        <Image
          className="lg:hidden invert object-contain"
          src="/icons/search.png"
          alt="search"
          height={20}
          width={20}
        />
        <Image
          className="object-contain max-sm:hidden"
          src="/icons/bookmark.png"
          alt="bookmark"
          height={15}
          width={15}
        />
        <Image
          className="object-contain"
          src="/icons/bell.png"
          alt="bell"
          height={16}
          width={16}
        />
        <Image
          className="object-contain max-sm:hidden"
          src="/icons/cart.png"
          alt="cart"
          height={20}
          width={20}
        />
        <button className="text-v-1 border-2 border-v-1 px-3 py-2 rounded-lg hover:bg-v-1 hover:text-white duration-500 max-sm:hidden">
          Sign In
        </button>
        <button onClick={sidebartoggle}>
          <Image
            className="object-contain sm:hidden"
            src="/icons/hamburger.png"
            alt="cart"
            height={20}
            width={20}
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
