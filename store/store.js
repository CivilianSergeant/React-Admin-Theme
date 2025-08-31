import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "@/store/tableSlice"

export const store = configureStore({
    reducer:{
        tableData:tableReducer
    }
})