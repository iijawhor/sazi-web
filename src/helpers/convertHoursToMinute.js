function timeStringToMinutes(timeStr) {
  // "HH:MM:SS" → total minutes
  const [hours, minutes, seconds] = timeStr.split(":").map(Number);
  return hours * 60 + minutes + seconds / 60;
}
export { timeStringToMinutes };
