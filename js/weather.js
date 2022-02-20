function GeoInfoOk(position) {
  console.log("Get ready!");
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in ", lat, lon);
  const API_KEY = "957b8a1c95eea3a052bec1a04af8dca6";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).
  then(response => response.json()).
  then(data => {
    const name = data.name;
    const weather = data.weather[0].main;
    const locationSpan = document.querySelector("#weather span:first-child");
    const weatherSpan = document.querySelector("#weather span:last-child");
    locationSpan.innerText = `${name}`;
    weatherSpan.innerText = `${weather}`;
  })
}

function weatherInfoNo(){
  console.log("Not ready!");
}

navigator.geolocation.getCurrentPosition(GeoInfoOk, weatherInfoNo);