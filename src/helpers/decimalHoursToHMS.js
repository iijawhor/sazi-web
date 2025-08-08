function decimalHoursToHMS(decimalHours) {
  const totalSeconds = Math.round(decimalHours * 3600);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${hours} h ${minutes} m`;
}
export default decimalHoursToHMS;
