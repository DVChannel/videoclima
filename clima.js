var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var cityName = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+
'&appid=e409714c7d56eda5447eb58af02aa1b5')
.then(response => response.json())
.then(data => {
    var nameValue = data ['name'];
    var tempValue = data ['main']['temp'];
    var descValue = data ['weather'][0]['description'];

cityName.innerHTML = nameValue;
temp.innerHTML = tempValue;
desc.innerHTML = descValue;

})


.catch(err => alert("Escribiste mal el nombre de la ciudad, o no la tenemos u.u"))
})