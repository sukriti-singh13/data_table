import {
  Box,
  Modal,
  Paper,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { MdDelete, MdModeEdit, MdOutlineDone, MdClose } from "react-icons/md";
import React, { useState } from "react";
import { deleteRow, editStocks, handleModalClose } from "../features/TableData";
import { useDispatch, useSelector } from "react-redux";
const CustomModal = () => {
  const style = {
 
     width: "80vw",
    backgroundColor: "#fff",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const dispatch = useDispatch();
  const { isModalOpen, tableDataForFile, selectedRow } = useSelector(
    (store) => store.tableFileData
  );

  const [tempData,setTempData]=useState(tableDataForFile)
  const minWidthTable = {
    minWidth: "110px",
  };

  const [editMode, setEditMode] = useState(false);
  const [editTextOne, setEditTextOne] = useState(
    tableDataForFile[selectedRow]["LOCATION A STOCK"]
  );


  return (
    <Modal open={isModalOpen}>
      <>
        <TableContainer  component={Paper} elevation={3} sx={style}>
          <Box
            sx={{
              position: "sticky",
              top: "0px",
              left: "0px",
              cursor: "pointer",
              display: "flex",
              gap: "1rem",
              borderBottom: "1px solid #eee",
            }}
          >
            <span>
              <MdClose
                size="1.3rem"
                onClick={() => dispatch(handleModalClose())}
              />
            </span>

            <span>
              {editMode ? (
                ""
              ) : (
                <MdModeEdit size="1.3rem" onClick={() => setEditMode(true)} />
              )}
            </span>
            <span>
              <MdDelete
                size="1.3rem"
                onClick={() => dispatch(deleteRow(selectedRow))}
              />
            </span>
          </Box>
          <TableHead>
            <TableRow>
              <TableCell component="th" scope="row" sx={minWidthTable}>
                Part #
              </TableCell>
              <TableCell sx={minWidthTable}>Alt.Part#</TableCell>
              <TableCell sx={minWidthTable}>Name</TableCell>
              <TableCell sx={minWidthTable}>Brand</TableCell>
              <TableCell sx={minWidthTable}>Model</TableCell>
              <TableCell sx={minWidthTable}>Engine</TableCell>
              <TableCell sx={minWidthTable}>Car</TableCell>
              <TableCell sx={minWidthTable}>["location A"]</TableCell>
              <TableCell sx={minWidthTable}>["LOCATION A STOCK"]</TableCell>
              <TableCell sx={minWidthTable}>["LOCATION B"]</TableCell>
              <TableCell sx={minWidthTable}>["LOC B STOCK"]</TableCell>
              <TableCell sx={minWidthTable}>Unit</TableCell>
              <TableCell sx={minWidthTable}>Rate</TableCell>
              <TableCell sx={minWidthTable}>Value</TableCell>
              <TableCell sx={minWidthTable}>Remarks</TableCell>
            </TableRow>
          </TableHead>
          <TableRow
            key={tableDataForFile.selectedRow}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {tableDataForFile[selectedRow]["Part #"]}
            </TableCell>

            <TableCell>{tableDataForFile[selectedRow]["Alt.Part#"]}</TableCell>
            <TableCell>{tableDataForFile[selectedRow].Name}</TableCell>
            <TableCell>{tableDataForFile[selectedRow].Brand}</TableCell>
            <TableCell>{tableDataForFile[selectedRow].Model}</TableCell>
            <TableCell>{tableDataForFile[selectedRow].Engine}</TableCell>
            <TableCell>{tableDataForFile[selectedRow].Car}</TableCell>
            <TableCell>{tableDataForFile[selectedRow]["location A"]}</TableCell>
            {editMode ? (
              <TableCell>
                <Box sx={{ display: "flex", gap: ".5rem" }}>
                  <input
                    value={editTextOne}
                    onChange={(e) => setEditTextOne(e.target.value)}
                  />

                  <MdOutlineDone
                    size="1.2rem"
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      dispatch(editStocks(editTextOne)), setEditMode(false);
                    }}
                  />
                </Box>
              </TableCell>
            ) : (
              <TableCell>
                {tableDataForFile[selectedRow]["LOCATION A STOCK"]}
              </TableCell>
            )}

            <TableCell>{tableDataForFile[selectedRow]["LOCATION B"]}</TableCell>
            <TableCell>
              {tableDataForFile[selectedRow][`${"LOC B STOCK "}`]}
            </TableCell>
            <TableCell>{tableDataForFile[selectedRow].Unit}</TableCell>
            <TableCell>{tableDataForFile[selectedRow].Rate}</TableCell>
            <TableCell>{tableDataForFile[selectedRow].Value}</TableCell>
            <TableCell>{tableDataForFile[selectedRow].Remarks}</TableCell>
          </TableRow>
        </TableContainer>
      </>
    </Modal>
  );
};

export default CustomModal;
