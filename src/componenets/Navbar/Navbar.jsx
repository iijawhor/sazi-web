import { useCallback, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LiveClock, useDebounce } from "../../allFiles";
import axios from "axios";
const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("");
  const handleSearch = useCallback(async (searchQuery) => {
    try {
      const searchResults = await axios.get(
        `http://localhost:8000/api/v1/users/search?query=${searchQuery}`
      );
      setSearchResults(searchResults.data);
    } catch (error) {
      let errorMessage = "Something went wrong. Please try again.";

      if (error.response) {
        // ✅ Server responded with an error status
        errorMessage =
          error.response.data?.message || "Failed to fetch search results.";
      } else if (error.request) {
        // ✅ No response received from the server
        errorMessage = "No response from server. Please check your connection.";
      } else {
        // ✅ Error setting up the request
        errorMessage = `Error: ${error.message}`;
      }

      setError(errorMessage);
    }
  }, []);
  const debouncedSearch = useDebounce(handleSearch, 500);

  // ✅ Run search whenever searchQuery changes
  useEffect(() => {
    if (searchQuery.trim()) {
      debouncedSearch(searchQuery);
    }
  }, [searchQuery, debouncedSearch]);

  return (
    <>
      <div className="navbar !pr-2 flex gap-2 min-h-14 shadow-sm bg-[#2196F3]">
        <div
          className=" !p-1 lg:flex-1 w-50 flex-col  lg:min-w-64 flex items-center 
        justify-center lg:min-h-14 max-h-14 bg-white !input-sm"
        >
          <Link to="/" className="btn btn-ghost">
            <span className="lg:text-2xl hover:bg-none font-extrabold tracking-tight text-[#2196F3]">
              SAZi
            </span>
          </Link>
          <div className="lg:hidden " onClick={toggleSidebar}>
            {isSidebarOpen ? (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </span>
            ) : (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            )}
          </div>
        </div>
        <div className="flex-4 hidden lg:block flex text-center justify-center">
          <LiveClock />
        </div>
        <div className="flex flex  w-full items-center justify-between lg:w-auto lg:gap-2 gap-0.5 lg:!mr-5 !mr-0.5">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input  md:w-full !outline-none border-none !pl-1 input-bordered lg:!w-64 md:w-auto  input input-info !p-2  input-sm"
          />
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn sbtn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm s dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 shadow"
            >
              <li>
                <Link className="!p-1 rounded-none tracking-wide">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link className="!p-1 rounded-none tracking-wide">
                  Settings
                </Link>
              </li>
              <li className="rounded-none">
                <Link className="!p-1 rounded-none tracking-wide">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
