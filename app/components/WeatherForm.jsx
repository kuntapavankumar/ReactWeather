var React = require('react');

var WeatherForm = React.createClass(
  {
    onFormSubmit: function (e) {
      e.preventDefault();
      var updates = {};
      var location = this.refs.location.value;
      if(location.length>0){
        this.refs.location.value='';
        updates.location=location;
        updates.temp='24';
      }
      this.props.onSearch(updates);
    },
    render: function () {
      return (
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="search" ref="location" placeholder="Search weather by city"/>
          </div>
          <div>
            <button className="button expanded hollow">Get Weather</button>
          </div>
        </form>
      );
    }
  }
);

module.exports=WeatherForm;
