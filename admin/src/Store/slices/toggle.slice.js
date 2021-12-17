import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  istoggle: false,
}
const sideBarToggle = createSlice({
    name: "sidebartoggle",
    initialState,
    reducers:{
        isToggle: (state) => {
            state.istoggle = !state.istoggle
        }
    },
})

export const { isToggle } = sideBarToggle.actions;
export default sideBarToggle.reducer