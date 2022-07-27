import {  combineReducers , legacy_createStore as createStore  } from "redux";
import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers ({
  profilePage: profileReducer,
  messagePage: messageReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);


window.store = store;

export default store;