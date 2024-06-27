const notesContainer = document.querySelector(".wrightNote");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input");

function prevNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
}
prevNotes();

function storeLocal() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "eraser-svgrepo-com.svg";
    notesContainer.appendChild(inputBox).appendChild(img);
    
    notes = document.querySelectorAll(".input");
});

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
});

document.addEventListener('click', () => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});

notesContainer.addEventListener("click",function(e){
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        storeLocal();
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input");
        notes.forEach(nt => {
            nt.onkeyup = function() {
                storeLocal();
            };
        });
    }
});




window.onload = function() {
    if (navigator.geolocation) {
        alert("We need to access your location to provide weather updates.");
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        alert('Geolocation is not supported by this browser.');
    }
};

function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    getWeather(latitude, longitude);
}

function error() {
    alert('Unable to retrieve your location.');
}

function getWeather(lat, lon) {
    const apiKey = 'f4cda2d65f3541bcb9f153105242706'; // WeatherAPI key
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data) {
                displayWeather(data);
                provideTips(data);
            } else {
                alert('Weather data not found. Please try again.');
            }
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

function displayWeather(data) {
    const weatherDiv = document.getElementById('weather');
    weatherDiv.innerHTML = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p>Weather: ${data.current.condition.text}</p>
        <img src="${data.current.condition.icon}" alt="${data.current.condition.text}">
    `;
}

function provideTips(data) {
    const tipsDiv = document.getElementById('tips');
    const temp = data.current.temp_c;
    let tips = '';

    if (temp < 0) {
        tips = 'It\'s freezing! Make sure to bundle up warmly.(coffee dosent sound bad)';
    } else if (temp < 10) {
        tips = 'It\'s quite cold. Wear a coat and stay warm.';
    } else if (temp < 20) {
        tips = 'The weather is cool. A light jacket should be enough.';
    } else if (temp < 30) {
        tips = 'The weather is warm. Dress comfortably.';
    } else {
        tips = 'It\'s hot today! Stay hydrated.(Good time to have an Icecream)';
    }

    tipsDiv.innerHTML = `<p>${tips}</p>`;
}
