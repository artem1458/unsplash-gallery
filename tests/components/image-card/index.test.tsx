import * as React from 'react';
import {mount} from 'enzyme';
import ImageCard from 'src/components/image-card';

describe('src/components/image-card', () => {
    const props = {
        imageProps: {
            alt: 'someImage',
            urlSmall: 'someImageUrl',
            color: '#fefefe',
            userName: 'AuthorName',
            id: 12
        },
    };

    it('should contain className', () => {
        //Given
        const expectedClass = '.img-thumbnail.rounded';

        //When
        const wrapper = mount(<ImageCard {...props} />);

        //Then
        expect(wrapper.find(expectedClass)).toHaveLength(1);
    });

    it('should contain className', () => {
        //Given
        const expectedClass = '.image-card.col-lg-4.col-md-6.col-sm-12.d-flex.justify-content-center.p-0.m-2';

        //When
        const wrapper = mount(<ImageCard {...props} />);

        //Then
        expect(wrapper.find(expectedClass)).toHaveLength(1);
    });

    it('should contain props', () => {
        //Given
        const {imageProps: {color, userName, id}} = props;

        const expectedProps = {color, userName, id};

        //When
        const wrapper = mount(<ImageCard {...props} />);

        //Then
        expect(wrapper.find({...expectedProps})).toHaveLength(1);
    });
});