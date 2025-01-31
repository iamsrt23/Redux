import { createSlice } from "@reduxjs/toolkit";
// Steps 

export const counterSlice = createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value+=1

        }
    }
})


//  Actions

export const {increment} = counterSlice.actions

export default counterSlice.reducer