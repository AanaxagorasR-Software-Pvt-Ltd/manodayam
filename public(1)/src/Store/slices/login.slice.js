import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { UserLogin } from "../Services/Login"
const userLoginSlice = createSlice({
    name: "login",
    initialState: { user: {},loading:false, login: "undone"},
    reducers: {
        logoutClean(state,data) {
            state.user = Object.assign({}, data,{ loginStatus: "done" })
        }
    },
    extraReducers: {
        [UserLogin.pending]: (state) => {
            state.loading = true;
        },
        [UserLogin.fulfilled]: (state, { type, payload }) => {
            state.loading = false;
            
            if(payload?.status) {
                window.sessionStorage.setItem("token",payload.token);
                window.sessionStorage.setItem("loggedIN",true);
                
            } else {
                window.sessionStorage.removeItem("token");
                window.sessionStorage.removeItem("loggedIN");
                
            }
            console.log("payload ", payload);
            if(payload?.status) { 
                state.user = Object.assign({},payload,{loginStatus :"undone" });
                
            } else {
                state.user = payload
            }

        }
    }
}) 
export const { logoutClean } = userLoginSlice.actions
export default userLoginSlice.reducer;