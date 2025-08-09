function timeStringToMinutes(timeStr) {
  if (!timeStr || typeof timeStr !== "string") return 0; // handle missing/invalid
  const [h = 0, m = 0, s = 0] = timeStr.split(":").map(Number);
  return h * 60 + m + s / 60;
}
export { timeStringToMinutes };
