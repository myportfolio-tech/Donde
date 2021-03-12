
function formWeatherObject(weather){

    weatherResults = {
      icon: weather['data'][0].weather.icon,
      code: weather['data'][0].weather.code,
      description: weather['data'][0].weather.description,
      temp: weather['data'][0].temp,
      wind: weather['data'][0].wind_spd,
      iconUrl: `https://www.weatherbit.io/static/img/icons/${weather['data'][0].weather.code}.png`
    }
  
  console.log(weatherResults)
  return weatherResults
  
  }
  
  module.exports = formWeatherObject