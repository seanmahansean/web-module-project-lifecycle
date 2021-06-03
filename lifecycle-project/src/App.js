import axios from "axios";
import React from "react";
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data: {}
    };
  }
  componentDidMount(){
    axios
      .get("https://api.github.com/users/seanmahansean")
      .then(res => {
        console.log(res);
        this.setState({data: res.data});
      })
      .catch(err => {
        console.log(err);
      })
  }
  render(){
    return (
      <div>
        <img src={this.state.data.avatar_url} alt="Sean Mahan"/>
        <h1>{this.state.data.login}</h1>
        <p>AKA {this.state.data.name}</p>
      </div>
    )
  }
}

export default App;
