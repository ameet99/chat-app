import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import { dummyDataReducer } from "./reducers";

const rootReducer = combineReducers({
  dummyData: dummyDataReducer,
});

// If you want to reset redux state then change the key (example: root1.5, abc, xyz1.2)
const persistConfig = {
  key: "root1.1",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(thunk) 
);
export const persistor = persistStore(store);
