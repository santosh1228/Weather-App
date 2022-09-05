let apiKey="22650d818381085696f1fc60818ac7cd";

function fetchWeather(city)
{
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=metric&appid=" +apiKey
    ).then((fetchedData)=>{
        return fetchedData.json();
    }).then((data)=>{
        console.log(data);
        displayWeather(data);
    }).catch((error)=>{
        alert("No Weather Found");
        throw new Error("No Weather Found.");
    })
}

function displayWeather(data)
{
    let name=data.name;
    let icon=data.weather[0].icon;
    let description=data.weather[0].description;
    let temp=data.main.temp;
    let humidity=data.main.humidity;
    let speed=data.wind.speed;
    let mintemp=data.main.temp_min;
    let maxtemp=data.main.temp_max;
    document.querySelector(".city").innerText=`Weather in ${name}`;
    document.querySelector(".icon").src=`https://openweathermap.org/img/wn/${icon}.png`;
    document.querySelector(".description").innerText=`${description}`;
    document.querySelector(".temp").innerText=`${temp} °C`;
    document.querySelector(".humidity").innerText=`Humidity: ${humidity}%`;
    document.querySelector(".wind").innerText=`Wind Speed: ${speed} km/hr`;
    document.querySelector(".mintemp").innerText=`MinTemp: ${mintemp} °C`;
    document.querySelector(".maxtemp").innerText=`MaxTemp: ${maxtemp} °C`;
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage=`url('https://source.unsplash.com/1900x1000/?${name}')`;
};

function search()
{
    fetchWeather(document.querySelector(".search-bar").value);
}

let button=document.querySelector("button");
let searchbar=document.querySelector(".search-bar");

button.addEventListener("click",()=>{
    search();
})

searchbar.addEventListener("keyup",(event)=>{
    if(event.key=="Enter")
    {
        search();
    }
})


let city="kolkata";

fetchWeather(city);
