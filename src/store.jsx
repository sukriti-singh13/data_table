import { configureStore } from "@reduxjs/toolkit";
import tableDataReducer from "./features/TableData"
export const store=configureStore(
    {reducer:{
        tableFileData:tableDataReducer 

}})