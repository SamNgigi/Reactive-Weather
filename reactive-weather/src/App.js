// Default react logic was here.
// Interesting thought.. to be successfull you have to be willing to succ first! Get it as in succ/suck.
// Our custom logic going over what to import and why.

// import the React object that lives in the 'react' package that lives in package.json
import React from "react";

import Titles from "./components/Titles"
import Form from "./components/Form";
import Weather from "./components/Weather"

// Open weather api key
const API_KEY = "b5193b7df56e40afc55403b658e9f493";


// We create an instance of App that is extending the React.Component object that lives in the node modules.
class App extends React.Component {


  // State is an object that lives within a component and is responsible for changes within a component
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  }

  // Custom method to communicate with api.
  getWeather= async (event) => {

    // We prevent the default submition that occurs on is it click or submit event.
    // It seems that this event.prevent default is indicative of single paged applications
    event.preventDefault();

    // Grabbing the values entered into our forms.
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)

    const response = await api_call.json();

    console.log(response);

    // Displaying the response onto the browser.
    this.setState({
      temperature: response.main.temp,
      city: response.name,
      country: response.sys.country,
      humidity: response.main.humidity,
      description: response.weather[0].description,
      error: ''
    })
  }

  // The render method is a build in React method that returns/displays Jsx.
  render() {

    // Jsx is kinda like a mixture of Js login and html, then the babel compiler converts code into normal readerble client code.
    return (

      // Jsx can only return one parent element. Anything outside the parent element would not be read.
      <div>
        <Titles />

        {/* We use react props that are like html attributes that enable us to add functionalities to elements.

        In this case we want our getWeather function to be called on submition of our form.  */}

        <Form getWeather={this.getWeather} />

        <Weather
          temperature = {this.state.temperature}
          city = {this.state.city}
          country = {this.state.country}
          humidity = {this.state.humidity}
          description = {this.state.description}
          error = {this.state.error}
        />

      </div>
    );
  }
}

// We need to export the App instance so that other files can export
export default App;
