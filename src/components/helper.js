import axios from "axios";

const formitedObject = (state) => {
    return ({
        country: [state.location.country],
        Wind: [`Chil ${state.current_observation.wind.chill}`, `speed ${state.current_observation.wind.speed}`],
        Atmosphere: [`Humidity ${state.current_observation.atmosphere.humidity}`, `Pressure ${state.current_observation.atmosphere.pressure}`],
        Astronomy: [`Sunrise ${state.current_observation.astronomy.sunrise}`, `Sunset ${state.current_observation.astronomy.sunset}`],
        Tommorrow: [`${state.forecasts[1].day}, ${state.forecasts[1].text}`, `Max ${state.forecasts[1].high}`, `Low ${state.forecasts[1].high}`],
        // AfterDay: [`${state.forecasts[2].day}, ${state.forecasts[2].text}`, `Max ${state.forecasts[2].high}`, `Low ${state.forecasts[2].high}`],
    })
}

const renderBoxes = (obj) => {
    const containers = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            containers.push(
                <div key={key + obj[key]} className="weather__content__box">
                    <small><p>{key}</p></small>

                    {obj[key].map((el, i) => {
                        if (i === 0) return <h2 key={i}>{el}</h2>
                        else return <h3 key={i}>{el}</h3>
                    })}
                </div>)
    }
    return containers
}


const getData = async (query) => {
    if (!query) return;
    console.log(query);
    try {
        const data = await axios({
            method: 'GET',
            url: 'https://yahoo-weather5.p.rapidapi.com/weather',
            params: { location: query, format: 'json', u: 'f' },
            headers: {
                'X-RapidAPI-Key': '0877064363mshb32e82ad8ad9c6cp1d6825jsnc502a322dfc7',
                'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
            }
        })

        return data.data;
    } catch (error) {
        console.log(error);
        throw error
    }

}


export {
    formitedObject,
    renderBoxes,
    getData
}