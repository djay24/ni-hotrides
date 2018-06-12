// let weatherRequest = fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={c7add6b3bc4e2fd870d29b5ce5776ecc}')

// let weatherRequest = new XMLHttpRequest();
//
// weatherRequest.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={c7add6b3bc4e2fd870d29b5ce5776ecc}', true);
// console.log(weatherRequest.status)
// weatherRequest.onload = function() {
//   console.log('hi')
// }

let yourCity = prompt('what city do you live in?');



let weatherRequest = new XMLHttpRequest();
let weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=` + yourCity +`,us&units=imperial&appid=c706bd203a749d73c30c1ab92dc6b102`;

weatherRequest.open("GET", weatherURL, true);
weatherRequest.send();

weatherRequest.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(this.responseText);
        getElements(response);
      }
    }
function getElements(data) {
  let weather = data
  console.log("it went through")
  console.log(weatherURL);
  let currentWeather = (weather.main.temp);
  console.log(currentWeather);
  weatherBox(currentWeather);
}

function weatherBox(weather) {
  let weatherBox = document.getElementById('weatherBox')
}
