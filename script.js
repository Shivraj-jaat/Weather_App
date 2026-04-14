let apiKey = "e7b5002f6b61aa1b1d6617fde807f0a9";
let searchBtn = document.querySelector("#search-btn")
let weatherData = document.querySelector("#weather-data")

searchBtn.addEventListener("click", async () => {
    let cityName = document.querySelector("#city-name").value.trim();
    if (cityName === "") {
        weatherData.innerHTML = `<h3 style="color:rgb(182, 32, 42); text-align: center"> Enter a City Name... </h3>`
        return;
    }
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);
        // console.log(res)
        if (!res.ok) {
            weatherData.innerHTML = `<h3 style="color:rgb(182, 32, 42); text-align: center"> City Not Found... </h3>`
            return;
        }

        let data = await res.json();
        // console.log(data)

        weatherData.innerHTML = `

        <h2 style="color:rgb(182, 32, 42); text-align: center"> ${data.name}, ${data.sys.country} </h2>
        <p style="color:rgb(182, 32, 42); text-align: center"> <b>Temperature:</b> ${data.main.temp} °C </p>
        <p style="color:rgb(182, 32, 42); text-align: center"> <b>Pressure:</b> ${data.main.pressure} Pa </p>
        <p style="color:rgb(182, 32, 42); text-align: center"> <b>Humidity:</b> ${data.main.humidity}g/m<sup>3</sup> </p>
        <p style="color:rgb(182, 32, 42); text-align: center"> <b>Feels Like:</b> ${data.main.feels_like} °C </p>
        <p style="color:rgb(182, 32, 42); text-align: center"> <b>Wind Speed:</b> ${data.wind.speed} m/s </p>
        `

    } catch (error) {
        console.log(error, "Error in Fetching API")
    }

})