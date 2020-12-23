import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
const movies = require('./fakeMovieData.js').movies

ReactDOM.render(<App movies={movies}/>, document.getElementById('app'));
