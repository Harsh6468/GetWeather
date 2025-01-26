$(document).ready(function(){
    var API_KEY = '7341e50c4cf779dadbfa1002ef17353e';
    var units = 'metric';
    $("#search-bar").on("click", function(event){
        event.preventDefault();
        var city = $("#city").val();
        var api = `https://api.openweathermap.org/data/2.5/weather?q=${city}` + `&appid=${API_KEY}&units=${units}`;
        // fetch api url
        fetch(api)
            //when we get response from server
            .then(response => {
                //return response as json
                return response.json();
            })
            .then(data => {
                console.log(data);
                // Get weather icon
                var iconcode = data.weather[0].icon;

                // set up weather icon url
                var iconurl = `http://openweathermap.org/img/w/${iconcode}.png`;
                $('.city').text('Weather in '+city);
                $('.icon').attr('src', iconurl);
                $('.temp').text(data.main.temp+" ℃");
                $('.humidity').text('Humidity : '+data.main.humidity+" %")
                $('.wind').text('Wind speed : '+data.wind.speed+' km/h')
                $('.description').text(data.weather[0].description);
                var p = '';
                $('#city').val(p);
            })
    });
});