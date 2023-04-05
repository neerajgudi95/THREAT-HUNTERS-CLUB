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
  // const [isVideoUploaded, setIsVideoUploaded] = useState(false)
  const { state } = useUserContext();

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  const getAllVideos = async () => {
    const response = await axios.get(
      `${process.env.DASHBOARD_ENDPOINT}getVideos`
    );
    const data = await response.data;
    setVideosList(data);
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
          <TableHead>
            <TableRow>
              <TableCell align="left">Topic</TableCell>
              <TableCell align="left">Instructor</TableCell>
              <TableCell align="left">Posted on</TableCell>
              <TableCell align="left">Recording Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {videosList.map((video, idx) => {
              return (
                <TableRow
                  key={idx}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{video.topic}</TableCell>
                  <TableCell align="left">{video.creator}</TableCell>
                  <TableCell align="left">
                    {moment(video.postedOn).utcOffset("+05:30").format("LLLL")}
                  </TableCell>
                  <TableCell align="left">
                    <a href={video.videoLink} target="_blank">
                      View
                    </a>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {videosList.length === 0 && (
        <>
          <div className="flex p-2 justify-center dark:bg-main-dark-bg dark:text-white">
            <p className="text-center">
              No videos found, kindly check with your instructor
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Videos;