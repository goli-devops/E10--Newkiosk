setInterval(() => {
  let date = new Date();

  // Options for formatting the date and time
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  // Format the date and time according to the options
  let newDate = date.toLocaleString("en-US", options);
  document.getElementById("date-el").textContent = newDate;

  // Determine rate logic
  const currentDay = date.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const currentHour = date.getHours(); // 17 = 5pm, 18 = 6pm

  // Get the elements for weekday and weekend rates
  let weekdayRateElement = document.getElementById("weekday");
  let weekendRateElement = document.getElementById("weekend");
  let validEl = document.getElementById("valid");

  // Start WEEKDAY 6pm Sunday to Friday 5:59 am
  // Start WEEKEND Friday 6am to Sunday 5:59pm
  if (
    // WEEKEND: Friday 6:00am to Sunday 5:59pm
    (currentDay === 5 && currentHour >= 6) || // Friday from 6:00am onwards
    currentDay === 6 || // Saturday all day
    (currentDay === 0 && currentHour < 18) // Sunday before 6:00pm
  ) {
    // Show Weekend Rate
    weekendRateElement.style.display = "block";
    weekdayRateElement.style.display = "none";
    validEl.textContent = "Valid for Weekend Only (Friday - Sunday)";
  } else {
    // Show Weekday Rate
    weekdayRateElement.style.display = "block";
    weekendRateElement.style.display = "none";
    validEl.textContent = "Valid for Weekday Only (Monday - Thursday)";
  }
}, 1000); // Update every second

// ZOOM WEBPAGE IF CLICK ANYWHERE
document.addEventListener("click", function () {
  if (!document.fullscreenElement) {
    // If not in fullscreen, enter fullscreen mode
    document.documentElement.requestFullscreen().catch((err) => {
      console.log(`Error: ${err.message}`);
    });
  }
  // If already in fullscreen, do nothing
});

// DISABLE RIGHT CLICK
// document.addEventListener("contextmenu", function (e) {
//   e.preventDefault()
// })

