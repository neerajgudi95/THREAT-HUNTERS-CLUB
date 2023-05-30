import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import DashHeader from "../DashHeader";
import { useUserContext } from "../../../GlobalContexts/UserContextProvider";
import axios from "axios";
import moment from "moment";
import { GrRefresh } from "react-icons/gr";
import VideoUpload from "../tools/VideoUpload";

const Videos = () => {
  const [videosList, setVideosList] = useState([]);
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

  const getAllVideos = async () => {
    const response = await axios.get(
      `${process.env.DASHBOARD_ENDPOINT}getVideos`
    );
    const data = await response.data;
    setVideosList(data);
    setTotalPages(data.length);
  };

  useEffect(() => {
    getAllVideos();
    // setIsVideoUploaded(false);
  }, []);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div className="flex justify-between items-center">
        <DashHeader category="Page" title="Recordings" />
        <GrRefresh
          size={"2rem"}
          onClick={getAllVideos}
          className="cursor-pointer"
        />
      </div>
      {state?.user?.role === "admin" && <VideoUpload />}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#1C315E" }}>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Topic</TableCell>
              <TableCell sx={{ color: "white" }}>Instructor</TableCell>
              <TableCell sx={{ color: "white" }}>Posted on</TableCell>
              <TableCell sx={{ color: "white" }}>Recordings</TableCell>
              {state?.user?.role === "admin" && (
                <TableCell sx={{ color: "white" }}>Delete</TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? videosList.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : videosList
            ).map((video, idx) => {
              return (
                <TableRow
                  key={idx}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  // hover={true}
                >
                  <TableCell align="left">{video.topic}</TableCell>
                  <TableCell align="left">{video.creator}</TableCell>
                  <TableCell align="left">
                    {moment(video.postedOn).utcOffset("+05:30").format("LL")}
                  </TableCell>
                  <TableCell align="left">
                    <a
                      href={video.videoLink}
                      target="_blank"
                      className="text-blue-600"
                    >
                      View
                    </a>
                  </TableCell>
                  {state?.user?.role === "admin" && (
                    <TableCell align="left">
                      <button
                        onClick={() => console.log("remove video clicked")}
                        className="text-red-600"
                      >
                        Remove
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
      {videosList.length === 0 && (
        <>
          <div className="flex p-2 justify-center dark:bg-main-dark-bg dark:text-white">
            <p className="text-center">
              No recordings found, kindly check with your instructor
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Videos;
