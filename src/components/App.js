import React from 'react';
import Movie from './Movie.jsx';
import Search from './Search.jsx';


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
    this.setState({
      moviesShown: movieFocus
    });
  }

  handleClear(e) {
    document.getElementById('search-box').value = '';
    this.setState({
      moviesShown: this.props.movies
    });
  }

  render(){
    const movies = this.state.moviesShown;
    return (
      <div>
        <div id='search-bar'>
          <Search searchMovie={this.handleSearch.bind(this)} clearSearch={this.handleClear.bind(this)}/>
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
