function updateTime(){
//los angeles date/time

let losAngelesElement = document.querySelector("#los_angeles");
let losAngelesDateElement = losAngelesElement.querySelector("#los_angeles .date");
let losAngelesTimeElement = losAngelesElement.querySelector("#los_angeles .time");
let losAngelesTime = moment().tz("America/los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");

//paris date/time

let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector("#paris .date");
let parisTimeElement = parisElement.querySelector("#paris .time");
let parisTime = moment().tz("Europe/Paris");

parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");

}

updateTime();
setInterval(updateTime, 1000);