import React, { useEffect, useState } from "react";
import { UsersService } from "../services/UsersService";
import { UsersList } from "../cmps/UsersList";

export function AllUsersApp() {
  let [page, setPage] = useState(6);
  const [users, setUsers] = useState([]);
  
  
  
  useEffect(() => {
    UsersService.getUsers(page).then((users) => setUsers(users.results));
    console.log(users);
  }, []);
  
  useEffect(() => {
    UsersService.getUsers(page).then((users) => setUsers(users.results));
    console.log('Chage Page!');
  }, [page]);



const setPageForward=()=> {
setPage(page++)
 }
const setPageBackward=()=> {
setPage(page--)
 }


  return (
    <div>
      <h1>Users List!</h1>

      <div className="pagination-container">
        <UsersList users={users} setPageForward={setPageForward} setPageBackward={setPageBackward} />
      </div>
    </div>
  );
}
