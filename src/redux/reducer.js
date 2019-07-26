const reducer = (state = [], action) => {
  switch (action.type) {
    case 'pushNewImage':
      return state.push(action.payload);
    default:
      return state;
  }
};

export default reducer;
