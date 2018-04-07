import React from "react";

class Form extends React.Component{
  render(){
    return(
      // Function to call the getWeather function.
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="City.."/>
        <input type="text" name="country" placeholder="Country.."/>
        <button>Get Weather</button>
      </form>
    );
  }
};
export default Form;
