import { combineReducers } from "redux";
import toggleSideBarReducer from "./slices/toggle.slice";
import isDropDown from "./slices/dropDown.slice"
import isUserLogin from "./slices/login.slice"
import registerUser from "./slices/register.slice";
import loadingSlice from "./slices/loading.slice"
 const rootReducer = combineReducers({
    sideBarToggle: toggleSideBarReducer,
    isDropDown: isDropDown,
    userLogin: isUserLogin,
    newUser: registerUser,
    isLoading: loadingSlice
});

export default rootReducer;