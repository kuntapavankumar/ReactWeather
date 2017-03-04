var React = require('react');

var Temp= React.createClass({
    handleClick: function(e) {
      e.preventDefault();
      console.log('The link was clicked');
    },

    render: function () {
      return (
          <a href="#">Click me </a>
      );
    }
});

module.exports = Temp;
