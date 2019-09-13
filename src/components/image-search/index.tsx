import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

interface ISearchSubmitArgTuple extends Array<number | string>  {
    0: string,
    1: number,
    2: number,
    length: 3
}

interface IProps {
    currentInputValue: string,
    searchSubmit: (arg0: ISearchSubmitArgTuple) => void,
    searchKey: string,
    imagesToLoad: number,
    inputChange: (arg0: string) => void
}


const ImageSearch = (props: IProps) => {
    const {currentInputValue, searchSubmit, searchKey, imagesToLoad, inputChange} = props;

    const onSearchSubmit = (e) => {
        e.preventDefault();

        if (currentInputValue.length > 1 && currentInputValue !== searchKey) {
            searchSubmit([currentInputValue, 1, imagesToLoad]);
        }
    };

    const onInputChange = (e) => inputChange(e.target.value);


    return (
        <form className="jumbotron container p-4">
            <div className="row">
                <input
                    type="search"
                    className="form-control col-md-10 col-sm-12"
                    placeholder="Type and Search"
                    onChange={onInputChange}
                    value={currentInputValue}
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
