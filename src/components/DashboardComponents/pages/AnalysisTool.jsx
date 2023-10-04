import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import axios from "axios";
import { useUserContext } from "../../../GlobalContexts/UserContextProvider";
import MainChannel from "../tools/edr_alerts/mainChannel";

export default function AnalysisTool() {
  const [value, setValue] = React.useState("open");
  const handleChange = (event, newValue) => {
    setValue(newValue);
    getEDRAlerts(newValue);
  };

  // const [status, setStatus] = useState("open");
  const [isLoading, setIsLoading] = useState(false);
  const [openAlerts, setOpenAlerts] = useState([]);
  const [wipAlerts, setWipAlerts] = useState([]);
  const [closedAlerts, setClosedAlerts] = useState([]);
  const { state } = useUserContext();
  const email = state?.user?.email;
  console.log(state);

  const getEDRAlerts = async (status) => {
    setIsLoading(true);
    const response = await axios.get(
      `${process.env.DASHBOARD_ENDPOINT}get_edr_alert/${status}/${email}`
    );
    setIsLoading(false);
    const data = await response.data;
    console.log(data);
    if (status === "open") {
      setOpenAlerts(data);
    } else if (status === "wip") {
      setWipAlerts(data);
    } else {
      setClosedAlerts(data);
    }
  };

  useEffect(() => {
    getEDRAlerts("open");
  }, []);

  return (
    <>
      <h2 className="text-center m-4 text-3xl">
        Endpoint detection and response alerts
      </h2>
      <Box sx={{ width: "100%", typography: "body1", padding: "0 50px" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="MAIN ALERTS" value="open" />
              <Tab label="ALERTS UNDER INVESTIGATION" value="wip" />
              <Tab label="CLOSED ALERTS" value="closed" />
            </TabList>
          </Box>
          <TabPanel value="open" sx={{ padding: "5px" }}>
            <MainChannel rowsData={openAlerts} isLoading={isLoading} />
          </TabPanel>
          <TabPanel value="wip" sx={{ padding: "5px" }}>
            <MainChannel rowsData={wipAlerts} isLoading={isLoading} />
          </TabPanel>
          <TabPanel value="closed" sx={{ padding: "5px" }}>
            <MainChannel rowsData={closedAlerts} isLoading={isLoading} />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
