var button = document.querySelector('.button');
var inputValue  = document.querySelector('.inputValue');
var name  = document.querySelector('.name');
var desc  = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=e6146c5b45ef1a86d3c3c0c5c2fb5693')
    .then(Response => Response.json())
    .then(data => {
        name.innerhtml = data['name'];
        temp.innerHTML = data['main']['temp'];
        desc.innerHTML = data['weather'][0]['description'];
    })
    .catch(err => alert("Wrong City name!!!"))
})