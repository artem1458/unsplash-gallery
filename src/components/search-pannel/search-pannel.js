import React, { Component } from 'react';

export class SearchPannel extends Component {
  render() {
    return (
      <form className="jumbotron form-group">
        <input
          type="search"
          className="form-control"
          placeholder="Type to Search"
        />
      </form>
    );
  }
}

export default SearchPannel;
