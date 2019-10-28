import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
    //     <div>
    //     <p>{this.props.title}</p>
    //     <p>{this.props.hour} {this.props.minutes}</p>
    //   </div>
        <div>
        <h1>Lord of the rings :{this.props.title}</h1>
        <h3>{this.props.hour}h {this.props.minutes}m</h3>
      </div>
    );
  }
}
export default Movie;