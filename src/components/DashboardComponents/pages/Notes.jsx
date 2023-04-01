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

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const { state } = useUserContext();

  const fileDownload = (fileName) => {
    // let config = {
    //   method: "get",
    //   maxBodyLength: Infinity,
    //   url: `http://181.215.68.163:8082/downloadFile/${fileName}`,
    //   headers: {},
    //   {responseType: "blob"},
    // };

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
      .catch((error) => {
      });
  };

  const getAllNotes = async () => {
    const response = await axios.get(
      `${process.env.DASHBOARD_ENDPOINT}getNotes`
    );
    const data = await response.data;
    // clg
    setNotes(data);
  };

  useEffect(() => {
    getAllNotes();
    // return () => {
    //   second
    // }
  }, []);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <DashHeader category="Page" title="Notes" />
      {state?.user?.role === "admin" && <FileUpload />}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Topic</TableCell>
              <TableCell align="right">Posted on</TableCell>
              <TableCell align="right">Download Link</TableCell>
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
                  <TableCell align="right">{note.topic}</TableCell>
                  <TableCell align="right">{note.timestamp}</TableCell>
                  <TableCell align="right">
                    <button onClick={() => fileDownload(note.absoluteFilename)}>
                      Download file
                    </button>
                  </TableCell>
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
