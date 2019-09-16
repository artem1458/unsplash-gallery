import * as React from 'react';
import {mount, shallow} from 'enzyme';

import ImageCardHover from "src/components/image-card-hover";

describe('src/components/image-card', () => {
    const props = {
        color: '#fff',
        id: 12,
        userName: 'UserName'
    };

    it('should contain class', () => {
        //Given
        const expectedClass = '.image-card-hover.rounded.d-flex.align-items-end';

        //When
        const wrapper = shallow(<ImageCardHover {...props} />);

        //Then
        expect(wrapper.find(expectedClass)).toHaveLength(1);
    });


});