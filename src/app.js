function updateDate() {
  let sydneyTz = "Australia/Sydney";
  let parisTz = "Europe/Paris";
  let torontoTz = "Canada/Central";
  let losAngelesTz = "America/Los_Angeles";

  //update sydney
  //select element
  let sydneyDateElement = document.querySelector("#sydneyDate");
  let sydneyTimeElement = document.querySelector("#sydneyTime");
  let syd_am_pm = document.querySelector("#sydneyAmPm");
  let sydneyCurrentDate = moment().tz(`${sydneyTz}`).format("DD MMMM YYYY");
  let sydneyCurrentTime = moment().tz(`${sydneyTz}`).format("hh:mm:ss");
  let syd_current_am_pm = moment().tz(`${sydneyTz}`).format("A");
  sydneyDateElement.innerHTML = sydneyCurrentDate;
  sydneyTimeElement.innerHTML = sydneyCurrentTime;
  syd_am_pm.innerHTML = syd_current_am_pm;

  //update LA
  let laDate = document.querySelector("#laDate");
  let laCurrentDate = moment().tz(`${losAngelesTz}`).format("DD MMMM YYYY");
  laDate.innerHTML = laCurrentDate;
  //update toronto
  let torontoDate = document.querySelector("#torontoDate");
  let torontoCurrentDate = moment().tz(`${torontoTz}`).format("DD MMMM YYYY");
  torontoDate.innerHTML = torontoCurrentDate;

  //update paris
  let parisDate = document.querySelector("#parisDate");
  let parisCurrentDate = moment().tz(`${parisTz}`).format("DD MMMM YYYY");
  parisDate.innerHTML = torontoCurrentDate;
}

updateDate();
