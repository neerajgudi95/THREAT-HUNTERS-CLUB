import React, { useState, useEffect } from "react";
import { enqueueSnackbar } from "notistack";
import axios from "axios";
import { useUserContext } from "../../../../GlobalContexts/UserContextProvider";
import AlertsTable from "./AlertsTable";
import { FaBinoculars } from "react-icons/fa";

const MainChannel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [openAlerts, setOpenAlerts] = useState([]);
  const { state } = useUserContext();
  const email = state?.user?.email;

  const getOpenEDRAlerts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.DASHBOARD_ENDPOINT}get_edr_alert/open/${email}`
      );
      const data = await response.data;
      setOpenAlerts(data);
      setIsLoading(false);
    } catch (error) {}
  };

  const handleAlert = async (alert) => {
    try {
      const response = await axios.post(
        `${process.env.DASHBOARD_ENDPOINT}edr_alert_status/${alert.alertID}/wip/${alert.email}`
      );
      const data = await response.data;
      getOpenEDRAlerts();
      enqueueSnackbar("Alert added to investigation channel", {
        variant: "success",
      });
      // changeTab("wip");
    } catch (error) {
      enqueueSnackbar("Something went wrong, please try again", {
        variant: "warning",
      });
    }
  };

  useEffect(() => {
    getOpenEDRAlerts();
  }, []);

  return (
    <>
      <AlertsTable
        data={openAlerts}
        dataLoading={isLoading}
        actionFn={handleAlert}
        ActionIcon={FaBinoculars}
        toolTipTitle="Own and Investigate"
      />
    </>
  );
};

export default MainChannel;
