const Sidebar = () => {
  return (
    <aside className="bg-v-1 backdrop-blur-lg shadow-sm h-screen fixed top-0 left-0 w-52 z-10 md:hidden duration-500">
      <button className="text-white border-2 borde-white w-[90%] py-2 rounded-lg mx-3 my-20 duration-500">
        Sign In
      </button>
    </aside>
  );
};

export default Sidebar;
