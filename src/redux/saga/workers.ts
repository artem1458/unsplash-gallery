import { put, call, select } from 'redux-saga/effects';

import UnsplashService from 'src/services/unsplash-service';

const API = new UnsplashService();

export function* fetchRandomPhotos() {
    try {
        const imagesToLoad = yield select((state) => state.imagesToLoad);
        const imageList = yield call(API.getRandomPhotos, imagesToLoad);

        yield put({type: 'PUSH_NEW_IMAGE', payload:imageList})
    } catch (e) {
        yield put({type: 'SET_HAS_ERROR_TRUE'});
        yield put({type: 'SET_ERROR_MESSAGE', payload: e})
    }
}

export function* requestNextSearchPage() {
    try {
        const {searchKey, currentSearchPage , imagesToLoad} = yield select(state => state);

        const imageList = yield call(API.searchPhotos, searchKey, currentSearchPage + 1, imagesToLoad);

        if (imageList.length === 0) {
            yield put({type: 'SET_HAS_IMAGE_FALSE'})
        } else {
            yield put({type: 'PUSH_NEW_IMAGE', payload: imageList})
            yield put({type: 'INC_CURRENT_SEARCH_PAGE'})
        }
    }catch (e) {
        yield put({type: 'SET_HAS_ERROR_TRUE'});
        yield put({type: 'SET_ERROR_MESSAGE', payload: e})
    }
}

export function* searchSubmit({payload}) {
    try {

    } catch (e) {

    }
}