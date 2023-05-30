import React, { useState, useEffect } from "react";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  Table,
} from "@mui/material";

import DashHeader from "../DashHeader";
import Loader from "../../LandingPageComponents/loader/Loader";
import axios from "axios";

const Members = () => {
  const [membersList, setMembersList] = useState();
  const [page, setPage] = React.useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getMembersList = async () => {
    setIsLoading(true);
    const response = await axios.get(
      `${process.env.DASHBOARD_ENDPOINT}getUsers`
    );
    const members = response.data;
    setMembersList(members);
    setTotalPages(members.length);
    setIsLoading(false);
  };

  useEffect(() => {
    getMembersList();
  }, []);

  return (
    <div className=" m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <DashHeader category="Page" title="Members" />
      {isLoading ? (
        <Loader />
      ) : membersList ? (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#1C315E" }}>
                <TableRow>
                  <TableCell sx={{ color: "white" }}>Name</TableCell>
                  <TableCell sx={{ color: "white" }}>Email</TableCell>
                  <TableCell sx={{ color: "white" }}>Joining Date</TableCell>
                  <TableCell sx={{ color: "white" }}>Profession</TableCell>
                  <TableCell sx={{ color: "white" }}>Phone</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? membersList?.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : membersList.length !== 0 && membersList
                ).map((member, idx) => {
                  return (
                    <TableRow
                      key={idx}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {member.fullName}
                      </TableCell>
                      <TableCell align="left">{member.email}</TableCell>
                      <TableCell align="left">{member.joinDate}</TableCell>
                      <TableCell align="left">{member.profession}</TableCell>
                      <TableCell align="left">{member.phoneNo}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={totalPages}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      ) : (
        <div className="m-5 flex items-center justify-center w-full">
          <p className="text-center rounded-xl lg:w-2/3 p-2 m-3 bg-red-100 border-red-400 text-red-700">
            Leaderboard is not available yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default Members;
