import React from "react";
import { Table } from "antd";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { SiVirustotal } from "react-icons/si";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "../AlertsTable.css";

const VTURL = "https://www.virustotal.com/gui/file";

function AlertsTable({
  data,
  actionFn,
  dataLoading,
  ActionIcon,
  toolTipTitle,
}) {
  const columns = [
    {
      title: "ALERT ID",
      dataIndex: "alertID",
      key: "alertID",
      width: "150px",
    },
    {
      title: "SEVERITY",
      dataIndex: "severity",
      key: "severity",
      width: "100px",
      render: (severity) => (
        <span style={{ color: getSeverityColor(severity), fontWeight: "600" }}>
          {capitalizeSeverity(severity)}
        </span>
      ),
    },
    {
      title: "Hostname",
      dataIndex: "hostname",
      key: "hostname",
      width: "100px",
    },
    {
      title: "DESCRIPTION",
      dataIndex: "alertDescription",
      key: "alertDescription",
      width: "60%",
    },
    {
      title: "ACTION",
      // dataIndex: "action",
      key: "action",
      render: (record) => (
        <TooltipComponent
          position="TopCenter"
          content={toolTipTitle}
          target="#target"
        >
          <button
            id="target"
            onClick={() => actionFn(record)}
            className="text-blue-600"
          >
            <ActionIcon size="2em" />
          </button>
        </TooltipComponent>
      ),
    },
  ];

  const openVirusTotal = (hash) => {
    console.log(hash);
    window.open(`${VTURL}/${hash}`, "_blank");
  };

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

  return (
    <>
      <Table
        loading={dataLoading}
        pagination={{ position: ["bottomRight"], defaultPageSize: 6 }}
        rowKey={(record) => record.alertID}
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
            <ul className="expandList highlighted-text">
              <li>
                <span>Alert ID:</span> <span>{record.alertID}</span>
              </li>
              <li>
                <span>Alert Description:</span>
                <span>{record.alertDescription}</span>
              </li>
              <li>
                <span>Severity:</span>
                <span style={{ color: getSeverityColor(record.severity) }}>
                  {capitalizeSeverity(record.severity)}
                </span>
              </li>
              <li>
                <span>Command Executed:</span>
                <span>{record.commandExecuted}</span>
              </li>
              <li>
                <span>FileName:</span> <span>{record.fileName}</span>
              </li>
              <li>
                <span>FilePath:</span> <span>{record.filePath}</span>
              </li>
              <li>
                <span>Hash:</span>
                <p>
                  {record.hash}
                  <button onClick={() => openVirusTotal(record.hash)}>
                    <SiVirustotal className="text-blue-600" size="1.2rem" />
                  </button>
                </p>
              </li>
              <li>
                <span>Hostname:</span> <span>{record.hostname}</span>
              </li>
              <li>
                <span>MitreIOC:</span> <span>{record.mitreIOC}</span>
              </li>
              <li>
                <span>Status:</span>
                <span>{capitalizeSeverity(record.status)}</span>
              </li>
              {record.status !== "open" && (
                <>
                  <li>
                    <span>Comments:</span> <span>{record.comments}</span>
                  </li>
                  <li>
                    <span>Classification:</span>
                    <span>{record.classification}</span>
                  </li>
                </>
              )}
            </ul>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
          rowClassName: (record, index) =>
            record.isExpanded ? "expanded-row" : "",
        }}
        dataSource={data}
        columns={columns}
      />
    </>
  );
}

export default AlertsTable;
