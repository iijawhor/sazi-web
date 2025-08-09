import { timeStringToMinutes } from "./convertHoursToMinute";
function calculateAverageHours(attendanceArray) {
  if (!attendanceArray?.length) return 0;

  let totalMinutes = 0;
  let count = 0;

  attendanceArray.forEach(({ loggedInAt, loggedOutAt }) => {
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
