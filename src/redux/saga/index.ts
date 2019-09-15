import {all} from 'redux-saga/effects'
import * as watchers from './watchers';

export default function* rootSaga() {
    yield all([
    watchers.watchFetchRandomPhotos(),
    watchers.watchUserRequestNextSearchPage(),
    watchers.watchUserSearchSubmit(),
    ])
}