import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomTable from "../components/CustomTable";
import { useDispatch, useSelector } from "react-redux";
import { parseFile, handleFilterInput } from "../features/TableData";
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

  const fontStyle = {
    fontSize: "2rem",
  };
  return (
    <Box sx={{ padding: "2rem", display: "grid", gap: "1rem" }}>
      <h1>CSV Data Table</h1>
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
          className="user_input"
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
        {/* {filterInput !== "" && (
          <Button
            size="small"
            variant="contained"
            onClick={() => dispatch(handleFilterInput(""))}
          >
            Clear
          </Button>
        )} */}
      </Box>
      {tableDataForFile.length > 1 ? (
        <CustomTable tableDataForFile={tableDataForFile} />
      ) : (
        <Box sx={{ display: "grid", placeContent: "center", height: "50vh" }}>
          <Typography variant="p" sx={{ fontStyle }}>
            Import File
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Home;
