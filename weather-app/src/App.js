import React, { Component } from 'react'
import './App.css';
import './sass/app.scss'
import Top from './components/top/index';
import Bottom from './components/bottom/index';

import axios from 'axios';

const WEATHER_KEY = "12af88fd74a31d7a5769d158856edf81";

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       cityName : "London",
       isLoading : true,
    }
  }

  componentDidMount(){
    const {cityName} = this.state;
    const URL = `http://api.weatherstack.com/current?access_key=${WEATHER_KEY}&query=${cityName}`
    axios.get(URL).then((res) => {
      // console.log("DATA: ",res);
      return res.data;
    }).then((data) => {
      this.setState({ isLoading: false,
                      temperature: data.current.temperature, 
                      weather_icons:data.current.weather_icons, 
                      weather_descriptions:data.current.weather_descriptions, 
                      })
    })
    
    .catch((err) => {
      if(err){
        console.error("Cannot fetch data from API, ", err);        
      }
    })
  }
  

  render() {

    const {isLoading,cityName,temperature,weather_icons,weather_descriptions} = this.state;

    return (
      <div className="app-container">
        <div className="main-container">

          {isLoading && <h3> Loading Weather... </h3>}
          {
            !isLoading && (
            <div className="top-section">
                <Top 
                    location={cityName} 
                    temperature={temperature} 
                    weather_icons={weather_icons} 
                    weather_descriptions={weather_descriptions}
                    eventEmitter={this.props.eventEmitter}
                />
            </div> 
          )}     

          <div className="bottom-section">
              <Bottom />
          </div> 
        </div>        
      </div>
    )
  }
}

export default App;
