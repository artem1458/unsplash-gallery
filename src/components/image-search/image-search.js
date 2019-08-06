import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

const ImageSearch = (props) => {
  const onSearchSubmit = (e) => {
    e.preventDefault();
    const { currentInputValue, searchSubmit, searchKey, imagesToLoad } = props;

    if (currentInputValue.length > 1 && currentInputValue !== searchKey) {
      searchSubmit([currentInputValue, 1, imagesToLoad]);
    }
  };

  return (
    <form className="jumbotron container p-4">
      <div className="row">
        <input
          type="search"
          className="form-control col-md-10 col-sm-12"
          placeholder="Type and Search"
          onChange={(e) => {
            props.onInputChange(e.target.value);
          }}
          value={props.currentInputValue}
        />
        <input
          type="submit"
          className="btn btn-success col-md-2 col-sm-12 mt-2 mt-md-0"
          value="Search"
          onClick={onSearchSubmit}
        />
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  currentInputValue: state.currentInputValue,
  searchKey: state.searchKey,
  imagesToLoad: state.imagesToLoad,
});

export default connect(
  mapStateToProps,
  actions,
)(ImageSearch);
