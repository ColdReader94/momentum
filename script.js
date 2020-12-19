
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const humidity = document.querySelector('.humidity');
document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('click', innerText);
city.addEventListener('keypress', setCity);
city.addEventListener('blur', setCity);

let exc = [];
    
function randIntExcep(min, max, exp) {
  let n;
  exp = Array.isArray(exp) ? exp : [(isNaN(exp) ? min-1 : exp)];
  while(true){
      n = Math.floor(Math.random() * (max - min + 1)) + min;
      if(exp.indexOf(n) < 0) {
        exc.push(n);
         return n;
      }   
  }
}

let images = []
    images[0] = `./assets/images/morning/${randIntExcep(1, 20, exc)}.jpg`;
    images[1] = `./assets/images/morning/${randIntExcep(1, 20, exc)}.jpg`;
    images[2] = `./assets/images/morning/${randIntExcep(1, 20, exc)}.jpg`;
    images[3] = `./assets/images/morning/${randIntExcep(1, 20, exc)}.jpg`;
    images[4] = `./assets/images/day/${randIntExcep(1, 20, exc)}.jpg`;
    images[5] = `./assets/images/day/${randIntExcep(1, 20, exc)}.jpg`;
    images[6] = `./assets/images/day/${randIntExcep(1, 20, exc)}.jpg`;
    images[7] = `./assets/images/day/${randIntExcep(1, 20, exc)}.jpg`;
    images[8] = `./assets/images/evening/${randIntExcep(1, 20, exc)}.jpg`;
    images[9] = `./assets/images/evening/${randIntExcep(1, 20, exc)}.jpg`;
    images[10] = `./assets/images/evening/${randIntExcep(1, 20, exc)}.jpg`;
    images[11] = `./assets/images/evening/${randIntExcep(1, 20, exc)}.jpg`;
    images[12] = `./assets/images/night/${randIntExcep(1, 20, exc)}.jpg`;;
    images[13] = `./assets/images/night/${randIntExcep(1, 20, exc)}.jpg`;
    images[14] = `./assets/images/night/${randIntExcep(1, 20, exc)}.jpg`;
    images[15] = `./assets/images/night/${randIntExcep(1, 20, exc)}.jpg`;
  
 

    
// DOM Elements
const time = document.querySelector('.time'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus');
  let currentBackground = images.indexOf(`${document.body.style.backgroundImage.toString().replace("url(\"", "" ).replace("\")", "" )}`, 0);



// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();    
    dayOfMonth = today.getDate();    
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    month = months[today.getMonth()];
    dayOfWeek = days[today.getDay()]
    


  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} <br>${dayOfWeek}<span>, </span> ${month} ${dayOfMonth} `;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour >= 6 && hour < 12) {
    // Morning
    document.body.style.backgroundImage = `url(${images[0]})`;
    greeting.textContent = 'Good Morning, ';
  } else if (hour >= 12 && hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = `url(${images[4]})`;
    greeting.textContent = 'Good Afternoon, ';
  } else if ((hour >= 18 && hour < 24)) {
    // Evening
    document.body.style.backgroundImage = `url(${images[8]})`;
    greeting.textContent = 'Good Evening, ';
    document.body.style.color = 'white';
  } else {
    // Night
    document.body.style.backgroundImage = `url(${images[12]})`;
    greeting.textContent = 'Good Night, ';
    document.body.style.color = 'white';
  } 
  currentBackground =  images.indexOf(`${document.body.style.backgroundImage.toString().replace("url(\"", "" ).replace("\")", "" )}`, 0);;
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    if(e.target.innerText == '' && localStorage.getItem('name') !== '') {
      getName()
    }
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    if(e.target.innerText == '' && localStorage.getItem('focus') !== '') {
      getFocus()
    }
    localStorage.setItem('focus', e.target.innerText);
  }
}


function setCity(e) {
  if (e.type == 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('city', e.target.innerText);
      city.blur();
    }
  } else {
    if(e.target.innerText == '' && localStorage.getItem('city') !== '') {
      getCity();
    }
    localStorage.setItem('city', e.target.innerText);
    getWeather();
  }
}

function getCity() {
  if (localStorage.getItem('city') === null) {
    city.textContent = 'Minsk';
  } else {
    city.textContent = localStorage.getItem('city');
  }
}



function innerText(e) {
  if (e.target === name || e.target === focus || e.target === city) {
    e.target.innerText = '';
    
}

}
name.addEventListener('click', innerText)
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('click', innerText)
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();
getCity();
watchForHourChange();



function watchForHourChange() {
let nowMinutes = new Date().getMinutes();//получаем минуты
let nowSeconds = new Date().getSeconds(); //получаем секунды
      let remain = ((60 - nowMinutes -1) * 60 * 1000) + ((60 - nowSeconds) * 1000)  ; //узнаем сколько осталось до 00 минут 00 секунд
      setTimeout(function () { //ждём до 00 минут 00 секунд
          setInterval(changeBgInHour, 60 * 60 * 1000); //запускаем каждые 60мин
          changeBgInHour(); //запускаем сейчас, т.к. сейчас 00
      }, remain);
  

  function changeBgInHour() { //функция смены фона      
    let img = document.createElement('img');
    img.src = images[currentBackground + 1];
    img.onload = () => {
      document.body.style.backgroundImage = `url(${images[currentBackground + 1]})`;
    }
    currentBackground =  images.indexOf(`${document.body.style.backgroundImage.toString().replace("url(\"", "" ).replace("\")", "" )}`, 0);
  } 
}


let changeBgButton = document.querySelector('.bg-change-button');

changeBgButton.addEventListener('click', changeBg);

function changeBg() {
  
  currentBackground = images.indexOf(`${document.body.style.backgroundImage.toString().replace("url(\"", "" ).replace("\")", "" )}`, 0);
  if(currentBackground < images.length - 1) {
    let img = document.createElement('img');
    img.src = images[currentBackground + 1];
    img.onload = () => {
      setTimeout(document.body.style.backgroundImage = `url(${images[currentBackground + 1]})`, 20000)
    }
    
  } else {
    document.body.style.backgroundImage = `url(${images[0]})`;
  }
}


const blockquote = document.querySelector('blockquote');
const figcaption = document.querySelector('figcaption');
const btn = document.querySelector('.btn');

// если в ссылке заменить lang=en на lang=ru, цитаты будут на русском языке
// префикс https://cors-anywhere.herokuapp.com используем для доступа к данным с других сайтов если браузер возвращает ошибку Cross-Origin Request Blocked 
async function getQuote() {  
  const url = `https://quote-garden.herokuapp.com/api/v2/quotes/random`;
  let res = await fetch(url);
  let data = await res.json(); 
  blockquote.textContent = data.quote.quoteText;
  figcaption.textContent = data.quote.quoteAuthor;
}


document.addEventListener('load', getQuote());
btn.addEventListener('click', getQuote);




async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=c196da092cb0cabff505a9867ff30fd1&units=metric`;
  const res = await fetch(url);
  if(res.status == 404) alert('Please, enter correct city for weather forecast');
  const data = await res.json();
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
  weatherDescription.textContent = "Wind speed: " + data.wind.speed + " m/s";
  humidity.textContent = "Humidity: " + data.main.humidity + "%";
}



