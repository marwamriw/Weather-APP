

const weatherContainer = document.getElementById('weather-container')
const weatheDetails = document.getElementById('weather-details')
const CityInput = document.getElementById('city-data')
const serachButton = document.querySelector('button')


async function fetchweather (city){

    try {
        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe824cb856a37281c8c13e7a5fbbd488`)
        const data = await response.json()
        console.log(data)
        updateWeather(data)
    }
    
    catch(err){
        console.log(err)
    }

}

serachButton.addEventListener('click' , ()=>{
    const city = CityInput.value.trim();
    if (city) {
        fetchweather(city)
    }else{
        alert('please enter a city name')
    }
});



function updateWeather(data){
    const temp = data.main.temp
    const city = data.name
    const description = data.weather[0].description

        weatheDetails.querySelector('h1').textContent = city
        weatheDetails.querySelector('.description').textContent = description
        weatheDetails.querySelector('h2').textContent = `${temp}`;
}