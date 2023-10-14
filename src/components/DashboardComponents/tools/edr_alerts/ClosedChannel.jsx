import React, { useState, useEffect } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { enqueueSnackbar } from "notistack";
import axios from "axios";
import { useUserContext } from "../../../../GlobalContexts/UserContextProvider";
import AlertsTable from "./AlertsTable";

const ClosedChannel = () => {
  const [closedAlerts, setClosedAlerts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { state } = useUserContext();
  const email = state?.user?.email;

  const handleAlertReopen = async (alert) => {
    try {
      const response = await axios.post(
        `${process.env.DASHBOARD_ENDPOINT}edr_alert_status/${alert.alertID}/wip/${alert.email}`
      );
      const data = await response.data;
      getClosedEDRAlerts();
      // changeTab("wip");
    } catch (error) {
      enqueueSnackbar("Something went wrong, please try again", {
        variant: "warning",
      });
    }
  };

  const getClosedEDRAlerts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.DASHBOARD_ENDPOINT}get_edr_alert/closed/${email}`
      );
      setIsLoading(false);
      const data = await response.data;
      setClosedAlerts(data);
    } catch (error) {}
  };

  useEffect(() => {
    getClosedEDRAlerts();
  }, []);

  return (
    <>
      <AlertsTable
        data={closedAlerts}
        actionFn={handleAlertReopen}
        dataLoading={isLoading}
        toolTipTitle="Reinvestigate case"
        ActionIcon={AiOutlineReload}
      />
    </>
  );
};

export default ClosedChannel;
