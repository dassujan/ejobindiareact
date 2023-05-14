import { createSlice } from "@reduxjs/toolkit";

const ShowList = createSlice({
    name:"counter",
    initialState:{
        value:0,
    },
    reducers:{
        incr:(x)=>{
            x.value +=1;
        },
        decr:(x)=>{
            x.value -=1;
        }
    }
})
export const {incr, decr} = ShowList.actions;
export const initValue = (x)=>x.counter.value;

export default ShowList.reducer