const reducer = (state = [], action) => {
  switch (action.type) {
    case 'pushNewImage':
      return pushNewImage(state, action);
    default:
      return state;
  }
};

const pushNewImage = (state, action) => {
  return [...state, ...action.payload];
};

export default reducer;
