import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CustomModal from "./CustomModal";
import { useDispatch, useSelector } from "react-redux";
import { handleModal } from "../features/TableData";
const CustomTable = () => {
  const dispatch = useDispatch();
  const { tableDataForFile, isModalOpen, filterInput } = useSelector(
    (store) => store.tableFileData
  );

  const minWidthTable = {
    minWidth: "120px",
  };
  
  return (
    <>
      {isModalOpen && <CustomModal />}
      <TableContainer component={Paper} elevation={3}>
        <Table
          sx={{ minWidth: 650, border: "1px solid #eee" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell component="th" scope="row" width="100%">
                Part #
              </TableCell>
              <TableCell>Alt.Part#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Model</TableCell>
              <TableCell>Engine</TableCell>
              <TableCell>Car</TableCell>
              <TableCell sx={minWidthTable}>["location A"]</TableCell>
              <TableCell sx={minWidthTable}>["LOCATION A STOCK"]</TableCell>
              <TableCell sx={minWidthTable}>["LOCATION B"]</TableCell>
              <TableCell sx={minWidthTable}>["LOC B STOCK"]</TableCell>
              <TableCell>Unit</TableCell>
              <TableCell>Rate</TableCell>
              <TableCell>Value</TableCell>
              <TableCell>Remarks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableDataForFile
              .filter(
                (item) =>
                  String(item["Part #"]).includes(filterInput) ||
                  filterInput === ""
              )
              .map((row, index) => (
                <TableRow
                  onClick={() => dispatch(handleModal(index))}
                  key={index}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    cursor: "pointer",
                  }}
                >
                  <TableCell component="th" scope="row" sx={minWidthTable}>
                    {row["Part #"]}
                  </TableCell>

                  <TableCell sx={minWidthTable}>{row["Alt.Part#"]}</TableCell>
                  <TableCell sx={minWidthTable}>{row.Name}</TableCell>
                  <TableCell>{row.Brand}</TableCell>
                  <TableCell>{row.Model}</TableCell>
                  <TableCell>{row.Engine}</TableCell>
                  <TableCell>{row.Car}</TableCell>
                  <TableCell>{row["location A"]}</TableCell>
                  <TableCell>{row["LOCATION A STOCK"]}</TableCell>
                  <TableCell>{row["LOCATION B"]}</TableCell>
                  <TableCell>{row[`"LOC B STOCK "`]}</TableCell>
                  <TableCell>{row.Unit}</TableCell>
                  <TableCell>{row.Rate}</TableCell>
                  <TableCell>{row.Value}</TableCell>
                  <TableCell>{row.Remarks}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CustomTable;
