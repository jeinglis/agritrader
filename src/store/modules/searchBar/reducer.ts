import { Reducer } from 'redux';

import { SearchBarState, Action } from './types';
import initialState from './state';

const searchBarReducer: Reducer<SearchBarState> = (state = initialState, action: Action) => {
  switch (action.type) {

    case 'SHOW_SEARCH_BAR':
      return {
        ...state,
        shown: true,
        value: '',
      };

    case 'SET_SEARCH_BAR_VALUE':
      if (!state.shown) throw Error('The search bar is not currently shown');
      return {
        ...state,
        value: action.value,
      };

    case 'HIDE_SEARCH_BAR':
      return {
        ...state,
        shown: false,
        value: '',
      };

    default:
      return state;
  }
};

export default searchBarReducer;
