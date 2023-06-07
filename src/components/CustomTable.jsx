import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
const CustomTable = ({ tableDataForFile, setTableDataForFile }) => {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650, border: "1px solid #eee" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="row">
              Part #
            </TableCell>
            <TableCell>Alt.Part#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Brand</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>Engine</TableCell>
            <TableCell>Car</TableCell>
            <TableCell>["location A"]</TableCell>
            <TableCell>["LOCATION A STOCK"]</TableCell>
            <TableCell>["LOCATION B"]</TableCell>
            <TableCell>["LOC B STOCK"]</TableCell>
            <TableCell>Unit</TableCell>
            <TableCell>Rate</TableCell>
            <TableCell>Value</TableCell>
            <TableCell>Remarks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableDataForFile.map((row) => (
            <TableRow
              key={row.Name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row["Part #"]}
              </TableCell>
              <TableCell>{row["Alt.Part#"]}</TableCell>
              <TableCell>{row.Name}</TableCell>
              <TableCell>{row.Brand}</TableCell>
              <TableCell>{row.Model}</TableCell>
              <TableCell>{row.Engine}</TableCell>
              <TableCell>{row.Car}</TableCell>
              <TableCell>{row["location A"]}</TableCell>
              <TableCell>{row["LOCATION A STOCK"]}</TableCell>
              <TableCell>{row["LOCATION B"]}</TableCell>
              <TableCell>{row["LOC B STOCK"]}</TableCell>
              <TableCell>{row.Unit}</TableCell>
              <TableCell>{row.Rate}</TableCell>
              <TableCell>{row.Value}</TableCell>
              <TableCell>{row.Remarks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
