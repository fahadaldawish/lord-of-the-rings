import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends Component {
 render(){
  return (
    <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <Movie title={this.props.title[0]} hour={this.props.hour[0]} minutes={this.props.minutes[0]} />        
        <Movie title={this.props.title[1]} hour={this.props.hour[1]} minutes={this.props.minutes[1]} />
        <Movie title={this.props.title[2]} hour={this.props.hour[2]} minutes={this.props.minutes[2]} />
        
        </div>
  );
}
}
export default App;
