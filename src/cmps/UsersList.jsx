import React from "react";
import { UserPreview } from "./UserPreview";

export function UsersList({ users, setPageForward, setPageBackward }) {
  return (
    <div className="user-list-main-container">
      <button onClick={() => setPageBackward()}>⬅</button>
      <div className="users-list">
        {users.map((user) => {
            return <UserPreview user={user} />;
        })}
      </div>
        <button onClick={() => setPageForward()}>➡</button>
    </div>
  );
}
