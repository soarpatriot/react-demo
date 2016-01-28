var React = require('react');
var ReactDOM = require('react-dom');

var names = ['Alice','Tank','Jack']

class Person extends React.Component{
  render(){
    return  <div>Hello, {this.props.name}!</div>
  }

}

class List extends React.Component{
  render(){
    return  <div>
    {
      names.map(function(name){
        return  <Person key={name} name={name}/>
      })
    }
    </div>
  }
}
ReactDOM.render(<List/>,document.getElementById('list'));
