const pushNewImage = (state, action) => {
  return [...state, ...action.payload];
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'pushNewImage':
      return pushNewImage(state, action);
    default:
      return state;
  }
};

export default reducer;
