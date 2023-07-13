function updateClock() {
    const clockElement = document.getElementById("clock");
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
  
    // Format the time as HH:MM:SS
    const formattedTime = `${padZero(hours)} hours ${padZero(minutes)} minutes ${padZero(seconds)} seconds`;
  
    // Update the clock element with the formatted time
    clockElement.textContent = formattedTime;
  }
  
  function padZero(value) {
    return value.toString().padStart(2, "0");
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initial clock update
  updateClock();
  