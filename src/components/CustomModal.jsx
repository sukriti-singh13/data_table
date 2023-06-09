import {
  Box,
  Modal,
  Paper,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { MdDelete, MdModeEdit } from "react-icons/md";
import React from "react";
import { deleteRow } from "../features/TableData";
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
  // const deleteRow = (id) => {
  //   setTableDataForFile(
  //     tableDataForFile.filter(
  //       (row) => row[selectedRow] !== tableDataForFile[id]
  //     )
  //   );
  // };
  return (
    <Modal
      open={isModalOpen}
    >
      <>
        <TableContainer component={Paper} style={style}>
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
            <TableCell>
              {tableDataForFile[selectedRow]["LOCATION A STOCK"]}
            </TableCell>
            <TableCell>{tableDataForFile[selectedRow]["LOCATION B"]}</TableCell>
            <TableCell>
              {tableDataForFile[selectedRow]["LOC B STOCK"]}
            </TableCell>
            <TableCell>{tableDataForFile[selectedRow].Unit}</TableCell>
            <TableCell>{tableDataForFile[selectedRow].Rate}</TableCell>
            <TableCell>{tableDataForFile[selectedRow].Value}</TableCell>
            <TableCell>{tableDataForFile[selectedRow].Remarks}</TableCell>
          </TableRow>
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              marginTop: "1rem",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <MdModeEdit />
            <MdDelete onClick={() => dispatch(deleteRow(selectedRow))} />
          </Box>
        </TableContainer>
      </>
    </Modal>
  );
};

export default CustomModal;
