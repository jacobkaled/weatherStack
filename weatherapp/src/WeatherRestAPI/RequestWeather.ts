



export const RequestWeather = async(cityName:string)=>{
const resultURLstring =`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_PUBLIC_KEY}&query=${cityName}`
//const resultURLstring =`${url}&${Object.keys(options)[0]}=${Object.values(options)[0]}`   
//const resultURLstring = Object.keys(options)[0]


return await fetch(resultURLstring)




}