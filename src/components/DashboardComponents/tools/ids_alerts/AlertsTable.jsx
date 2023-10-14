import React, { useState, useEffect } from "react";
import { Table } from "antd";
import axios from "axios";
import moment from "moment";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import "../AlertsTable.css";
import { SiVirustotal } from "react-icons/si";

const VTURL = "https://www.virustotal.com/gui/ip-address";

const AlertsTable = () => {
  const columns = [
    {
      title: "ALERT ID",
      dataIndex: "alert_id",
      key: "alert_id",
      width: "150px",
    },
    {
      title: "ALERT Description",
      dataIndex: "alert_description",
      key: "alert_description",
      width: "40%",
    },

    {
      title: "Severity",
      dataIndex: "alert_severity",
      key: "alert_severity",
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
      title: "Source Hostname",
      dataIndex: "source_hostname",
      key: "source_hostname",
      width: "150px",
    },
    {
      title: "Destination Hostname",
      dataIndex: "destination_hostname",
      key: "destination_hostname",
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

  const openVirusTotal = (ipAddr) => {
    window.open(`${VTURL}/${ipAddr}`, "_blank");
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
        `${process.env.DASHBOARD_ENDPOINT}get_ids_alert`
      );
      const data = await response.data;
      const fitlerData = data.filter(
        (alert) =>
          alert.source_ip !== null &&
          alert.source_ip !== "N/A" &&
          alert.destination_ip !== null &&
          alert.destination_ip !== "N/A"
      );
      console.log(fitlerData);
      setIdsAlerts(fitlerData);
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
      <h2 className="text-center mb-7 text-3xl">Intrusion Detection Alerts</h2>
      <Table
        loading={isLoading}
        pagination={{ position: ["bottomRight"], defaultPageSize: 6 }}
        rowKey={(record) => record.alert_id}
        expandable={{
          expandIcon: ({ expanded, onExpand, record }) =>
            expanded ? (
              <AiOutlineUp
                onClick={(e) => onExpand(record, e)}
                style={{ cursor: "pointer" }}
                className="text-blue-600"
              />
            ) : (
              <AiOutlineDown
                onClick={(e) => onExpand(record, e)}
                style={{ cursor: "pointer" }}
                className="text-blue-600"
              />
            ),
          expandedRowRender: (record) => (
            <ul className="expandList">
              <li>
                <span>Alert Id:</span> <span>{record.alert_id}</span>
              </li>
              <li>
                <span>Alert Description:</span>
                <span>{record.alert_description}</span>
              </li>
              <li>
                <span>Severity:</span> <span>{record.alert_severity}</span>
              </li>
              <li>
                <span>Source IP:</span>{" "}
                <p>
                  {record.source_ip}
                  <button onClick={() => openVirusTotal(record.source_ip)}>
                    <SiVirustotal className="text-blue-600" size="1.2rem" />
                  </button>
                </p>
              </li>
              <li>
                <span>Source Hostname:</span>
                <span>{record.source_hostname}</span>
              </li>
              <li>
                <span>Destination IP:</span>
                <span>{record.destination_ip}</span>
              </li>
              <li>
                <span>Destination Hostname:</span>
                <span>{record.destination_hostname}</span>
              </li>
              <li>
                <span>User:</span> <span>{record.user}</span>
              </li>
              <li>
                <span>Protocol:</span> <span>{record.protocol}</span>
              </li>
              <li>
                <span>Failed Attempts:</span>
                <span>{record.failed_attempts}</span>
              </li>
              <li>
                <span>Action Taken:</span> <span>{record.action_taken}</span>
              </li>
              <li>
                <span>Timestamp:</span>
                <span>{moment(record.timestamp).format("LLL")}</span>
              </li>
              <li>
                <span>Mitigation Steps:</span>
                <span>{record.mitigation_steps}</span>
              </li>
            </ul>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        dataSource={idsAlerts}
        columns={columns}
      />
    </div>
  );
};

export default AlertsTable;
