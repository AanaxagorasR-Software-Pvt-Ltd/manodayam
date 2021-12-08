import { confiureStore } from "@reduxjs/toolkit";


import { configureStore } from '@reduxjs/toolkit'

import rootReducer from "./root.reducer"
export const store = configureStore({
    reducer: rootReducer
})