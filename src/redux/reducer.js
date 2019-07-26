const reducer = (state = [], action) => {
  const newArr = [...state];
  switch (action.type) {
    case 'pushNewImage':
      newArr.push(...action.payload);
      return newArr;
    default:
      return state;
  }
};

export default reducer;
