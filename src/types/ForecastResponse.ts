interface ForecastResponse {
    cod: string
    message:number
    cnt: number
    list: List []
    city: City
}

interface List {
    dt: number
    main: MainList
    weather: Weather[]
    clouds: Clouds
    wind: Wind
    visibility: number
    pop: number
    rain?: Rain
    snow?: Snow
    sys: Sys
    dt_txt: string
}

interface MainList {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    sea_level: number
    grnd_level: number
    humidity: number
    temp_kf: number
}

interface Rain {
    '3h': number
}
interface Snow {
    '3h': number
}

interface Weather {
    id: number
    main: string
    description: string
    icon: string
}

interface Clouds {
    all: number
}

interface Wind {
    speed: number
    deg: number
    gust: number
}

interface Sys {
    pod: string
}

interface City {
    id: number
    name: string
    coord: Coordinates
    country: string
    population: number
    timezone: number
    sunrise: number
    sunset: number
}

interface Coordinates {
    lat: number
    lon: number
}

export default ForecastResponse