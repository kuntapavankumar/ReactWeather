var React = require('react');

// var WeatherMessage = React.createClass(
//   {
//     getWeatherMessage: function(){
//
//         return <h1>Weather in {this.props.location} is {this.props.temp}</h1>;
//
//
//     },
//
//     render: function () {
//       return (
//             <span>{this.getWeatherMessage()}</span>
//       );
//     }
//   }
// );

var WeatherMessage = ({temp, location}) => {  
  return (
        <h1>Weather in {location} is {temp}</h1>
  );
}

module.exports=WeatherMessage;
