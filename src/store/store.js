import { configureStore } from '@reduxjs/toolkit'
import reactReducer from "./authSlice"
const store = configureStore({
    reducer:{
        reactReducer
    }
})
export default store    