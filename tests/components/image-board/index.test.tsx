import React from 'react';
import { mount } from 'enzyme';
import ImageBoard from 'components/image-board/component';
import mapStateToProps from 'components/image-board/state-selector';

describe('src/components/image-board', () => {
	const props = {
		requestNextSearchPage: () => void 0,
		searchKey: '',
		getRandomPhotos: () => void 0,
		imageList: [
			{
				alt: 'string',
				urlSmall: 'string',
				color: 'string',
				userName: 'string',
				id: '213daskkjndvs',
			},
			{
				alt: 'string',
				urlSmall: 'string',
				color: 'string',
				userName: 'string',
				id: '213e21edqswafc',
			},
			{
				alt: 'string',
				urlSmall: 'string',
				color: 'string',
				userName: 'string',
				id: 'asdasd2',
			},
		],
		hasError: false,
		hasMoreImage: false,
		errorMessage: 'error',
	};

	it('should contain image-board element', () => {
		//Given
		const expectedClass = '.image-board';

		//When
		const wrapper = mount(<ImageBoard {...props} />);

		//Then
		expect(wrapper.find(expectedClass)).toHaveLength(1);
	});

	it('should contain error element if hasError === true', () => {
		//Given
		const expectedClass = '.error-message';

		//When
		const wrapper = mount(<ImageBoard {...props} hasError={true} />);

		//Then
		expect(wrapper.find(expectedClass)).toHaveLength(1);
	});

	it('should contain end-message element if hasMoreImage === false', () => {
		//Given
		const expectedClass = '.end-message';

		//When
		const wrapper = mount(<ImageBoard {...props} hasMoreImage={false} />);

		//Then
		expect(wrapper.find(expectedClass)).toHaveLength(1);
	});

	it('expect to have image-board element', () => {
		//Given
		const expectedClass = '.image-board';

		//When
		const wrapper = mount(<ImageBoard {...props} />);

		//Then
		expect(wrapper.find(expectedClass)).toHaveLength(1);
	});

	it('expect to have correct quantity of image-card elements', () => {
		//Given
		const expectedClass = '.image-card';
		const quantityOfImages = props.imageList.length;

		//When
		const wrapper = mount(<ImageBoard {...props} />);

		//Then
		expect(wrapper.find(expectedClass).length).toEqual(quantityOfImages);
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
		expect(actual.errorMessage).toEqual('errorMessage');
	});
});
