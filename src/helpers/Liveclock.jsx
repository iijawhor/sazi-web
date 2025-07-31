import { useState, useEffect } from "react";

export const LiveClock = () => {
  const [currentTimeAndDate, setCurrentTimeAndDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTimeAndDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentTimeAndDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  const formattedDate = currentTimeAndDate.toLocaleDateString("en-US", {
    weekday: "short", // e.g., Mon
    month: "short", // e.g., Jul
    day: "2-digit", // e.g., 30
    year: "numeric" // e.g., 2025
  });

  return (
    <p className="text-white font-bold flex flex-col tracking-wider font-mono text-lg ">
      <span> {formattedTime}</span>
      <span> {formattedDate}</span>
    </p>
  );
};
