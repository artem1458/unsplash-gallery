import * as React from 'react';
import {mount} from 'enzyme';
import ImageBoard from 'components/image-board/component';
import mapStateToProps from 'components/image-board/state-selector';

describe('src/components/image-board', () => {
    const props = {
        requestNextSearchPage: () => void (0),
        searchKey: '',
        getRandomPhotos: () => void (0),
        imageList: [{
            alt: 'string',
            urlSmall: 'string',
            color: 'string',
            userName: 'string',
            id: '213daskkjndvs'
        }],
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

    it('expect to have error element', () => {
        //Given
        const expectedClass = '.error-message';

        //When
        const wrapper = mount(<ImageBoard {...props} hasError={true} />);

        //Then
        expect(wrapper.find(expectedClass)).toHaveLength(1)
    });

    it('expect to have end-message element', () => {
        //Given
        const expectedClass = '.end-message';

        //When
        const wrapper = mount(<ImageBoard {...props} hasMoreImage={false} />);

        //Then
        expect(wrapper.find(expectedClass)).toHaveLength(1)
    });

    it('expect to have image-board element', () => {
        //Given
        const expectedClass = '.image-board';

        //When
        const wrapper = mount(<ImageBoard {...props} />);

        //Then
        expect(wrapper.find(expectedClass)).toHaveLength(1)
    });

    it('expect to have at least 1 image-card element', () => {
        //Given
        const expectedClass = '.image-card';

        //When
        const wrapper = mount(<ImageBoard {...props} />);

        //Then
        expect(wrapper.find(expectedClass).length).toBeGreaterThan(0)
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

})

