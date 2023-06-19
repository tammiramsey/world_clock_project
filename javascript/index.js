function updateTime() {
  //los angeles date/time

  let losAngelesElement = document.querySelector("#los_angeles");
  if (losAngelesElement) {
    let losAngelesDateElement =
        losAngelesElement.querySelector("#los_angeles .date");
    let losAngelesTimeElement =
        losAngelesElement.querySelector("#los_angeles .time");
    let losAngelesTime = moment().tz("America/los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
        "h:mm:ss [<small>]A[</small>]"
    );
  }

  //paris date/time

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
  let parisDateElement = parisElement.querySelector("#paris .date");
  let parisTimeElement = parisElement.querySelector("#paris .time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
        <div>
         <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div>
            <div class="time">${cityTime.format(
              "h:mm:ss [<small>]A[</small>]"
            )}</div>
        </div>
    </div>`;
}

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
