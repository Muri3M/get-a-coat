import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';

import reducer from './store/reducer';

const store: Store<CityState, CityAction> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));

export default store;
