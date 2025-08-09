import React from "react";
import { useSelector } from "react-redux";
import { calculateGrossHour, Log } from "../../allFiles";
const AttendanceLogs = () => {
  const logHeadings = [
    { name: "attendance log", id: 1 }
    // { name: "attendance Requests", id: 1 }
  ];
  const allAttendance = useSelector(
    (state) => state.attendance?.allAttendance?.data || []
  );
  const grossHour = calculateGrossHour(allAttendance);
  return (
    <div className="card flex flex-col gap-1 h-full">
      <div className="card !p-2 card-border rounded-sm shadow-sm bg-base-100 ">
        <div className="flex gap-3">
          {logHeadings.map((item, index) => (
            <button
              key={index}
              className="text-sm font-[sans-serif]
                         text-gray-600 tracking-wide capitalize cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <div className="card !p-s card-border h-full overflow-scroll shadow-sm bg-base-100 ">
        <div className=" bg-gray-100 !p-1 w-full flex justify-between">
          <p className="w-full text-start !ml-3 font-[sans-serif] text-sm tracking-wide text-gray-600">
            Date
          </p>
          <p className="w-full text-center font-[sans-serif] text-sm tracking-wide text-gray-600">
            Gross Hour
          </p>
          <p className="w-full text-center font-[sans-serif] text-sm tracking-wide text-gray-600">
            Arrival
          </p>
          <p className="w-full font-semibold text-blue-900 text-end !mr-5 font-[sans-serif] text-sm tracking-wide">
            ...
          </p>
        </div>
        <div className=" flex flex-col gap-1 !p-2 ">
          {allAttendance.map((attendance, index) => (
            <div key={attendance._id || index}>
              <Log
                attendance={attendance}
                grossHour={grossHour[index]} // match gross hour to correct attendance
              />
              <hr className="border border-gray-100 " />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttendanceLogs;
