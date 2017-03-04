var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openweatherMap = require('openWeatherMap');
var Weather = React.createClass(
  {

    getDefaultProps: function (){
      return {
        location: '',
        temp: ''
      }
    },

    handleSearch: function(updates){
      var that = this;      
      this.setState({
        isLoading:true
      });
      openweatherMap.getTemp(updates.location).then(function (temp){
        that.setState({
          location: updates.location,
          temp: temp,
          isLoading: false
        });
      }, function (error){
        that.setState({
          isLoading:false,
          temp: '',
          location: ''
        });
        alert("There is an eror:"+error);
      });
    },

    getInitialState: function(){
      return {
        isLoading: false
    }
  },


    render: function () {
      var {isLoading, temp, location} = this.state;

      function renderMessage(){
        if(isLoading){
          return <h3>Fetching Weather...</h3>;
        } else if (temp && location ){
          return <WeatherMessage location={location} temp={temp}/>;
        }

      }
      return (
        <div>
          <WeatherForm onSearch={this.handleSearch}/>
          {renderMessage()}
        </div>
      );
    }
  }
);

module.exports = Weather;
