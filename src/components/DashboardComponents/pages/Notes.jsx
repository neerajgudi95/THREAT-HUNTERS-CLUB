import React, { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TablePagination } from "@mui/material";
import Paper from "@mui/material/Paper";

import DashHeader from "../DashHeader";
import FileUpload from "../tools/FileUpload";
import axios from "axios";
import { useUserContext } from "../../../GlobalContexts/UserContextProvider";

import moment from "moment";
import { GrRefresh } from "react-icons/gr";
import { enqueueSnackbar } from "notistack";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [page, setPage] = React.useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const { state } = useUserContext();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const fileDownload = (fileName) => {
    axios
      .get(`${process.env.DASHBOARD_ENDPOINT}downloadFile/${fileName}`, {
        responseType: "blob",
      })
      .then((response) => {
        const href = URL.createObjectURL(response.data);

        // create "a" HTML element with href to file & click
        const link = document.createElement("a");
        link.href = href;
        link.setAttribute("download", `${fileName}`); //or any other extension
        document.body.appendChild(link);
        link.click();

        // clean up "a" element & remove ObjectURL
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
      })
      .catch((error) => {});
  };

  const getAllNotes = async () => {
    const response = await axios.get(
      `${process.env.DASHBOARD_ENDPOINT}getNotes`
    );
    const data = await response.data;
    // clg
    setNotes(data);
    setTotalPages(data.length);
  };

  const deleteNote = (path) => {
    var requestOptions = {
      method: "POST",
      body: path,
    };
    try {
      fetch(`${process.env.DASHBOARD_ENDPOINT}deleteNote`, requestOptions)
        .then((response) => {
          if (response.status === 200) {
            getAllNotes();
            enqueueSnackbar("File deleted successfully", {
              variant: "success",
            });
          }
        })
        .catch(() => {
          enqueueSnackbar("Something went wrong, please try again", {
            variant: "error",
          });
        });
    } catch (error) {
      enqueueSnackbar("Something went wrong, please try again", {
        variant: "error",
      });
    }
  };

  useEffect(() => {
    getAllNotes();
    // return () => {
    //   second
    // }
  }, []);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div className="flex justify-between items-center">
        <DashHeader category="Page" title="Notes" />
        <GrRefresh
          size={"2rem"}
          onClick={getAllNotes}
          className="cursor-pointer"
        />
      </div>
      {state?.user?.role === "admin" && <FileUpload getNotes={getAllNotes} />}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#1C315E" }}>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Name</TableCell>
              <TableCell sx={{ color: "white" }}>Topic</TableCell>
              <TableCell sx={{ color: "white" }}>Posted on</TableCell>
              <TableCell sx={{ color: "white" }}>Download</TableCell>
              {state?.user?.role === "admin" && (
                <TableCell sx={{ color: "white" }}>Delete</TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? notes.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : notes
            ).map((note, idx) => {
              return (
                <TableRow
                  key={idx}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {note.filename}
                  </TableCell>
                  <TableCell align="left">{note.topic}</TableCell>
                  <TableCell align="left">
                    {moment(note.timestamp).utcOffset(330).format("LL")}
                  </TableCell>
                  <TableCell align="left">
                    <button
                      onClick={() => fileDownload(note.absoluteFilename)}
                      className="text-blue-600"
                    >
                      Download
                    </button>
                  </TableCell>
                  {state?.user?.role === "admin" && (
                    <TableCell align="left">
                      <button
                        onClick={() => deleteNote(note.path)}
                        className="text-red-600"
                      >
                        Delete
                      </button>
                    </TableCell>
                  )}
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
    </div>
  );
};

export default Notes;
