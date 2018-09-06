const React = require('react');
const axios = require('axios');

class App extends React.Component {
  componentDidMount(){
    axios.get('/pets').then(res => {
      console.log(res.data)
    })
  }

  render(){
    return(
      <div>
        Pets
      </div>
    )
  }
}
module.exports = App;