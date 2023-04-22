import React, { useEffect, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { useUserContext } from "../../../GlobalContexts/UserContextProvider";
import AdminHome from "./AdminHome";
import MemberHome from "./MemberHome";

const DashboardHome = () => {
  const { currentColor } = useStateContext();

  const { state } = useUserContext();
  return (
    <div className="m-2 md:m-5 mt-24 mb-24 p-2 md:p-5 h-3/4">
      {state?.user?.role === "admin" ? <AdminHome /> : <MemberHome />}
    </div>
  );
};

export default DashboardHome;
