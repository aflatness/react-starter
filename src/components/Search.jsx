import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    const {searchMovie, clearSearch} = this.props;
    const text = this.state.text;
    return (
      <div>
        <input id='search-box' type='text' placeholder='Search...' onChange={this.handleChange.bind(this)}></input>
        <button id='searchBtn' type='button' onClick={() => searchMovie(text)}>Go!</button>
        <br />
        <button id='clearSearch' type='button' onClick={clearSearch}>Clear search</button>
      </div>
    )
  }
}

export default Search;