import React, { useState, useEffect } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import Loader from "../../../LandingPageComponents/loader/Loader";

const MainChannel = ({ rowsData, isLoading }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleAlert = (alert) => {};

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="EDR table">
          <TableHead sx={{ backgroundColor: "#1C315E" }}>
            <TableRow>
              <TableCell align="left" sx={{ color: "white" }}>
                ALERT ID
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                SEVERITY
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                DATE
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                DESCRIPTION
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                ACTION
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rowsData.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : rowsData
            ).map((alert, idx) => {
              return (
                <TableRow
                  key={idx}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  // hover={true}
                >
                  <TableCell align="left">{alert.alertID}</TableCell>
                  <TableCell align="left">{alert.severity}</TableCell>
                  <TableCell align="left">{alert.fileName}</TableCell>
                  <TableCell align="left">{alert.alertDescription}</TableCell>
                  <TableCell align="left">
                    <button
                      onClick={() => handleAlert(alert)}
                      className="text-blue-600"
                    >
                      Take Ownership
                    </button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={rowsData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default MainChannel;
