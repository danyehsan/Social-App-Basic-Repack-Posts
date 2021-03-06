import React from 'react';

class PostForm extends React.Component {
  state = { name: '' }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPost(this.state.name);
    this.setState({ name: '' })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <input
        placeholder="Add a new Post"
        required
        value={this.state.name}
        onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default PostForm