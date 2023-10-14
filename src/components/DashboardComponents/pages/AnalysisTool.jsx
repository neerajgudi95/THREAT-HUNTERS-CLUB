import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import InvestigationChannel from "../tools/edr_alerts/InvestigationChannel";
import ClosedChannel from "../tools/edr_alerts/ClosedChannel";
import MainChannel from "../tools/edr_alerts/MainChannel";

export default function AnalysisTool() {
  const [value, setValue] = React.useState("open");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <h2 className="text-center m-4 text-3xl">
        Endpoint Detection and Response Alerts
      </h2>
      <Box sx={{ width: "100%", typography: "body1", padding: "0 50px" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="MAIN ALERTS" value="open" sx={{ color: "blue" }} />
              <Tab
                label="ALERTS UNDER INVESTIGATION"
                value="wip"
                sx={{ color: "green" }}
              />
              <Tab label="CLOSED ALERTS" value="closed" sx={{ color: "red" }} />
            </TabList>
          </Box>
          <TabPanel value="open" key={0} sx={{ padding: "5px" }}>
            <MainChannel />
          </TabPanel>
          <TabPanel value="wip" key={1} sx={{ padding: "5px" }}>
            <InvestigationChannel />
          </TabPanel>
          <TabPanel value="closed" key={2} sx={{ padding: "5px" }}>
            <ClosedChannel />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
