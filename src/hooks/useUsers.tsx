import { useEffect, useState } from "react";
import UserService, { User } from "../services/userService";
import { CanceledError } from "axios";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const { request, cancel } = UserService.getAll<User>();
    request
      .then((res) => {
        setIsLoading(false);
        setUsers(res.data);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });
    return () => cancel();
  }, []);

  return { users, error, isLoading, setUsers, setError };
};
