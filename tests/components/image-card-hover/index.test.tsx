import * as React from 'react';
import { mount } from 'enzyme';

import ImageCardHover from "src/components/image-card-hover";

describe('src/components/image-card', () => {
    const props = {
        color: '#fff',
        id: '12321321',
        userName: 'UserName'
    };

    it('should contain image-card-hover element', () => {
        //Given
        const expectedClass = '.image-card-hover';

        //When
        const wrapper = mount(<ImageCardHover {...props} />);

        //Then
        expect(wrapper.find(expectedClass)).toHaveLength(1);
    });

    it.each`
    color           |   id          |   userName
    ${'#FFE'}       |   ${'123'}    |   ${'Andrew'}
    ${'#FDD122'}    |   ${'435'}    |   ${'Nick'}
    ${'#FFEEEE'}    |   ${'346'}    |   ${'Kate'}
    ${'#FFE111'}    |   ${'656'}    |   ${'John'}
    ${'#FFE'}       |   ${'756'}    |   ${'Enny'}
    `('should receive Props', ({color, id, userName}) => {
        //Given


        //удалить

        //When
        const wrapper = mount(<ImageCardHover {...props} />);

        //Then
        expect(wrapper.find(expectedClass)).toHaveLength(1);
    });


});