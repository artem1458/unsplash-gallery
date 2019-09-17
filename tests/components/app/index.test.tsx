import React from 'react';
import { mount } from 'enzyme';

import App from 'components/app';

jest.mock('components/image-search', () => (): JSX.Element => (
	<div className="image-search" />
));
jest.mock('components/image-board', () => (): JSX.Element => (
	<div className="image-board" />
));

describe('components/app', () => {
	it('should contain image-search class', () => {
		//Given
		const expectedClass = '.image-search';

		//When
		const wrapper = mount(<App />);

		//Then
		expect(wrapper.find(expectedClass)).toHaveLength(1);
	});

	it('should contain image-board class', () => {
		//Given
		const expectedClass = '.image-board';

		//When
		const wrapper = mount(<App />);

		//Then
		expect(wrapper.find(expectedClass)).toHaveLength(1);
	});
});
