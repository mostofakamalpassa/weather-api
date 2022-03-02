const API_KEY = `5daf82d7daa83c0014549494d36808e5`;

const loadWeatherApi = async ()=>{

    try{

        const cityName = document.getElementById('city-name');
        const inputValue = cityName.value;
        const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=${API_KEY}`);

        const data = await url.json();


        document.getElementById('city').innerText = data.name;
        document.getElementById('temperature').innerText = data.main.temp;
        document.getElementById('condition').innerText = data.weather[0].main;

        const urlIcon = ` http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.getElementById('weather-icon').setAttribute('src',urlIcon);

        console.log(data);

    }catch(error){

        console.log(error);
    }

}

document.getElementById('city-name').addEventListener('keypress', function(event){

    if(event.keyCode == 13){
        loadWeatherApi();
        event.preventDefault();
    }
})