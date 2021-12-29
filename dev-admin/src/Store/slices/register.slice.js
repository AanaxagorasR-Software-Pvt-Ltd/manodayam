import { createSlice } from "@reduxjs/toolkit";

import { RegisterService } from "../Services/Register"
import { loadingAction } from "./loading.slice";

const registerSlice = createSlice({
    name:"register",
    initialState:{ loading: false, setStore: "false"},
    reducers:{},
    extraReducers: { 
        [RegisterService.pending]: (state,action) => {
            state.loading = true;
            // loadingAction(true)
        },
        [RegisterService.fulfilled]: (state,{ type, payload }) =>{
            state.newUser = payload;
            state.loading = false
        },
        [RegisterService.rejected]: (state,action) => {
            state.newUser = action.payload;
            state.loading = false
        } 
    }
})
export default registerSlice.reducer;