import UnsplashService from '../services/unsplash-service';
import DummyUnsplashService from '../services/dummy-unsplash-service';

const unsplash = new DummyUnsplashService();

export const onInputChange = (payload) => (dispatch) => {
  if (payload.length <= 30) {
    dispatch({ type: 'CHANGE_INPUT', payload });
  }
};

export const getRandomPhotos = (count) => async (dispatch) => {
  unsplash
    .getRandomPhotos(count)
    .then((imageList) => {
      dispatch({ type: 'PUSH_NEW_IMAGE', payload: imageList });
    })
    .catch((e) => {
      dispatch({ type: 'SET_HAS_ERROR_TRUE' });
      dispatch({ type: 'SET_ERROR_MESSAGE', payload: e });
    });
};

export const searchSubmit = (payload) => async (dispatch) => {
  const imagesToLoad = payload[2];
  unsplash
    .searchPhotos(...payload)
    .then((imageList) => {
      if (imageList.length === 0) {
        dispatch({ type: 'CLEAR_IMAGE_LIST' });
        dispatch({ type: 'SET_HAS_IMAGE_FALSE' });
      } else if (imageList.length < imagesToLoad) {
        dispatch({ type: 'SET_HAS_ERROR_FALSE' });
        dispatch({ type: 'SET_HAS_IMAGE_FALSE' });
        dispatch({ type: 'RESET_CURRENT_SEARCH_PAGE' });
        dispatch({ type: 'SET_SEARCH_KEY' });
        dispatch({ type: 'CLEAR_IMAGE_LIST' });
        dispatch({ type: 'PUSH_NEW_IMAGE', payload: imageList });
      } else {
        dispatch({ type: 'SET_HAS_ERROR_FALSE' });
        dispatch({ type: 'SET_HAS_IMAGE_TRUE' });
        dispatch({ type: 'RESET_CURRENT_SEARCH_PAGE' });
        dispatch({ type: 'SET_SEARCH_KEY' });
        dispatch({ type: 'CLEAR_IMAGE_LIST' });
        dispatch({ type: 'PUSH_NEW_IMAGE', payload: imageList });
      }
    })
    .catch((e) => {
      dispatch({ type: 'SET_HAS_ERROR_TRUE' });
      dispatch({ type: 'SET_ERROR_MESSAGE', payload: e });
    });
};

export const requestNextSearchPage = (payload) => async (dispatch) => {
  unsplash
    .searchPhotos(...payload)
    .then((imageList) => {
      if (imageList.length === 0) {
        dispatch({ type: 'SET_HAS_IMAGE_FALSE' });
      } else {
        dispatch({ type: 'PUSH_NEW_IMAGE', payload: imageList });
        dispatch({ type: 'INC_CURRENT_SEARCH_PAGE' });
      }
    })
    .catch((e) => {
      dispatch({ type: 'SET_HAS_ERROR_TRUE' });
      dispatch({ type: 'SET_ERROR_MESSAGE', payload: e });
    });
};
