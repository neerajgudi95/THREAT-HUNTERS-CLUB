import React, { useState, useEffect } from "react";
import { Table } from "antd";
import axios from "axios";
import moment from "moment";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import "../AlertsTable.css";

const SplunkAlerts = () => {
  const columns = [
    {
      title: "ALERT ID",
      dataIndex: "alert_id",
      key: "alert_id",
      width: "150px",
    },
    {
      title: "ALERT Description",
      dataIndex: "description",
      key: "description",
      width: "40%",
    },

    {
      title: "Severity",
      dataIndex: "severity",
      key: "severity",
      width: "150px",
      render: (alert_severity) => (
        <span
          style={{ color: getSeverityColor(alert_severity), fontWeight: "600" }}
        >
          {capitalizeSeverity(alert_severity)}
        </span>
      ),
    },
    {
      title: "Source IP",
      dataIndex: "source_ip",
      key: "source_ip",
      width: "150px",
    },
    {
      title: "Destination IP",
      dataIndex: "destination_ip",
      key: "destination_ip",
      width: "150px",
    },
    {
      title: "Date",
      dataIndex: "timestamp",
      key: "timestamp",
      width: "150px",
      render: (timestamp) => <span>{moment(timestamp).format("lll")}</span>,
    },
  ];
  const [idsAlerts, setIdsAlerts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const capitalizeSeverity = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case "high":
        return "red";
      case "medium":
        return "orange";
      case "low":
        return "green";
      default:
        return "black"; // Default color for unknown severity
    }
  };

  const getAlertsList = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${process.env.DASHBOARD_ENDPOINT}get_splunk_alert`
      );
      const data = await response.data;
      // const fitlerData = data.filter(
      //   (alert) =>
      //     (alert.source_ip !== null && alert.source_ip !== "N/A") &&
      //     (alert.destination_ip !== null && alert.destination_ip !== "N/A")
      // );
      console.log(data);
      setIdsAlerts(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAlertsList();
  }, []);

  return (
    <div className="m-2 md:m-5 mt-24 p-2 md:p-5">
      <h2 className="text-center mb-7 text-3xl">Splunk Alerts</h2>
      <Table
        loading={isLoading}
        pagination={{ position: ["bottomRight"], defaultPageSize: 6 }}
        rowKey={(record) => record.alert_id}
        dataSource={idsAlerts}
        columns={columns}
      />
    </div>
  );
};

export default SplunkAlerts;
