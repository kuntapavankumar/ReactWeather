var React = require('react');
var ReactDOM = require('react-dom');

function Button(props) {
  return (
    <button>Test</button>
  );
}

ReactDOM.render(
  <Button/>
,
    document.getElementById('app')
  );
