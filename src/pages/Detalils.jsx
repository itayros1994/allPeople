import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { UserPreview } from "../cmps/UserPreview";
import SimpleMap from "../cmps/SimpleMap";

export function Detalils() {
  const location = useLocation();
  const { choosenUser } = location.state;

  useEffect(() => {
    console.log(choosenUser);
    console.log("details");
  }, []);

  return (
    <div className="user-details-container">
      <UserPreview user={choosenUser} />
      <SimpleMap lat={'32.0853'} lng={'34.7818'}/>
    </div>
  );
}
