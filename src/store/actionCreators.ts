/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as actionTypes from './actionTypes';

export function setCity(city: string) {
  const action: CityAction = {
    type: actionTypes.SET_CITY,
    city,
  };

  return action;
}

export function resetCity(city: string) {
  const action: CityAction = {
    type: actionTypes.RESET_CITY,
    city,
  };
  return action;
}
