import { useState, useEffect } from "react";
export const LiveClock = ({
  parentClass,
  dateClass = "text-white font-bold font-mono text-lg",
  timeClass = "text-white font-mono font-bold text-lg"
}) => {
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
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric"
  });

  return (
    <p className={`${parentClass} flex flex-col`}>
      <span className={`${timeClass}`}>{formattedTime}</span>
      <span className={`${dateClass}`}>{formattedDate}</span>
    </p>
  );
};
