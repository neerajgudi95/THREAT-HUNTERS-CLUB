import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "topic",
    headerName: "Topic",
    // width: 150,
  },
  {
    field: "instructor",
    headerName: "Instructor",
    // width: 150,
  },
  {
    field: "postedOn",
    headerName: "Posted On",
    // width: 110,
  },
  {
    field: "recordings",
    headerName: "Recordings",
    // width: 160,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function TestComp() {
  const [videosList, setVideosList] = useState([]);

  const getAllVideos = async () => {
    const response = await axios.get(
      `${process.env.DASHBOARD_ENDPOINT}getVideos`
    );
    const data = await response.data;
    setVideosList(
      data.map((row, idx) => {
        let id = idx + 1;
        const newObj = { id, ...row };
        return newObj;
      })
    );
    // setTotalPages(data.length);
  };

  useEffect(() => {
    getAllVideos();
    // setIsVideoUploaded(false);
  }, []);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={videosList}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        // checkboxSelection
        // disableRowSelectionOnClick
      />
    </Box>
  );
}
