import React, { useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";
import { enqueueSnackbar } from "notistack";
import axios from "axios";
import { useUserContext } from "../../../../GlobalContexts/UserContextProvider";
import { ModalComponent } from "./CloseAlertModal";
import AlertsTable from "./AlertsTable";

const InvestigationChannel = () => {
  const [wipAlerts, setWipAlerts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAlertID, setSelectedAlertID] = useState(null);

  const { state } = useUserContext();
  const email = state?.user?.email;
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleOpenModal = (data) => {
    setSelectedAlertID(data.alertID);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleCloseAlert = async (postData) => {
    const closeComments = JSON.stringify(postData);
    try {
      let config = {
        method: "post",
        // maxBodyLength: Infinity,
        url: `${process.env.DASHBOARD_ENDPOINT}edr_alert_classify/${selectedAlertID}/${email}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: closeComments,
      };

      axios
        .request(config)
        .then((response) => {
          enqueueSnackbar("Alert closed", {
            variant: "success",
          });
          getWipEDRAlerts();
        })
        .catch((error) => {
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

  const getWipEDRAlerts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.DASHBOARD_ENDPOINT}get_edr_alert/wip/${email}`
      );
      setIsLoading(false);
      const data = await response.data;
      setWipAlerts(data);
    } catch (error) {}
  };

  useEffect(() => {
    getWipEDRAlerts();
  }, []);

  return (
    <>
      <ModalComponent
        open={modalOpen}
        alertId={selectedAlertID}
        onClose={handleCloseModal}
        onSubmit={handleCloseAlert}
      />
      <AlertsTable
        data={wipAlerts}
        dataLoading={isLoading}
        actionFn={handleOpenModal}
        ActionIcon={TiTick}
        toolTipTitle="Mark as closed"
      />
    </>
  );
};

export default InvestigationChannel;
