"use client";
import Explore from "@/components/Explore";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

const RootLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const toggleSideBarHandler = () => {
    setSidebarOpen((prevState) => !prevState);
  };
  const closeSidebarHandler = () => {
    setSidebarOpen(false);
  };
  const toggleExploreHandler = () => {
    setExploreOpen((prevState) => !prevState);
  };

  return (
    <main>
      <Navbar
        sidebartoggle={toggleSideBarHandler}
        exploreToggle={toggleExploreHandler}
      />
      {sidebarOpen && <Sidebar />}
      <main onClick={closeSidebarHandler} className="w-full">
        <Explore showExplore={exploreOpen} />
        {children}
      </main>
    </main>
  );
};

export default RootLayout;
