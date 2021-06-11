type current = {
    cloudcover: number
    feelslike: number
    humidity: number
    is_day: string
    observation_time: string
    precip: number
    pressure: number
    temperature: number
    uv_index: number
    visibility: number
    weather_code: number
    wind_degree: number
    wind_dir: string
    wind_speed: number
}

type location = {
    country: string
    lat: string
    localtime: string
    localtime_epoch: number
    lon: string
    name: string
    region: string
    timezone_id: string
    utc_offset: string
}

type request = {
    language: string
    query: string
    type: string
    unit: string
}

export type weatherType = {
    current: current
    location: location
    request: request

}
 type TabChoice = "search" | "display";
 export default TabChoice