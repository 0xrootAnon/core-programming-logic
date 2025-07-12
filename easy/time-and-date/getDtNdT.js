//get current date/time 

//method: using date obj
function getCurrentDateTime() {
  const now = new Date();
  return {
    date: now.toLocaleDateString(),
    time: now.toLocaleTimeString(),
    iso: now.toISOString()
  };
}
