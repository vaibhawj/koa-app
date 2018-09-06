const React = require('react');
const axios = require('axios');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pets: []
    }
  }
  componentDidMount() {
    axios.get('/pets').then(res => {
      this.setState({
        pets: res.data
      })
    })
  }

  render() {
    return (
      <div>
        Pets
        {
          this.state.pets.map(pet => <li>{pet.name}</li>)
        }
      </div>
    )
  }
}
module.exports = App;