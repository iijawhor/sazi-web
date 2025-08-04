import React, { useState } from "react";
import { LiveClock } from "../../allFiles";
import { useDispatch, useSelector } from "react-redux";
import { updateAttendanceStatus } from "../../store/slices/attendanceSlice";

const Actions = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.attendance);
  const accessToken = useSelector((state) => state.auth?.token);
  console.log("Token in Action", accessToken);
  const [loggedIn, setLoggedIn] = useState(false);
  console.log("AAAAAAAAAAA", loggedIn);

  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const apiUrl = "http://localhost:8000/api/v1/attendance/attendance"; // ✅ Single API
  // ✅ Function to call API via Redux Thunk
  const handleAttendanceApi = async (status) => {
    try {
      await dispatch(
        updateAttendanceStatus({
          apiUrl,
          status, // "login" or "logout"
          accessToken,
          timestamp: new Date().toISOString()
        })
      ).unwrap();
      setLoggedIn(status === "in");
    } catch (err) {
      console.error("API Error:", err);
    }
  };

  // ✅ Handle Login or Show Logout Confirm
  const handleAttendance = () => {
    if (loggedIn) {
      setShowLogoutConfirm((prev) => !prev);
    } else {
      handleAttendanceApi("in");
    }
  };

  const handleLogoutConfirm = () => {
    handleAttendanceApi("out");
    setShowLogoutConfirm((prev) => !prev);
    setLoggedIn((prev) => !prev);
  };

  const handleCancelConfirm = () => {
    setShowLogoutConfirm(false);
  };

  return (
    <div className="flex flex-col w-full gap-1">
      <h1>Actions</h1>
      <div className="card h-48 w-full !p-1 bg-white text-black flex flex-row justify-center items-center shadow-sm">
        <div className="card-actions justify-center items-center w-full h-fit">
          <LiveClock
            parentClass="gap-1"
            timeClass="font-bold text-[#2196F3] text-center border tracking-wider border-blue-200 rounded-sm"
            dateClass="text-blue-900 font-semibold font-mono text-xs"
          />
        </div>

        <div className="card-actions justify-center items-center w-full h-fit">
          <div className="flex gap-2 w-fit">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 text-[#2196F3]"
              >
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path
                  d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"
                  strokeWidth="2"
                />
              </svg>
            </span>

            {/* ✅ Main Button */}
            <button
              onClick={handleAttendance}
              disabled={loading}
              className={`cursor-pointer text-xs font-extrabold font-inter text-center ${
                loggedIn ? "text-red-500" : "text-blue-900"
              }`}
            >
              {loading
                ? "Processing..."
                : !loggedIn
                ? "Web Log In"
                : "Web Log Out"}
            </button>

            {/* ✅ Logout Confirmation Popup */}
            {showLogoutConfirm && (
              <div className="fixed right-10 !p-1 flex flex-col bg-white shadow-lg border border-gray-200 rounded p-3 gap-4 w-40 z-50">
                <div className="text-red-500 font-bold text-center">
                  Confirm Logout
                </div>
                <div className="flex w-full justify-between">
                  <button
                    onClick={handleCancelConfirm}
                    className="text-xs border cursor-pointer !pr-1 !pl-1 border-blue-200 text-[#2196F3] rounded px-3 py-1"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleLogoutConfirm}
                    className="text-xs border !pr-1 !pl-1 border-red-200 text-red-500 cursor-pointer rounded px-3 py-1"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* ✅ Error Display */}
          {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Actions;
