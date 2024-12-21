import { configureStore } from "@reduxjs/toolkit";
import tutoReducer from "./TutoSlice";
const store = configureStore({
    reducer : {
        tuto : tutoReducer,
    }
})

export default store;