const Timings = ({
  breakDuration = "45",
  breakTiming = "1:15 PM to 2:00 PM",
  classDuration = "6 hours 30 mins",
  classTiming = "10:00 AM to 4:30 PM"
}) => {
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const day = new Date(1970, 0, 4 + i); // 1970-01-04 is Sunday
    return day.toLocaleDateString("en-US", { weekday: "long" });
  });
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  // added key to map fir git push
  return (
    <div className="flex flex-col w-full gap-1">
      <h1 className="font-inter text-sm tracking-wide">Timings</h1>
      <div className="card h-48 w-full !p-2 bg-white text-black flex flex-col shadow-sm">
        <div className="card-actions justify-start h-full">
          <div className="flex gap-3 items-center">
            {weekDays.map((day, index) => (
              <span
                key={index}
                className={`${
                  day === today
                    ? "bg-blue-500 text-center border-blue-400 border text-white"
                    : ""
                } border h-5 w-5 font-semibold text-blue-900 text-xs text-center rounded-sm`}
              >
                {day.charAt(0)}
              </span>
            ))}
          </div>
        </div>
        <div className="card-actions justify-start h-fit items-start ">
          <p className="text-xs font-mono text-gray-600 w-full items-center flex justify-between">
            <span className="tracking-tighter text-xs">
              Today({classTiming})
            </span>
            <span className="bg-[#2196F3] h-2 w-2 rounded-full"></span>
            <span className="tracking-tighter">Break Timing {breakTiming}</span>
          </p>

          <div className="h-1 w-full flex">
            <span className="bg-[#2196F3] flex flex-4 rounded-l-lg"></span>
            <span className="bg-blue-200 flex-1"></span>
            <span className="bg-[#2196F3] flex-4 rounded-r-lg"></span>
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="text-xs font-mono tracking-tighter text-gray-600">
              Duration {classDuration}.
            </p>
            <p className="flex items-center text-center text-xs font-mono text-gray-600">
              <span>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 150 150"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    fill="none"
                    stroke="#2196F3"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="translate(20,30)"
                  >
                    <ellipse cx="55" cy="95" rx="45" ry="8" />
                    <path d="M20 60 H80 A15 15 0 0 1 95 75 V80 A20 20 0 0 1 75 100 H35 A20 20 0 0 1 15 80 V75 A15 15 0 0 1 20 60 Z" />

                    <path d="M95 75 Q110 80, 95 95" />

                    <path d="M35 30 C30 15,45 15,40 0" />
                    <path d="M55 30 C50 15,65 15,60 0" />
                    <path d="M75 30 C70 15,85 15,80 0" />
                  </g>
                </svg>
              </span>
              <span>{breakDuration} mins.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timings;
