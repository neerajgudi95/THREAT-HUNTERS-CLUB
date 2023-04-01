import React, { useState, useEffect } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Toolbar,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { DashHeader } from "../exports";
import { membersGrid } from "../dummyData";
import axios from "axios";

const Members = () => {
  const [membersList, setMembersList] = useState();

  const getMembersList = async () => {
    const response = await axios.get(
      `${process.env.DASHBOARD_ENDPOINT}getUsers`
    );
    const members = response.data;
    // const refinedMembersList = members.map((member) => ({
    //   fullName: `${member.info.firstName} ${member.info.lastName}`,

    // }));

    setMembersList(members);
  };

  useEffect(() => {
    getMembersList();
  }, []);

  return (
    <div className=" m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <DashHeader category="Page" title="Members" />
      <GridComponent
        id="gridcomp"
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
        dataSource={membersList}
        loadingIndicator={{ indicatorType: "Shimmer" }}
      >
        <ColumnsDirective>
          {membersGrid?.map((member, index) => (
            <ColumnDirective key={index} {...member} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
            Toolbar,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Members;
