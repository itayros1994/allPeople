import React from "react";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

export function UserPreview({ user }) {
  return (
    <div className="user-preview-container">
      <Link
        to={{
          pathname: `/details/${user.name.first}`,
          state: {
            choosenUser: user,
          },
        }}
      >
        <Avatar className="user-avatar" src={user.picture.thumbnail} alt="" />
        <div className="user-name-first">Name : {user.name.first}</div>
        <div className="user-name-last">Last Name : {user.name.last}</div>
        <div className="user-name-last">Age : {user.registered.age}</div>
        <div className="user-name-email">Email : {user.email}</div>
      </Link>
    </div>
  );
}
