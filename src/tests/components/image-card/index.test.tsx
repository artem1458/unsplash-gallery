import * as React from 'react';
import { mount } from 'enzyme';
import ImageCard from '../../../../src/components/image-card';

describe('src/components/image-card', () => {
  it('src/components/image-card', () => {
    const expectedClass =
      '.image-card.col-lg-4.col-md-6.col-sm-12.d-flex.justify-content-center.p-0.m-2';
    const props = {
      imageProps: {
        alt: 'someImage',
        urlSmall: 'http://pixelartmaker.com/art/23fc5f6bbd18e66.png',
        color: '#fefefe',
        userName: 'AuthorName',
        id: 12,
      },
    };

    const wrapper = mount(<ImageCard {...props} />);

    expect(wrapper.find(expectedClass)).toHaveLength(1);
  });
});
