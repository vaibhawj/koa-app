const React = require('react');
const axios = require('axios');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pets: [],
      name: "",
      species: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getPets = this.getPets.bind(this);
  }

  getPets() {
    axios.get('/pets').then(res => {
      this.setState({
        pets: res.data
      });
    })
  }
  componentDidMount() {
    this.getPets();
  }

  handleChange(fieldName) {
    return function (e) {
      this.setState({
        [`${fieldName}`]: e.target.value
      });
    }.bind(this)
  }

  handleClick() {
    this.state.name && this.state.species && axios.post('/pets', {
      name: this.state.name.trim(),
      species: this.state.species.trim()
    }).then(res => {
      this.setState({ name: "", species: "" });
      this.getPets();
    })
  }

  render() {
    return (
      <div className="container">
        <h1>The Pet Store</h1>
        <section>
          <input type="text" placeholder="Name" onChange={this.handleChange('name')} value={this.state.name} /><input type="text" placeholder="Species" onChange={this.handleChange('species')} value={this.state.species} /><button onClick={this.handleClick}>Add Pet</button>
          <section>
            <div className="table-responsive">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Species</th>
                  </tr>
                  {
                    this.state.pets.map((pet, i) => <tr key={i}><td>{pet.name}</td><td>{pet.species}</td></tr>)
                  }
                </tbody>
              </table>
            </div>
          </section>
        </section>
      </div>
    )
  }
}
module.exports = App;