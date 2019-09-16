import IState from "../types/state";
import IAction from "../types/action";

const initialState: IState = {
    imageList: [],
    currentInputValue: '',
    searchKey: '',
    currentSearchPage: 1,
    imagesToLoad: 30,
    hasMoreImage: true,
    hasError: false,
    errorMessage: '',
};

const reducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case 'PUSH_NEW_IMAGE':
            return {...state, imageList: [...state.imageList, ...action.payload]};

        case 'CLEAR_IMAGE_LIST':
            return {...state, imageList: []};

        case 'CHANGE_INPUT':
            return {
                ...state,
                currentInputValue: action.payload,
            };

        case 'RESET_CURRENT_SEARCH_PAGE':
            return {...state, currentSearchPage: 1};

        case 'INC_CURRENT_SEARCH_PAGE':
            return {...state, currentSearchPage: state.currentSearchPage + 1};

        case 'SET_SEARCH_KEY':
            return {...state, searchKey: state.currentInputValue};

        case 'SET_HAS_IMAGE_FALSE':
            return {...state, hasMoreImage: false};

        case 'SET_HAS_IMAGE_TRUE':
            return {...state, hasMoreImage: true};

        case 'SET_HAS_ERROR_TRUE':
            return {...state, hasError: true};

        case 'SET_HAS_ERROR_FALSE':
            return {...state, hasError: false};

        case 'SET_ERROR_MESSAGE':
            return {...state, errorMessage: action.payload};

        default:
            return state;
    }
};

export default reducer;
