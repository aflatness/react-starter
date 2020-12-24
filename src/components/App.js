import React from 'react';
import Search from './Search.jsx';
import ToWatch from './ToWatch.jsx';
import Watched from './Watched.jsx';
import AddMovie from './AddMovie.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movieList: this.props.movies,
      watched: [],
      toWatch: [],
      focus: 'toWatch',
      searched: [],
      focusedComp: ['focusedBtn', 'unFocusedBtn']
    }
  }

  handleSearch(text) {
    text = text.toLowerCase();
    const movieFocus = this.state.movieList.filter(({title}) => title.toLowerCase().includes(text));

    if (movieFocus.length) {
      this.setState({
        searched: movieFocus,
        focus: 'searched'
      });
    } else {
      this.setState({
        searched: [{title: `No movies found with ${text}`}],
        focus: 'searched'
      });
    }
  }

  handleClear(e) {
    document.getElementById('search-box').value = '';
    this.setState({
      focus: 'toWatch'
    });
  }

  handleAdd(movie) {
    document.getElementById('add-Bar').value = '';
    this.setState({
      movieList: [...this.state.movieList, movie],
      toWatch: [...this.state.toWatch, movie],
      focus: 'toWatch'
    });
  }

  handleWatched(focusMovie) {
    focusMovie.status = !focusMovie.status
    const {movieList, watched, toWatch} = this.state;
    if (focusMovie.status) {

      this.setState({
        movieList: movieList.map(movie => movie.title === focusMovie.title ? focusMovie : movie),
        toWatch: toWatch.filter(({title}) => title !== focusMovie.title),
        watched: [...watched, focusMovie]
      });
    } else {
        this.setState({
        movieList: movieList.map(movie => movie.title === focusMovie.title ? focusMovie : movie),
        toWatch: [...toWatch, focusMovie],
        watched: watched.filter(({title}) => title !== focusMovie.title)
      })
    }
  }

  handleListChange(e) {
    const focus = e.target.value;
    const focusedComp = this.state.focusedComp.reverse();
    this.setState({focus, });
  }

  render(){
    const {watched, toWatch, focus, searched} = this.state;
    let moviesShown;

    if (focus === 'toWatch') {
      moviesShown =
        <div>
          {toWatch.map(movie => {
            return <ToWatch movie={movie} handleWatched={this.handleWatched.bind(this)} watched={movie.status}/>
          })}
        </div>
    } else if (focus ==='searched') {
      moviesShown =
        <div className='searched'>
          {searched.map(movie => {
            const watched = movie.status ? 'To watch' : 'Watched';
            return (
              <div>
                <div className='movie-title'>
                  {movie.title}
                <button className='status' classNameonClick={() => this.handleWatched(movie)}>{watched}</button>
                </div>
              </div>
            )
          })}
        </div>
    } else {
      moviesShown =
        <div>
            {watched.map(movie => {
              return <Watched movie={movie} handleWatched={this.handleWatched.bind(this)} watched={movie.status} />
            })}
        </div>
    }

    return (
      <div>
        <div id='search-bar'>
          <Search searchMovie={this.handleSearch.bind(this)} clearSearch={this.handleClear.bind(this)}/>
        </div>
        <div id='add-movie'>
          <AddMovie handleAdd={this.handleAdd.bind(this)} />
        </div>
        <br />
        <button className={this.state.focusedComp[0]} onClick={this.handleListChange.bind(this)} value='toWatch'>To Watch</button>
        <button className={`${this.state.focusedComp[1]} watchedComp`} onClick={this.handleListChange.bind(this)} value='Watched'>Watched</button>
        {moviesShown}
      </div>
  )}
}

export default App;
