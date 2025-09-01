$(document).ready(function () {
    const API_KEY = "7341e50c4cf779dadbfa1002ef17353e";
    const units = "metric";

    function fetchWeather(cityInput) {
        if (!cityInput) {
            alert("Please enter a city name");
            return;
        }

        let formattedCity = cityInput.trim();
        if (formattedCity.split(",").length === 1) {

            formattedCity += ",IN";
        }

        const api = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(formattedCity)}&appid=${API_KEY}&units=${units}`;

        fetch(api)
            .then((response) => response.json())
            .then((data) => {
                if (data.cod !== 200) {
                    alert("City not found. Try with city,state or city,state,country");
                    return;
                }

                const iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

                $(".city").text("Weather in " + data.name);
                $(".icon").attr("src", iconUrl);
                $(".temp").text(data.main.temp + " ℃");
                $(".humidity").text("Humidity: " + data.main.humidity + " %");
                $(".wind").text("Wind speed: " + data.wind.speed + " km/h");
                $(".description").text(data.weather[0].description);

                $("#city").val("");
            })
            .catch(() => {
                alert("⚠️ Unable to fetch weather. Check your connection.");
            });
    }

    $("#search-bar").on("click", function (event) {
        event.preventDefault();
        const city = $("#city").val();
        fetchWeather(city);
    });

    $("#city").on("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            const city = $("#city").val();
            fetchWeather(city);
        }
    });
});
