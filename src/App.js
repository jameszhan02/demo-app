import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: " "};
  }

  callAPI() {
    fetch("http://localhost:9000/helloworld")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res}))
      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return(
      <div className="app">
        <div className = "hello-world"> 
            {this.state.apiResponse}
        </div>
      </div>
    )
  }
}

export default App;
