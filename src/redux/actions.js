import UnsplashService from '../services/unsplash-service';
import DummyUnsplashService from '../services/dummy-unsplash-service';

const unsplash = new DummyUnsplashService();

export const getRandomPhotos = (count) => async (dispatch) => {
  const payload = await unsplash.getRandomPhotos(count);

  dispatch({ type: 'PUSH_NEW_IMAGE', payload });
};

export const onInputChange = (payload) => (dispatch) => {
  dispatch({ type: 'CHANGE_INPUT', payload });
};

export const onSearchSubmit = (payload) => async (dispatch) => {
  const response = await unsplash.searchPhotos(payload);

  dispatch({ type: 'CLEAR_IMAGE_LIST' });
  dispatch({ type: 'PUSH_NEW_IMAGE', payload: response });
};
