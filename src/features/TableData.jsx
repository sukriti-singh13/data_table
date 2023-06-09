import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Papa from "papaparse";
const initialState = {
  tableDataForFile: [{}],
  isModalOpen: false,
  selectedRow: 0,
  filterInput: ''
};

export const parseFile = createAsyncThunk("table/parseFile", async (file) => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        resolve(results.data);
      },
      error: (error) => {
        reject(error);
        console.log(error);
      },
    });
  });
});
const tableDataSlice = createSlice({
  name: "tableData",
  initialState,
  reducers: {
    handleFilterInput:(state,{payload}) => {
        state.filterInput = payload
    },

    filterTable: (state, { payload }) => {
      console.log(state.tableDataForFile);
      // console.log(payload);
      if (payload.length > 2) {
        const filteredTable = state.tableDataForFile.filter(
          (item) => String(item["Part #"]).slice(0, 3) === payload
        );
        state.tableDataForFile = filteredTable;
      }
    },
    handleModal: (state, { payload }) => {
      state.isModalOpen = true;
      state.selectedRow = payload;
    },
    deleteRow: (state, { payload }) => {
      console.log(payload);
      console.log(state.tableDataForFile);
      let finalObjects = state.tableDataForFile.filter(
        (item, index) => index!== payload
      );
      console.log(finalObjects);
      state.tableDataForFile = finalObjects
      state.isModalOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(parseFile.fulfilled, (state, { payload }) => {
      state.tableDataForFile = payload;
      console.log(state.tableDataForFile);
    });
  },
});

export const { handleTableData, filterTable, handleModal, deleteRow,handleFilterInput } =
  tableDataSlice.actions;
export default tableDataSlice.reducer;
