import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from  'react-redux'
import store from './store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* 包裹 最顶层 传入一个store */}
      <Provider store={store}>
          <App/>
      </Provider>
  </React.StrictMode>
);

