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
import { useLocation } from "react-router-dom";
import axios from "axios";

const AlertsTable = ({ displayColumns, rowsData }) => {
  const location = useLocation();

  const [idsAlerts, setIdsAlerts] = useState([]);
  const [splunkAlerts, setSplunkAlerts] = useState([]);
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getAlertsList = async (alertsType) => {
    if (alertsType === "ids") {
      setTitle("Intrusion detection system alerts");
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.DASHBOARD_ENDPOINT}get_ids_alert`
      );
      const data = await response.data;
      console.log(data);
      setIsLoading(false);
    }
    if (alertsType === "splunk") {
      setTitle("Splunk Alerts");
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.DASHBOARD_ENDPOINT}get_splunk_alert`
      );
      const data = await response.data;
      console.log(data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const pathLength = location.pathname.split("/").length;
    const getAlertType = location.pathname.split("/")[pathLength - 1];
    getAlertsList(getAlertType);
  }, [location.pathname]);

  return (
    <div className="m-2 md:m-5 mt-24 p-2 md:p-5 bg-white rounded-3xl">
      <h2 className="text-center mb-7 text-3xl">{title}</h2>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="IDR table">
          <TableHead sx={{ backgroundColor: "#1C315E" }}>
            <TableRow>
              <TableCell align="center" sx={{ color: "white" }}>
                SEVERITY
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                DATE
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                PROTOCOL
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                DESCRIPTION
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                ACTION
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {(rowsPerPage > 0
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
                        onClick={() => deleteVideo(video.videoLink)}
                        className="text-red-600"
                      >
                        Remove
                      </button>
                    </TableCell>
                  )}
                </TableRow>
              );
            })} */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AlertsTable;
