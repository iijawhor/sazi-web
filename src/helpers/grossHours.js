import { timeStringToMinutes } from "./convertHoursToMinute";
import decimalHoursToHMS from "./decimalHoursToHMS";

function calculateGrossHours(records) {
  return records.map(({ loggedInAt, loggedOutAt }) => {
    if (!loggedInAt || !loggedOutAt) return "0 h 0 m";

    const startMinutes = timeStringToMinutes(loggedInAt);
    const endMinutes = timeStringToMinutes(loggedOutAt);
    const durationMinutes = endMinutes - startMinutes;

    if (durationMinutes <= 0) return "0 h 0 m";

    const durationHours = durationMinutes / 60;
    return decimalHoursToHMS(durationHours);
  });
}

export default calculateGrossHours;
