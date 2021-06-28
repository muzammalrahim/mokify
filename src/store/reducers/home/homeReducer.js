import { createSlice } from "@reduxjs/toolkit";


export const homeSlice = createSlice({
    name: "home",
    initialState: {
        data: [],
        loadMore: [],
        
    },
    reducers: {
        getHomeData: {
            
        }
        
    }
})



export const userSelector = (state) => state.home;