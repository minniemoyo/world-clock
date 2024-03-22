function getTimeZone(city) {
  if (city == "sydney") {
    let timeZone = "Australia/Sydney";
    return timeZone;
  }

  if (city == "melbourne") {
    let timeZone = "Australia/Melbourne";
    return timeZone;
  }

  if (city == "new-york") {
    let timeZone = "America/New_York";
    return timeZone;
  }

  if (city == "bulawayo") {
    let timeZone = "Africa/Harare";
    return timeZone;
  }
  if (city == "bloemfontein") {
    let timeZone = "Africa/Johannesburg";
    return timeZone;
  }

  if (city == "los-angeles") {
    let timeZone = "America/Los_Angeles";
    return timeZone;
  }

  if (city == "toronto") {
    let timeZone = "Canada/Central";
    return timeZone;
  }

  if (city == "paris") {
    let timeZone = "Europe/Paris";
    return timeZone;
  }
}

function updateTime(city) {
  //get time zone
  let timeZoneInput = getTimeZone(city);
  let timeZone = moment().tz(`${timeZoneInput}`);

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

setInterval(updateTime, 1000, "sydney");
setInterval(updateTime, 1000, "los-angeles");
setInterval(updateTime, 1000, "toronto");
setInterval(updateTime, 1000, "paris");
