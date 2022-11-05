import React from 'react'
import { renderBoxes, formitedObject } from './helper'

const WeatherInfo = (prop) => {
  const { state } = prop;

  if (!state) return;
  return (
    <div className='weather'>

      <div className="weather__content">
        <div className="weather__content__box">
          <small><p>Location</p></small>
          <h2>{`${state.location.city}, ${state.location.region}`}</h2>
          <h3>Temperature <b>{state.current_observation.condition.temperature}, {state.current_observation.condition.text}</b></h3>
          <h3>Corrdinates <b>{`${state.location.lat},${state.location.long}`}</b></h3>
          <h3>Time-zone <b>{state.location.timezone_id}</b></h3>
        </div>

        {renderBoxes(formitedObject(state))}

      </div>
    </div>
  )
}

export default WeatherInfo
