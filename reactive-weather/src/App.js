// Default react logic was here.
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
  // Custom method to communicate with api.
  getWeather= async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}&units=metric`)

    const response = await api_call.json();

    console.log(response);
  }

  // The render method is a build in React method that returns/displays Jsx.
  render() {
    // Jsx is kinda like a mixture of Js login and html, then the babel compiler converts code into normal readerble client code.
    return (
      // Jsx can only return one parent element. Anything outseid the parent element would not be read.
      <div>
        <Titles />
        <Weather />
        <Form />
      </div>
    );
  }
}
// We need to export the App instance so that other files can export
export default App;
