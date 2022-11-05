import React, { useEffect } from 'react'
import SearchForm from './SearchForm'
import './home.scss'
import WeatherInfo from './WeatherInfo'
import { TiWeatherCloudy } from 'react-icons/ti'
import { getData } from './helper'
import Lottie from "lottie-react";
import WeatherAnimation from './weather.json'


const HomePage = () => {
    const [query, setQuery] = React.useState(null)
    const [state, setState] = React.useState(null)
    const [error, setError] = React.useState(null)

    useEffect(() => {
        (async () => {
            try { setState(await getData(query)) }
            catch (error) {
                setError('Cant Find The Location. Kindly check Your search')
                setTimeout(() => setError(''), 3000);
            }
        })()
    }, [query])

    return (
        <div className='home'>
            {error && <div className='error'><h3>{error}</h3></div>}
            <div className="home__container">
                <div className="weather__icon">
                    <b>Weather App</b>
                    <TiWeatherCloudy />
                </div>
                <SearchForm setQuery={setQuery} />
                {state ? <WeatherInfo state={state} /> : <div className='weathanimation'><Lottie animationData={WeatherAnimation} loop={true} /></div>}
            </div>
        </div>
    )
}

export default HomePage
