//add/subtract days from a date 

function addDays(dateStr, days) {
  const date = new Date(dateStr);
  date.setDate(date.getDate() + days);
  return date.toDateString();
}
function subtractDays(dateStr, days) {
  return addDays(dateStr, -days);
}
