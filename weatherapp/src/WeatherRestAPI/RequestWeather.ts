



export const requestWeather = async(cityName:string)=>{
const resultURLstring =`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_PUBLIC_KEY}&query=${cityName}`



return await fetch(resultURLstring)




}