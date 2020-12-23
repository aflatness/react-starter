import React from 'react';
import Movie from './Movie.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movieList: this.props.movies,
      moviesShown: this.props.movies
    }
  }

  handleSearch(text) {
    text = text.toLowerCase();
    const movieFocus = this.state.movieList.filter(({title}) => title.toLowerCase().includes(text));

    if (movieFocus.length) {
      this.setState({
        moviesShown: movieFocus
      });
    } else {
      this.setState({
        moviesShown: [{title: `No movies found with ${text}`}]
      });
    }
  }

  handleClear(e) {
    document.getElementById('search-box').value = '';
    this.setState({
      moviesShown: this.props.movies
    });
  }

  handleAdd(movie) {
    document.getElementById('add-Bar').value = '';
    this.setState({
      movieList: [...this.state.movieList, movie],
      moviesShown: [...this.state.movieList, movie]
    });
  }

  render(){
    const movies = this.state.moviesShown;
    return (
      <div>
        <div id='search-bar'>
          <Search searchMovie={this.handleSearch.bind(this)} clearSearch={this.handleClear.bind(this)}/>
        </div>
        <div id='add-movie'>
          <AddMovie handleAdd={this.handleAdd.bind(this)} />
        </div>
        <div>
          {movies.map(movie => {
            return <Movie title={movie.title} />
          })}
        </div>
      </div>
  )}
}

export default App;
