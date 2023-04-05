import React, { useEffect, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { useUserContext } from "../../../GlobalContexts/UserContextProvider";
import AdminHome from "./AdminHome";
import MemberHome from "./MemberHome";

const DashboardHome = () => {
  const { currentColor } = useStateContext();

  const { state } = useUserContext();
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10">
      {state?.user?.role === "admin" ? <AdminHome /> : <MemberHome />}
    </div>
  );
};

export default DashboardHome;
