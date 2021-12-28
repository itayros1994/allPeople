import React from "react";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export function UserPreview({ user, detailsMode }) {
  return (
    <div className="link">
      <div className="user-preview-container link">
        <Avatar className="user-avatar" src={user.picture.thumbnail} alt="" />
        <div className="user-names-container">
          <div className="user-name-first">
            {user.name.first.substring(0, 1)}
            {user.name.last.substring(0, 1)}
          </div>
          <div className="user-name-last">Age : {user.registered.age}</div>
          <div className="user-name-last">{user.gender}</div>
          {
            <p>
              <a className="email" href={`mailto:${user.email}`}>
                Send Me Email 📨
              </a>
            </p>
          }
          <Link
            to={{
              pathname: `/details/${user.name.first}`,
              state: {
                choosenUser: user
              },
            }}
          >
            <Button
              className={detailsMode ? "none" : "link"}
              variant="contained"
            >
              Click For More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
