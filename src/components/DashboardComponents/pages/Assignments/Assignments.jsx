import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import { useUserContext } from "../../../../GlobalContexts/UserContextProvider";
import axios from "axios";

const { Title } = Typography;

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { state } = useUserContext();
  const email = state?.user?.email;

  const getAssignments = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.DASHBOARD_ENDPOINT}getUserAssignments/${email}`
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

  useEffect(() => {
    getAssignments();
  }, []);

  return (
    <div className="m-5">
      <Title level={2} className="text-center">
        Assignments
      </Title>
      <div>
        {assignments.map((assignment, idx) => (
          <Card title="Card title" bordered={false} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
