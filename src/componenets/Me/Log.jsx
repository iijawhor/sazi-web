import React, { useState } from "react";
const Log = ({ attendance, grossHour }) => {
  const [showLogActions, setShowLogActions] = useState(false);
  return (
    <div className="card !p-2 ">
      <div className="flex justify-between items-center">
        <p className="w-full text-start text-sm font-[sans-serif] tracking-wide text-gray-800">
          {attendance?.date}
        </p>

        <p className="w-full text-center text-sm font-[sans-serif] tracking-wide text-gray-800">
          {grossHour}
        </p>
        <p className="w-full text-center text-sm font-[sans-serif] tracking-wide text-gray-800">
          {attendance?.loggedInAt}
        </p>
        <div className="w-full text-end !mr-2 text-sm font-[sans-serif] tracking-wide ">
          <button
            onClick={() => setShowLogActions((prev) => !prev)}
            className="cursor-pointer text-blue-900 font-semibold"
          >
            ...
          </button>
        </div>
      </div>
      {showLogActions && (
        <ul
          tabIndex={0}
          className="menu absolute menu-sm  dropdown-content bg-base-100 rounded-sm z-1 mt-3 right-10 top-1 w-25 items-center shadow"
        >
          <li>
            <button className="!p-1 w-full  tracking-wider text-[#2196F3] font-[sans-serif] rounded-none tracking-wide">
              Regularize
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Log;
