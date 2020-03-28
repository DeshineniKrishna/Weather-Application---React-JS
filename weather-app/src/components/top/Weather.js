import React, { Component } from 'react'
// import sunimg from '../../resources/images/sun.png'

class Weather extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {

        const {location,temperature,weather_icons,weather_descriptions} = this.props

        return (
            <div className="weather-container">
                <div className="header">{location}</div>
                <div className="inner-container">
                    <div className="image">
                        <img src={weather_icons} alt="img" /> 
                    </div>
                    <div className="current-weather">{temperature}°</div>
                </div>
                <div className="footer">{weather_descriptions}</div>
            </div>
        )
    }
}

export default Weather
