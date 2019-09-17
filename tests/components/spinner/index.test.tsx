import React from 'react';
import Spinner from 'components/spinner';
import { mount } from 'enzyme';

describe('components/spinner', () => {
	it('should contain spinner element', () => {
		//Given
		const expectedClass = '.spinner';

		//When
		const wrapper = mount(<Spinner />);

		//Then
		expect(wrapper.find(expectedClass)).toHaveLength(1);
	});

	it('should contain exact 4 spinner-dot elements', () => {
		//Given
		const expectedClass = '.spinner-dot';
		const expectedLength = 4;

		//When
		const wrapper = mount(<Spinner />);

		//Then
		expect(wrapper.find(expectedClass)).toHaveLength(expectedLength);
	});
});
