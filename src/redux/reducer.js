const initialState = {
  imageList: [],
  inputValue: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PUSH_NEW_IMAGE':
      return { ...state, imageList: [...state.imageList, ...action.payload] };
    case 'CHANGE_INPUT':
      return { ...state, inputValue: action.payload };
    case 'SEARCH_SUBMIT':
      return { ...state, imageList: [...action.payload] };
    case 'CLEAR_IMAGE_LIST':
      return { ...state, imageList: [] };
    default:
      return state;
  }
};

export default reducer;
