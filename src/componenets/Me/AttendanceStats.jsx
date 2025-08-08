import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAttendance } from "../../store/slices/attendanceSlice";
import { calculateAverageHours, decimalHoursToHMS } from "../../allFiles";
const AttendanceStats = () => {
  const [at, setAt] = useState({});
  // calculate average hours per day and on time arrival in %
  // FOR ME AND MY TEAM
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth?.user?._id);
  const apiUrl = `http://localhost:8000/api/v1/attendance/get-attendance/${userId}`; // ✅ Single API

  const accessToken = useSelector((state) => state.auth?.token);
  const allAttendance = useSelector(
    (state) => state.attendance?.allAttendance?.data ?? []
  );
  const averageHours = calculateAverageHours(allAttendance);
  const totalAverageDuration = decimalHoursToHMS(averageHours.toFixed(2));
  useEffect(() => {
    if (!userId) return; //  skip if userId not ready
    try {
      dispatch(getAttendance({ apiUrl, accessToken }));
    } catch (error) {
      console.log("error..", error);
    }
  }, []);
  return (
    <div className="flex flex-col w-full gap-1">
      <h1 className="text-sm">Attendance Stats</h1>
      <div className="card h-48 w-full !p-1 bg-white text-black flex flex-col justify-start items-start shadow-sm">
        <button className="text-[#2196F3] disabled font-semibold !p-1 !pt-0 !pb-0 rounded text-sm tracking-wide font-inter ">
          This Month
        </button>
        <div className="card-actions justify-center items-center w-full h-full !p-1 !pt-0 !pb-0 flex flex-col">
          <div className=" w-full flex justify-between">
            <div className="">
              <p className="flex items-center gap-2">
                {" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#2563EB"
                    width="24"
                    height="24"
                  >
                    <circle cx="12" cy="8" r="4" strokeWidth="2" />
                    <path
                      strokeWidth="2"
                      strokeLinejoin="round"
                      d="M4 20c0-4 8-4 8-4s8 0 8 4"
                    />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-blue-900 tracking-wide">
                  Me{" "}
                </span>
              </p>
            </div>
            <div className="">
              <p className="flex flex-col gap-1  text-sm ">
                <span className="text-blue-900 text-xs font-semibold tracking-tight">
                  AVG HRS/DAY
                </span>
                <span className="tracking-tighter text-[#2196F3] font-semibold">
                  {totalAverageDuration}
                </span>
              </p>
            </div>
          </div>
          <hr className="border border-gray-100 w-full" />
          <div className=" w-full flex justify-between">
            <div className="">
              <p className="flex items-center gap-2">
                {" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#2563EB"
                    stroke-width="2"
                    width="24"
                    height="24"
                  >
                    <circle cx="12" cy="7" r="4" />
                    <path stroke-linejoin="round" d="M6 21v-2a6 6 0 0112 0v2" />

                    <circle cx="6" cy="11" r="3" />
                    <path stroke-linejoin="round" d="M2 21v-1a4 4 0 016 0v1" />

                    <circle cx="18" cy="11" r="3" />
                    <path stroke-linejoin="round" d="M16 21v-1a4 4 0 016 0v1" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-blue-900 tracking-wide">
                  My Class{" "}
                </span>
              </p>
            </div>
            <div className="">
              <p className="flex flex-col gap-1  text-sm ">
                <span className="text-blue-900 text-xs font-semibold tracking-tight">
                  AVG HRS/DAY
                </span>
                <span className="tracking-tighter text-[#2196F3] font-semibold">
                  {totalAverageDuration}
                </span>
                My Class is not implemented yet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceStats;
