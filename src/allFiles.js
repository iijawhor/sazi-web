import Body from "./pages/Body";
import Sidebar from "./componenets/Sidebar/Sidebar";
import Navbar from "./componenets/Navbar/Navbar";
import Signup from "./componenets/Signup/Signup";
import { LiveClock } from "./helpers/Liveclock";
import Me from "./componenets/Me/Me";
import Dashboard from "./componenets/Dashboard/Dashboard";
import useDebounce from "./helpers/Debounce";
import Actions from "./componenets/Me/Actions";
import Timings from "./componenets/Me/Timings";
import AttendanceStats from "./componenets/Me/AttendanceStats";
import { calculateAverageHours } from "./helpers/calculateAverageHours";
import { timeStringToMinutes } from "./helpers/convertHoursToMinute";
import decimalHoursToHMS from "./helpers/decimalHoursToHMS";
import AttendanceLogs from "./componenets/Me/AttendanceLogs";
import Log from "./componenets/Me/Log";
import calculateGrossHour from "./helpers/GrossHours";
export {
  Body,
  Sidebar,
  Navbar,
  Signup,
  LiveClock,
  Me,
  Dashboard,
  useDebounce,
  Actions,
  Timings,
  AttendanceStats,
  calculateAverageHours,
  timeStringToMinutes,
  decimalHoursToHMS,
  AttendanceLogs,
  Log,
  calculateGrossHour
};
