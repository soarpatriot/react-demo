var React = require('react');
var ReactDOM = require('react-dom');

class Hello extends React.Component{
  render(){
    return <h1>Hello, world!</h1>;
  }
}
ReactDOM.render(<Hello/>,document.getElementById('example')
);
