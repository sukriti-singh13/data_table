import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import CustomTable from "../components/CustomTable";

const Home = () => {
  const [tableDataForFile, setTableDataForFile] = useState([{}]);
  const [userInput, setUserInput] = useState("");
  const handleFile = (e) => {
    Papa.parse(e.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        setTableDataForFile(results.data);
      },
    });
  };
  const flexItem = {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  };
  const filterTable = () => {
    if (userInput.length > 2) {
      const filteredTable = tableDataForFile.filter(
        (item) => String(item["Part #"]).slice(0, 3) === userInput
      );
      setTableDataForFile(filteredTable);
    }
  };
  useEffect(() => {
    console.log(tableDataForFile);
  }, [tableDataForFile]);
  return (
    <Box sx={{ padding: "2rem", display: "grid", gap: "1rem" }}>
      <Typography sx={{ fontSize: "22px", fontWeight: "700px" }} variant="h1">
        CSV Data Table
      </Typography>
      <Box>
        <input type="file" name="file" accept=".csv" onChange={handleFile} />
      </Box>
      <Box sx={flexItem}>
        <Typography variant="p">User Input</Typography>
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <Button size="small" variant="contained" onClick={filterTable}>
          Filter
        </Button>
      </Box>
      <CustomTable tableDataForFile={tableDataForFile} />
    </Box>
  );
};

export default Home;
