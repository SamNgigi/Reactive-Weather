import React from "react";

class Weather extends React.Component {
  render(){
    return(
        <div>
          <h4>Weather Component</h4><br/>
          <p>{this.props.country}</p><br/>
          <p>{this.props.city}</p><br/>
          <p>{this.props.temperature}</p><br/>
          <p>{this.props.humidity}</p><br/>
          <p>{this.props.description}</p><br/>
          <p>{this.props.error}</p><br/>
        </div>
    );
  }
};
export default Weather;
