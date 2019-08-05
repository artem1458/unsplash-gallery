const initialState = {
  imageList: [],
  currentInputValue: '',
  searchKey: '',
  currentSearchPage: 1,
  totalPages: 0,
  imagesToLoad: 30,
  hasMoreImage: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PUSH_NEW_IMAGE':
      return { ...state, imageList: [...state.imageList, ...action.payload] };

    case 'CHANGE_INPUT':
      return {
        ...state,
        currentInputValue: action.payload,
      };

    case 'INC_CURRENT_SEARCH_PAGE':
      return { ...state, currentSearchPage: state.currentSearchPage + 1 };

    case 'SET_COUNT_OF_PAGE':
      return { ...state, totalPages: action.payload };

    case 'SET_SEARCH_KEY':
      return { ...state, searchKey: state.currentInputValue };

    case 'CLEAR_IMAGE_LIST':
      return { ...state, imageList: [] };

    case 'SET_HAS_IMAGE_FALSE':
      return { ...state, hasMoreImage: false };

    case 'SET_HAS_IMAGE_TRUE':
      return { ...state, hasMoreImage: true };

    default:
      return state;
  }
};

export default reducer;
