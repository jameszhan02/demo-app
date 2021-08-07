import './App.css';
import { Component } from 'react';
import axios from 'axios';

const url = "http://localhost:9000";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: " "};
  }

  callAPI() {
    axios.get(url + '/helloWorld')
      .then((res) => this.setState({ apiResponse: res.data}))
      .catch((err) => console.log(err))
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
