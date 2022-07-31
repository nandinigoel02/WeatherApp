let weather = {
    apiKey: "fb83b4d49064f95c1dca2f0380960c5a",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid="
        + this.apiKey
    )
        .then((response) => response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather: function(data){
        if( data === null){
            document.querySelector(".description").innerText = 'NO CITY FOUND';
        }
        const {name} = data;
        const {icon, description} = data.weather[0];
        const { temp,humidity} = data.main;
        const {speed} = data.wind;
        if( name === null){
            document.querySelector(".description").innerText = 'NO CITY FOUND';
        }
        // console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in "+ name;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: "+ humidity+"%";
        document.querySelector(".wind").innerText = "Wind Speed: "+ speed+"Km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.querySelector(".card").classList.remove("load");
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function(){
    weather.search(); 
});
document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
    weather.search(); 
    }
});

// weather.fetchWeather("noida");