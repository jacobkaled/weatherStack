



export const RequestWeather = (url:string, method:string, options:any)=>{

const resultURLstring =`${url}&${Object.keys(options)[0]}=${Object.values(options)[0]}`   
//const resultURLstring = Object.keys(options)[0]
if(method === 'GET'){

return resultURLstring

}


}