var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openweatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');
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
        isLoading:true,
        errorMessage: undefined
      });
      openweatherMap.getTemp(updates.location).then(function (temp){
        that.setState({
          location: updates.location,
          temp: temp,
          isLoading: false
        });
      }, function (e){
        that.setState({
          isLoading:false,
          temp: '',
          location: '',
          errorMessage: e.message
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
      var {isLoading, temp, location, errorMessage} = this.state;

      function renderMessage(){
        if(isLoading){
          return <h3 className="text-center">Fetching Weather...</h3>;
        } else if (temp && location ){
          return <WeatherMessage location={location} temp={temp}/>;
        }

      }

      function renderError(){
        if (typeof errorMessage === 'string') {
          return (
            <ErrorModal message={errorMessage}/>
          );
        }
      }
      return (
        <div>
          <h1 className="text-center page-title">Get Weather</h1>
          <WeatherForm onSearch={this.handleSearch}/>
          {renderMessage()}
          {renderError()}
        </div>
      );
    }
  }
);

module.exports = Weather;
