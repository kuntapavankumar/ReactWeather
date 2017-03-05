var React = require('react');
//
// var Examples = React.createClass(
//   {
//     render: function () {
//       return (
//           <h2>Examples Component</h2>
//       );
//     }
//   }
// );

var {Link} = require('react-router');
var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples </h1>
      <p>Here a fwe example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Philadelphia'>Philadelphia, PA</Link>
        </li>
        <li>
          <Link to='/?location=Rio, Brazil'>Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  );
}
module.exports = Examples;
