
// import { createRoot } from 'react-dom/client'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./css/a.css"
// import "./css/c.css"
// import App from './App.jsx'
// import store from './store.jsx';
// import {Provider} from "react-redux";
// createRoot(document.getElementById('root')).render(
  
//    <Provider store={store}>
//  <App />
// </Provider>
 
// )









import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/a.css";
import "./css/c.css";
import App from './App.jsx';

import { Provider } from "react-redux";
import store, { persistor } from "./store"; // ✅ Correct way to import both

import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

