import React, { useContext } from "react";
import { AuthContext } from "../Authprovider/Authprovider";

const DashbardDefaultPage = () => {
  const { userEmail } = useContext(AuthContext);
  console.log("hello from ", userEmail);
  return (
    <div>
      <p> welcome     {userEmail?.displayName ? userEmail.displayName : "back"} </p>

     
    </div>
  );
};

export default DashbardDefaultPage;
