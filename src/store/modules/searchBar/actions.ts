import { Action } from './types';

const searchBarActions = {

  showSearchBar(): Action {
    return {
      type: 'SHOW_SEARCH_BAR',
    };
  },

  setSearchBarValue(value: string): Action {
    return {
      value,
      type: 'SET_SEARCH_BAR_VALUE',
    };
  },

  hideSearchBar(): Action {
    return {
      type: 'HIDE_SEARCH_BAR',
    };
  },
};

export default searchBarActions;
