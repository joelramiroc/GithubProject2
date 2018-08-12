import React, { Component } from 'react';
import './App.css';
import './skeleton.css'
import JSon from './JSon';

class App extends Component {
  constructor()
  {
      super();
      this.state = {
      getRepos : true,
      user : 'joelramiroc'
    }
    this.Updatestate = this.Updatestate.bind(this);
    this.setField = this.setField.bind(this);
  }
  
  Updatestate() {
    console.log(this.state.getRepos);
    var s = true;
    if (this.state.getRepos === true) {
     s = false
    }
  
    this.setState(function() {
      return {
        getRepos: s
      };
    });
  }
  
  setField (e) {
    console.log(this.state.name);
    const name = e.target.name;
      const value = e.target.value;
    this.setState( {
        name: value
    });
   }
  
    componentDidMount() {
      this.Updatestate(this.state.getRepos);
    }
  
    render() {
       if (!this.state.getRepos) return(
      <div className="App-header"> 
        <h1 className="App-title"> GITHUB PROYECT </h1> 
        <div className = "form-box">
            <h2>Enter github user name:</h2>
            
            <input type = "text"
              onChange = {this.setField}
              name = "back"/>
            <button onClick={this.Updatestate}>FIND</button>
        </div>
      </div>
      )

      return (
        <div className="App-header">
        <h1 className="App-title"> GITHUB PROYECT - REPOSITORIES</h1>
          <div>
             
            <JSon userName = {this.state.name} ></JSon>
            <button onClick={this.Updatestate}>BACK</button>
          </div>
        </div>
      );
    }
  }
  
  export default App;
