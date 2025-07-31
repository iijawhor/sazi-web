import { Outlet } from "react-router-dom";
import { Sidebar, Navbar } from "../allFiles";
import { useState } from "react";
const Body = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="flex flex-col h-screen overflow-none">
      {/* Header */}
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      {/* Main content area with sidebar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          // className={` lg:w-64 bg-darkblue text-white overflow-y-auto h-full flex flex-col gap-1 bg-[#142239]  ${
          //   isSidebarOpen ? "hidden lg:block" : "block"
          // }`}
          className={`lg:w-64 bg-darkblue text-white overflow-y-auto h-full flex flex-col gap-1 bg-[#142239]
  fixed lg:static top-14 left-0 transform transition-transform duration-300 ease-in-out
  ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
        >
          <Sidebar isSidebarOpen={isSidebarOpen} />
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-base-200 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Body;
