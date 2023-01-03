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
    <>
      <div className="area">
        <ul className="circles">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
      <div className="context">
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </div>
    </>
  );
}

export default App;
