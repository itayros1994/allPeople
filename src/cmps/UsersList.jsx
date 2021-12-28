import React from "react";
import { UserPreview } from "./UserPreview";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { UsersFilter } from "./UsersFilter";

export function UsersList({
  users,
  setPageForward,
  setPageBackward,
  page,
  setToFilterBy,
}) {
  return (
    <div>
      <div className="filter-by">
        <UsersFilter setToFilterBy={setToFilterBy} />
      </div>
      <div className="pagination-container">
        <div className="page-arrow">
          <ChevronLeftIcon onClick={setPageBackward}>⬅</ChevronLeftIcon>
        </div>
        <span className="page-number">Page Number : {page}</span>
        <ChevronRightIcon
          className="page-arrow"
          onClick={setPageForward}
        >
          ➡
        </ChevronRightIcon>
      </div>
      <div className="user-list-main-container">
        <div className="users-list">
          {users.map((user) => {
            return <UserPreview detailsMode={false} user={user} />;
          })}
        </div>
      </div>
    </div>
  );
}
