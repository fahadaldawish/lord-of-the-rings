import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import Movie from './Movie'
const movie = {
       title : [
           'The Fellowship of the Ring',
           'The Two Towers',
           'The Return of The King'
       ],
       hour : [
           2,
           2,
           3
       ],
       minutes : [
           58,
           59,
           21
       ]
}
ReactDOM.render(<App 
    title = {movie.title}
    hour  = {movie.hour}
    minutes  = {movie.minutes}
/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();