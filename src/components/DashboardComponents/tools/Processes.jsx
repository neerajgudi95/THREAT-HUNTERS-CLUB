import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Processes = ({ processes }) => {
  return (
    <div className="mt-3">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#4D77FF" }}>
            <TableRow>
              <TableCell align="left" sx={{ color: "white" }}>
                Command
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                Cpu (%)
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                Memory (%)
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                Pid
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                Time (mm:ss.ms)
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                User
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {processes.map((process, idx) => {
              return (
                <TableRow
                  key={idx}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {process.command}
                  </TableCell>
                  <TableCell align="left">{process.cpu}</TableCell>
                  <TableCell align="left">{process.mem}</TableCell>
                  <TableCell align="left">{process.pid}</TableCell>
                  <TableCell align="left">{process.time}</TableCell>
                  <TableCell align="left">{process.user}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Processes;
