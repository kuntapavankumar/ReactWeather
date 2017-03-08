var React = require('react');

// var About = React.createClass(
//   {
//     render: function () {
//       return (
//           <h2>About Component</h2>
//       );
//     }
//   }
// );

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p> This is a weather application build on React.</p>
      <p>
        Here are some of the tools I used:
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used.
          </li>
          <li>
            <a href="http://openweathermap.org"> Open Weather Map</a>- I used Open WEather Map to search for weather data for the city
          </li>
        </ul>
      </p>
    </div>
  );
}

module.exports = About;
