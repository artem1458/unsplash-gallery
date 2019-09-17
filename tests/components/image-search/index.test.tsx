import React from 'react';
import { mount } from 'enzyme';
import ImageSearch from 'components/image-search/component';
import mapStateToProps from 'components/image-search/state-selector';

const searchSubmitMock = jest.fn();

describe('components/image-search', () => {
	const props = {
		searchKey: '',
		searchSubmit: () => {},
	};

	it('expect to have search-input element', () => {
		//Given
		const expectedClass = '.search-input';

		//When
		const wrapper = mount(<ImageSearch {...props} />);

		//Then
		expect(wrapper.find(expectedClass)).toHaveLength(1);
	});

	it('expect to have search-submit element', () => {
		//Given
		const expectedClass = '.search-submit';

		//When
		const wrapper = mount(<ImageSearch {...props} />);

		//Then
		expect(wrapper.find(expectedClass)).toHaveLength(1);
	});

	it('onInputChange must correctly set state', () => {
		//Given
		const inputValue = 'test value';
		const wrapper = mount(<ImageSearch {...props} />);
		const { onInputChange } = wrapper.instance() as ImageSearch;

		//When
		onInputChange({ currentTarget: { value: inputValue } });

		//Then
		expect(wrapper.state('inputValue')).toEqual(inputValue);
	});

	it('input must have change handler', () => {
		//Given
		const wrapper = mount(<ImageSearch {...props} />);
		const { onInputChange } = wrapper.instance() as ImageSearch;

		//When
		const input = wrapper.find('.search-input');

		//Then
		expect(input.prop('onChange')).toEqual(onInputChange);
	});

	it.each`
		inputValue
		${'1stKey'}
		${'2dKey'}
		${'3dKey'}
		${'4thKey'}
	`('search-submit must receive correct args', ({ inputValue }) => {
		//Given
		const state = {
			inputValue: inputValue,
		};

		//When
		const wrapper = mount(
			<ImageSearch {...props} searchSubmit={searchSubmitMock} />
		);

		wrapper.setState({ ...state });

		wrapper.find('.search-submit').simulate('click');

		//Then
		expect(searchSubmitMock).toHaveBeenCalledWith(inputValue);
	});

	it('mapStateToProps', () => {
		//Given
		const store = {
			currentInputValue: 'value',
			currentSearchPage: 1,
			imagesToLoad: 10,
			imageList: [],
			hasMoreImage: true,
			hasError: false,
			errorMessage: 'errorMessage',
			searchKey: 'searchKey',
		};

		//When
		const actual = mapStateToProps(store);

		//Then
		expect(actual.searchKey).toEqual('searchKey');
	});
});
