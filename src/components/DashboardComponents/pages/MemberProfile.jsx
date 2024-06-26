import React, { useEffect, useState } from "react";
import { Badge, Descriptions } from "antd";
import axios from "axios";

const items = [
  {
    key: "1",
    label: "Name",
    children: "Cloud Database",
  },
  {
    key: "2",
    label: "Joining date",
    children: "Prepaid",
  },
  {
    key: "3",
    label: "Automatic Renewal",
    children: "YES",
  },
  {
    key: "4",
    label: "Order time",
    children: "2018-04-24 18:00:00",
  },
  {
    key: "5",
    label: "Usage Time",
    children: "2019-04-24 18:00:00",
    span: 2,
  },
  {
    key: "6",
    label: "Status",
    children: <Badge status="processing" text="Running" />,
    span: 3,
  },
  {
    key: "7",
    label: "Negotiated Amount",
    children: "$80.00",
  },
  {
    key: "8",
    label: "Discount",
    children: "$20.00",
  },
  {
    key: "9",
    label: "Official Receipts",
    children: "$60.00",
  },
  {
    key: "10",
    label: "Config Info",
    children: (
      <>
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1
        <br />
      </>
    ),
  },
];

const MemberProfile = () => {
  const [userProfileInfo, setUserProfileInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getuserProfileInfo = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.DASHBOARD_ENDPOINT}getUserProfileInfo/${email}`
      );
      const data = await response.data;
      console.log(data);
      //   setAssignments(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="m-5">
      <Descriptions title="User Info" bordered items={items} />
    </div>
  );
};
export default MemberProfile;
