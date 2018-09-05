const React = require('react');

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    const count = this.state.count + 1;
    this.setState({
      count 
    })
  }

  decrement(){
    const count = this.state.count - 1;
    this.setState({
      count 
    })
  }

  render(){
    return(
      <div>
        {
          this.state.count
        }
        <button onClick={this.increment}>+</button><button onClick={this.decrement}>-</button>
      </div>
    )
  }
}
module.exports = App;