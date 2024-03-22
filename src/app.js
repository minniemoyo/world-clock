function getTimeZone(city) {
  if (city === "sydney") {
    let timeZone = "Australia/Sydney";
    return timeZone;
  }

  if (city === "melbourne") {
    let timeZone = "Australia/Melbourne";
    return timeZone;
  }

  if (city === "new-york") {
    let timeZone = "America/New_York";
    return timeZone;
  }

  if (city === "bulawayo") {
    let timeZone = "Africa/Harare";
    return timeZone;
  }
  if (city === "bloemfontein") {
    let timeZone = "Africa/Johannesburg";
    return timeZone;
  }

  if (city === "los-angeles") {
    let timeZone = "America/Los_Angeles";
    return timeZone;
  }

  if (city === "toronto") {
    let timeZone = "Canada/Central";
    return timeZone;
  }

  if (city === "paris") {
    let timeZone = "Europe/Paris";
    return timeZone;
  }
}

function updateTime(city) {
  //get time zone
  let timeZoneInput = getTimeZone(city);
  console.log(timeZoneInput);
  let timeZone = moment().tz(`${timeZoneInput}`);
  console.log(timeZone);

  //select elements on page
  let dateElement = document.querySelector(`#${city} .date`);
  let timeElement = document.querySelector(`#${city} .time .regionTime`);
  let annotationElement = document.querySelector(
    `#${city} .time .timeAnnotation`
  );

  //get correct timezones from moments libraries
  let currentDate = timeZone.format("DD MMMM YYYY");
  let currentTime = timeZone.format("HH:mm:ss");
  let currentAnnotation = timeZone.format("A");

  //update elements on page
  dateElement.innerHTML = currentDate;
  timeElement.innerHTML = currentTime;
  annotationElement.innerHTML = currentAnnotation;
}

function updateCity(event) {
  //initialising the variables
  let citySelection = event.target.value;
  let cityName = citySelection;
  let timeZoneInput = "";

  if (citySelection.length > 0) {
    //get correct timezones from moments libraries
    if (citySelection === "current") {
      timeZoneInput = moment.tz.guess();
      cityName = timeZoneInput.replace("_", " ").split("/")[1];
    } else {
      timeZoneInput = getTimeZone(citySelection);
    }
    let timeZone = moment().tz(`${timeZoneInput}`);
    let currentDate = timeZone.format("DD MMMM YYYY");
    let currentTime = timeZone.format("HH:mm:ss");
    let currentAnnotation = timeZone.format("A");

    //correct citySelection elements with dashes
    if (cityName.includes("-") === true) {
      cityName = citySelection.replace("-", " ");
    }

    let citiesElement = document.querySelector(".cities");
    citiesElement.innerHTML = `<div class="displayCity" id=${citySelection}>
        <div class="mainCity">
        <h2 class="cityName">${cityName}</h2>
        <div class="date">${currentDate}</div>
        </div>
        <div class="time"><span class="regionTime">${currentTime}</span><span class="timeAnnotation">${currentAnnotation}</span>
        </div>
        </div>`;
  }
}

//setting up the automatic view for the user
setInterval(updateTime, 1000, "sydney");
setInterval(updateTime, 1000, "los-angeles");
setInterval(updateTime, 1000, "toronto");
setInterval(updateTime, 1000, "paris");

//updating the page when a user selects a city
let cityElement = document.querySelector("#city");
cityElement.addEventListener("change", updateCity);
