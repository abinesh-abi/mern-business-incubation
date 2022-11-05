import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {name:''} 

export const userSlice = createSlice({
    name:'admin',
    initialState:{value:initialStateValue},
    reducers:{
        userLogin:(state,action)=>{
            state.value = action.payload
        },
        userLogout:(state)=>{
            state.value = initialStateValue
        }
    }
})

export const {userLogin,userLogout} = userSlice.actions
export default userSlice.reducer