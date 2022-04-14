/* eslint-disable no-case-declarations */
import * as actionTypes from './actionTypes';

const initialState: CityState = {
  city: '',
};

const reducer = (
  // eslint-disable-next-line default-param-last
  state: CityState = initialState,
  action: CityAction
): CityState => {
  const { type } = action;
  switch (type) {
    case actionTypes.SET_CITY:
      return {
        ...state,
        city: action.city,
      };
    case actionTypes.RESET_CITY:
      return {
        ...state,
        city: '',
      };
    default:
      return state;
  }
};

export default reducer;
