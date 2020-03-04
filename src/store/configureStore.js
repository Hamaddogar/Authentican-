

import { createStore, combineReducers,compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 


import  signreducer from './reducers/places';
debugger;
 console.log("asjhk")



 const persistConfig = {
    key: 'root',
    storage,
  }
   
  const persistedReducer = persistReducer(persistConfig,  signreducer)
   
// const rootReducer = combineReducers({
//     places: placesReducer
// });

//  let composeEnhenders=compose
//  if(__DEV__)
//  {
//     composeEnhenders = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose


//  }
// const configureStore = () => {
//     return createStore(rootReducer,composeEnhenders());
// };
let store = createStore(persistedReducer)
let persistor = persistStore(store)

export default {store,persistor}