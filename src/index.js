import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { PersistGate } from 'redux-persist/integration/react';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import './index.css';
// import { App } from './App';
//
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store.store}>
//       <PersistGate loading={null} persistor={store.persistor}>
//         <App />
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root'),
// );
