import { useState } from "react";
import { axiosInstance } from "../lib/axios";

const useEditEmployees = () => {
  const [editEmployeesIsLoading, setEditEmployeesIsLoading] =
    useState(false);
  const [editEmployeesError, setEditEmployeesError] = useState("");

  const editEmployee = async (employeeID: string, payload: string) => {
    try {
      setEditEmployeesIsLoading(true);

      await axiosInstance.patch(`/employees/${employeeID}`, {
        name: payload
      });
    } catch (error) {
      setEditEmployeesError((error as TypeError).message);
    } finally {
      setEditEmployeesIsLoading(false);
    }
  };
  return {
    editEmployeesError,
    editEmployeesIsLoading,
    editEmployee,
  };
};

export default useEditEmployees;
