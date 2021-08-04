import React from 'react'
import './weather.css'

export const Weather = (props) => {
    
    return (
      <div className="container text-center">
      <div className="Card text-center">
        <h1 className="text-center text-white py-3">{props.cityname}</h1>
        <h5 className="py-4">
          <i className={`wi ${props.weatherIcon} display-1 text-white text-center`} />
        </h5>

        {/* Get Celsius */}
        {props.temp_celsius ? (
          <h1 className="py-2 text-white text-center">{props.temp_celsius}&deg;</h1>
        ) : null}

        {/* show max and min temp */}
        {maxminTemp(props.temp_min, props.temp_max)}

        {/* Weather description */}
        <h4 className="py-3 text-white text-center">
          {props.description.charAt(0).toUpperCase() +
            props.description.slice(1)}
        </h4>
      </div>
    </div>
    )
}

function maxminTemp(min, max) {
  if (max && min) {
    return (
      <h3 className="text-center">
        <span className="px-4 text-white">{min}&deg;</span>
        <span className="px-4 text-white">{max}&deg;</span>
      </h3>
    );
  }
}
