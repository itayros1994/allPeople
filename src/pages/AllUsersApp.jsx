import React, { useEffect, useState } from "react";
import { UsersService } from "../services/UsersService";
import { UsersList } from "../cmps/UsersList";

export function AllUsersApp() {
  let [page, setPage] = useState(6);
  const [users, setUsers] = useState([]);
  const [filterBy, setFilterBy] = useState("");

  useEffect(() => {
    UsersService.getUsers(page, filterBy).then((users) =>
      setUsers(users.results)
    );
    console.log(users);
  }, []);

  useEffect(() => {
    UsersService.getUsers(page, filterBy).then((users) =>
      setUsers(users.results)
    );
    console.log("Chage Page!");
  }, [page, filterBy]);

  const setPageForward = () => {
    if (page === 11) return;
    setPage(page++);
  };

  const setPageBackward = () => {
    if (page === 0) return;
    setPage(page--);
  };

  const setToFilterBy = (filterOption) => {
    setFilterBy(filterOption);
  };

  return (
    <div>
      <h1>All Users App !</h1>
      <div>
        <UsersList
          users={users}
          setPageForward={setPageForward}
          setPageBackward={setPageBackward}
          setToFilterBy={setToFilterBy}
          page={page}
        />
      </div>
    </div>
  );
}
