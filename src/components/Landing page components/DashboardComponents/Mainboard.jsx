import React from "react";
import { useUser } from "../../../utils/custom-hooks/useUser";
// import { useToken } from "../../utils/custom-hooks/useToken";
const Mainboard = () => {
  const user = useUser();
  // const [token, setToken] = useToken();
  const { id, email, isVerified, info } = user;

  return (
    <div>
      {!isVerified && (
        <div
          style={{
            backgroundColor: "#F7A4A4",
            minWidth: "500px",
            borderRadius: "8px",
            padding: "10px",
          }}
        >
          <p
            style={{
              color: "#DC0000",
              fontSize: "14px",
              fontWeight: "300",
            }}
          >
            You wont be able to make any changes until you verify your email
          </p>
        </div>
      )}
      <h1>MAIN PART</h1>
    </div>
  );
};

export default Mainboard;

//Need to display a notification, if the user has not verified their email account
//Handle update user info page
