import { useUsers } from "../../hooks/useUsers";
import UserService, { User } from "../../services/userService";
import { AxiosError } from "../../services/api-client";
import React from "react";

export const Users = () => {
  const { users, error, isLoading, setUsers, setError } = useUsers();
  const handleDelete = async (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    try {
      const res = await UserService.delete(user.id);
      console.log(res.status);
    } catch (err) {
      setError((err as AxiosError).message);
      setUsers(originalUsers);
    }
  };
  const handleAddUser = async () => {
    const originalUsers = [...users];
    const newUser = { id: users.length + 1, name: "Mosh" };
    try {
      const res = await UserService.create<User>(newUser);
      setUsers([res.data, ...users]);
      console.log(res.status);
    } catch (err) {
      setError((err as AxiosError).message);
      setUsers(originalUsers);
    }
  };
  return (
    <div>
      {isLoading && <div className={"spinner-border"}></div>}
      <button className={"btn btn-primary mb-3"} onClick={handleAddUser}>
        Add
      </button>
      <ul className={"list-group "}>
        {!isLoading &&
          users.map((user) => (
            <li
              key={user.id}
              className={"list-group-item d-flex justify-content-between"}
            >
              {user.name}
              <button
                className="btn btn-outline-danger"
                onClick={() => handleDelete(user)}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
      {error && <p className={"text-danger"}>{error}</p>}
    </div>
  );
};
