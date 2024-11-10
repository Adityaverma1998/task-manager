"use client"

import { combineReducers, createStore } from "redux";
import { taskReducer } from "./reducers/task-reducer";

const rootReducer = combineReducers({
    tasks: taskReducer,})
const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;

export default store;