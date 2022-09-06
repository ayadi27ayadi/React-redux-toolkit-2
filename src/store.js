import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./features/userredux"

export const  store = configureStore({
    reducer:{
        user: userReducer
    }
})