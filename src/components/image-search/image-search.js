import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

class ImageSearch extends Component {
  onSearchSubmit = (e) => {
    e.preventDefault();
    if (this.props.inputValue.length > 1) {
      this.props.onSearchSubmit(this.props.inputValue);
    }
  };

  render() {
    return (
      <form className="jumbotron row">
        <input
          type="search"
          className="form-control col-10"
          placeholder="Type to Search"
          onChange={(e) => {
            this.props.onInputChange(e.target.value);
          }}
          value={this.props.inputValue}
        />
        <input
          type="submit"
          className="btn btn-primary col-2"
          value="Search"
          onClick={this.onSearchSubmit}
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({ inputValue: state.inputValue });

export default connect(
  mapStateToProps,
  actions,
)(ImageSearch);
