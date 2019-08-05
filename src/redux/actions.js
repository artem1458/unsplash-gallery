import UnsplashService from '../services/unsplash-service';
import DummyUnsplashService from '../services/dummy-unsplash-service';

const unsplash = new UnsplashService();

export const getRandomPhotos = (count) => async (dispatch) => {
  const payload = await unsplash.getRandomPhotos(count);

  dispatch({ type: 'PUSH_NEW_IMAGE', payload });
};

export const onInputChange = (payload) => (dispatch) => {
  dispatch({ type: 'CHANGE_INPUT', payload });
};

export const searchSubmit = (payload) => async (dispatch) => {
  dispatch({ type: 'INC_CURRENT_SEARCH_PAGE' });

  const { imageList, totalPages } = await unsplash.searchPhotos(...payload);

  dispatch({ type: 'SET_SEARCH_KEY' });
  dispatch({ type: 'CLEAR_IMAGE_LIST' });
  dispatch({ type: 'PUSH_NEW_IMAGE', payload: imageList });
  dispatch({ type: 'SET_COUNT_OF_PAGE', payload: totalPages });
};

export const requestNextSearchPage = (payload) => async (dispatch) => {
  const { imageList, totalPages } = await unsplash.searchPhotos(...payload);

  if (imageList.length === 0) {
    return dispatch({ type: 'SET_HAS_IMAGE_FALSE' });
  }

  dispatch({ type: 'PUSH_NEW_IMAGE', payload: imageList });
  dispatch({ type: 'INC_CURRENT_SEARCH_PAGE' });
  dispatch({ type: 'SET_COUNT_OF_PAGE', payload: totalPages });
};
