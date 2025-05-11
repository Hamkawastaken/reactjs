import { useState } from "react";
import { axiosInstance } from "../lib/axios";

const useCreateEmployees = () => {
  const [createEmployeesIsLoading, setCreateEmployeesIsLoading] =
    useState(false);
  const [createEmployeesError, setCreateEmployeesError] = useState("");

  const createEmployee = async (payload: string) => {
    try {
      setCreateEmployeesIsLoading(true);

      await axiosInstance.post("/employees", {
        name: payload,
      });
    } catch (error) {
      setCreateEmployeesError((error as TypeError).message);
    } finally {
      setCreateEmployeesIsLoading(false);
    }
  };
  return {
    createEmployeesError,
    createEmployeesIsLoading,
    createEmployee,
  };
};

export default useCreateEmployees;
