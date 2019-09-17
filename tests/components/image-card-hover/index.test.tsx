import React from 'react';
import { mount } from 'enzyme';

import ImageCardHover from 'src/components/image-card-hover';

describe('src/components/image-card', () => {
	const props = {
		color: '#fff',
		id: '12321321',
		userName: 'UserName',
	};

	it('should contain image-card-hover element', () => {
		//Given
		const expectedClass = '.image-card-hover';

		//When
		const wrapper = mount(<ImageCardHover {...props} />);

		//Then
		expect(wrapper.find(expectedClass)).toHaveLength(1);
	});

	it('should contain author element', () => {
		//Given
		const expectedClass = '.author';

		//When
		const wrapper = mount(<ImageCardHover {...props} />);

		//Then
		expect(wrapper.find(expectedClass)).toHaveLength(1);
	});

	it('should contain averaged-color element', () => {
		//Given
		const expectedClass = '.averaged-color';

		//When
		const wrapper = mount(<ImageCardHover {...props} />);

		//Then
		expect(wrapper.find(expectedClass)).toHaveLength(1);
	});

	it('should contain download-btn element', () => {
		//Given
		const expectedClass = '.download-bnt';

		//When
		const wrapper = mount(<ImageCardHover {...props} />);

		//Then
		expect(wrapper.find(expectedClass)).toHaveLength(1);
	});

	it.each`
		userName
		${'Jane'}
		${'2qvq23'}
		${'QeRv12sX'}
		${'1zxvFasdx'}
		${'1esASD21dDf'}
	`('author should contain correct href', ({ userName }) => {
		//Given
		const reg = /^(https:\/\/unsplash\.com\/@)([\w])+$/g;

		//When
		const wrapper = mount(
			<ImageCardHover {...props} userName={userName} />
		).find('.author-link');
		const href = wrapper.prop('href');

		//Then
		expect(href).toMatch(reg);
	});

	it.each`
		id
		${'123'}
		${'2qvq23'}
		${'QeRv12sX'}
		${'1zxvFasdx'}
		${'1esASD21dDf'}
	`('button should contain correct href', ({ id }) => {
		//Given
		const reg = /^(https:\/\/unsplash\.com\/photos\/)([\w])+(\/download\?force=true)$/g;

		//When
		const wrapper = mount(<ImageCardHover {...props} id={id} />).find(
			'.download-bnt'
		);
		const href = wrapper.prop('href');

		//Then
		expect(href).toMatch(reg);
	});
});
