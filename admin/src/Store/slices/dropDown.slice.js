import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isdropdown: false,
}
const isdropDown = createSlice({
    name: "dropdwn",
    initialState,
    reducers:{
        isDropDown: (state) => {
            state.isdropdown = !state.isdropdown
        }
    },
})

export const { isDropDown } = isdropDown.actions;
export default isdropDown.reducer