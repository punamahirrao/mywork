/*  Get Searchbox, Search button and Weather Icon elemenets from UI     */
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector("#weather-icon");

/*  Add constants for apiKey    & Endpoint*/
const apiKey = "2d8861995919b6268550a111d54fdb94";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid="+apiKey;


async function CheckWeather(city) {
    const res =await fetch(apiURL + "&q="+city);
    var data = await res.json();
    console.log(data);
    document.querySelector(".error").style.display="none";
    if(data.cod==404){
        document.querySelector(".error").style.display="block";
    return;
    }

    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    if(data.weather[0].main == "Clouds")
        weatherIcon.className = "fa-solid fa-cloud";
    else if(data.weather[0].main == "Rain")
        weatherIcon.className = "fa-solid fa-cloud-rain";
    else if(data.weather[0].main == "Clear")
        weatherIcon.className="fa-solid fa-sun";
    else
        weatherIcon.className = "fa-solid fa-cloud";

    document.querySelector(".weather").style.display="block";
}

/*  Add event listener for search button click  */
searchBtn.addEventListener("click",()=>{
    CheckWeather(searchBox.value)
    }
)
