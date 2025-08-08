import { timeStringToMinutes } from "./convertHoursToMinute";
function calculateAverageHours(attendance) {
  if (!attendance?.length) return 0;

  let totalMinutes = 0;
  let count = 0;

  attendance.forEach(({ loggedInAt, loggedOutAt }) => {
    if (loggedInAt && loggedOutAt) {
      const inMinutes = timeStringToMinutes(loggedInAt);
      const outMinutes = timeStringToMinutes(loggedOutAt);
      const duration = outMinutes - inMinutes;

      if (duration > 0) {
        totalMinutes += duration;
        count++;
      }
    }
  });

  if (count === 0) return 0;

  // Convert average minutes back to hours (decimal)
  return totalMinutes / count / 60;
}
export { calculateAverageHours };
