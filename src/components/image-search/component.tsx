import React from 'react';
import * as types from 'src/components/image-search/types';

class ImageSearch extends React.Component<types.IProps> {
	state = {
		inputValue: '',
	};

	onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
		this.setState({ inputValue: e.currentTarget.value });
	};

	onSearchSubmit = (e: React.FormEvent<HTMLInputElement>) => {
		e.preventDefault();

		const { inputValue } = this.state;

		if (inputValue.length > 1 && inputValue !== this.props.searchKey) {
			this.props.searchSubmit(inputValue);
		}
	};

	render() {
		const { inputValue } = this.state;

		return (
			<form className="jumbotron container p-4">
				<div className="row">
					<input
						type="search"
						className="form-control col-md-10 col-sm-12"
						placeholder="Type and Search"
						onChange={this.onInputChange}
						value={inputValue}
					/>
					<input
						type="submit"
						className="btn btn-success col-md-2 col-sm-12 mt-2 mt-md-0"
						value="Search"
						onClick={this.onSearchSubmit}
					/>
				</div>
			</form>
		);
	}
}

export default ImageSearch;
