import React, { useEffect, useState } from "react";
// import {
//   GridComponent,
//   ColumnsDirective,
//   ColumnDirective,
//   Resize,
//   Sort,
//   ContextMenu,
//   Filter,
//   Page,
//   Toolbar,
//   Inject,
// } from "@syncfusion/ej2-react-grids";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DashHeader } from "../exports";
import FileUpload from "../tools/FileUpload";
import axios from "axios";
import { useUserContext } from "../../../GlobalContexts/UserContextProvider";
import { Link } from "react-router-dom";
import moment from "moment";
import { GrRefresh } from "react-icons/gr";
import { enqueueSnackbar } from "notistack";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const { state } = useUserContext();

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
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Topic</TableCell>
              <TableCell align="left">Posted on</TableCell>
              <TableCell align="left">Download</TableCell>
              {state?.user?.role === "admin" && (
                <TableCell align="left">Delete</TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {notes.map((note, idx) => {
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
    </div>
  );
};

export default Notes;

// {
//   field: "name",
//   headerText: "Name",
//   width: "135",
//   format: "yMd",
//   textAlign: "Center",
// },
// {
//   field: "topic",
//   headerText: "Topic",
//   width: "170",
//   textAlign: "Center",
// },
// {
//   field: "timestamp",
//   headerText: "Posted on",
//   width: "135",
//   format: "yMd",
//   textAlign: "Center",
// },
// {
//   field: "path",
//   headerText: "Download Link",
//   width: "120",
//   textAlign: "Center",
// },
{
  /* <GridComponent
        id="gridcomp"
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
        dataSource={notes}
      >
        <ColumnsDirective>
          <ColumnDirective
            field="filename"
            headerText="Name"
            width="135"
            textAlign="Center"
            template={gridTemplate}
          />
          <ColumnDirective
            field="topic"
            headerText="Topic"
            width="170"
            textAlign="Center"
          />
          <ColumnDirective
            field="timestamp"
            headerText="Posted on"
            width="135"
            textAlign="Center"
            format="yMd"
          />
          <ColumnDirective
            field="path"
            headerText="Download Link"
            width="120"
            textAlign="Center"
          />
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, Toolbar]} />
      </GridComponent> */
}
