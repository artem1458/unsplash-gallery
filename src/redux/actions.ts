export const getRandomPhotos = () => ({
	type: 'USER_RANDOM_PHOTOS_FETCH_REQUEST',
});

export const requestNextSearchPage = () => ({
	type: 'USER_REQUEST_FETCH_NEXT_SEARCH_PAGE',
});

export const searchSubmit = (searchKey: string) => ({
	type: 'USER_SEARCH_SUBMIT',
	payload: searchKey,
});
