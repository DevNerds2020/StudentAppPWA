/* eslint-disable max-len */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import dataReducer from '../reducers/data-reducer';
// convert object to string and store in localStorage

export const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('persistantState', serializedState);
  } catch (e) {
    console.warn(e);
  }
};

// load string from localStarage and convert into an Object
// invalid output must be undefined
/**
 * @function loadFromLocalStorage
 * @return {Record<string,unknown>|undefined} serializedState
 */
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('persistantState');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
};

const composeEnhancers = composeWithDevTools({
  name: 'studentManagement',
});

const rootReducer = combineReducers({
  data: dataReducer,
});
const configureStore = () => {
  const store = createStore(rootReducer, loadFromLocalStorage(), composeEnhancers(applyMiddleware()));

  return store;
};
export default configureStore;
