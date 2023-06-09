import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import CustomTable from "../components/CustomTable";
import { useDispatch, useSelector } from "react-redux";
import {
  handleTableData,
  filterTable,
  parseFile,
  handleFilterInput,
} from "../features/TableData";
const Home = () => {
  const dispatch = useDispatch();
  const { tableDataForFile, filterInput } = useSelector(
    (store) => store.tableFileData
  );
  const [userInput, setUserInput] = useState("");

  const handleFile = (e) => {
    let files = e.target.files[0];
    dispatch(parseFile(files));
  };

  const flexItem = {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  };

  return (
    <Box sx={{ padding: "2rem", display: "grid", gap: "1rem" }}>
      <Typography sx={{ fontSize: "22px", fontWeight: "700px" }} variant="h1">
        CSV Data Table
      </Typography>
      <Box>
        <input
          type="file"
          name="file"
          accept=".csv"
          onChange={(e) => handleFile(e)}
        />
      </Box>
      <Box sx={flexItem}>
        <Typography variant="p">User Input</Typography>
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <Button
          size="small"
          variant="contained"
          onClick={() => dispatch(handleFilterInput(userInput))}
        >
          Filter
        </Button>
      </Box>
      <CustomTable tableDataForFile={tableDataForFile} />
    </Box>
  );
};

export default Home;
