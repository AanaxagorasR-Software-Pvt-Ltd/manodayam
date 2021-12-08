import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_ADMIN_URL, LOGIN_API} from "../../utill/api.endpoints";
import { notify } from "../../utill/"
export const UserLogin = createAsyncThunk(
    'login/loginStatus',
    async (reqData, thunkAPI) => {
        const res  =  await axios.post(`${API_ADMIN_URL}${LOGIN_API}`,reqData);
    
        if(res?.data?.status) {
            notify("success",res.data.message)
        } else {
            notify("error",res.data.message)
        }
        return res.data ?? {message:"please try again", status: false}; 
});
