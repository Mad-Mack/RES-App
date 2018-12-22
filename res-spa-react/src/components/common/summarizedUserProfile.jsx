import React, { Fragment } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Button } from "@material-ui/core";

const SummarizedUserProfile = ({ name, imageUrl, open }) => {
  if (open)
    return (
      <Fragment>
        <div className="ml-auto mr-auto text-center">
          <AccountCircleIcon color="primary" style={{ fontSize: "7rem" }} />
        </div>
        <div className="ml-auto mr-auto text-center">
          <h4>{name}</h4>
        </div>
        <div className="ml-auto mr-auto text-center" style={{ marginBottom: "20px" }}>
          <Button color="primary">Edit Profile</Button>
        </div>
      </Fragment>
    );
  return (
    <div className="ml-auto mr-auto text-center">
      <AccountCircleIcon color="primary" style={{ fontSize: "3rem", marginTop: "20px", marginBottom: "20px", cursor: "pointer" }} />
    </div>
  );
};

export default SummarizedUserProfile;
