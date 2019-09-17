import { takeEvery } from 'redux-saga/effects';
import * as workers from './workers';

export function* watchFetchRandomPhotos() {
	yield takeEvery(
		'USER_RANDOM_PHOTOS_FETCH_REQUEST',
		workers.fetchRandomPhotos
	);
}

export function* watchUserRequestNextSearchPage() {
	yield takeEvery(
		'USER_REQUEST_FETCH_NEXT_SEARCH_PAGE',
		workers.requestNextSearchPage
	);
}

export function* watchUserSearchSubmit() {
	yield takeEvery('USER_SEARCH_SUBMIT', workers.userSearchSubmit);
}
