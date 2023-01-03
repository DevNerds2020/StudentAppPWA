import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import configureStore, { saveToLocalStorage } from './redux/store/configureStore';
import router from './utils/custom-routes';

const store = configureStore();
store.subscribe(() => saveToLocalStorage(store.getState()));

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
