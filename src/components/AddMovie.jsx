import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      watched: false,
    }
  }

  handleChange (e) {
    this.setState({
      title: e.target.value
    });
  }

  render() {
    const handleAdd = this.props.handleAdd;
    return (
      <div>
        <input id='add-Bar' type='text' placeholder='Add a movie!' onChange={this.handleChange.bind(this)}></input>
        <button id='addBtn' onClick={() => handleAdd(this.state)}>Add!</button>
      </div>
    )
  }
}

export default AddMovie;