import { useState } from "react";
import { axiosInstance } from "../lib/axios";

const useDeleteEmployee = () => {
  const [deleteEmployeeIsLoading, setDeleteEmployeeeIsLoading] =
    useState(false);
  const [deleteEmployeeError, setDeleteEmployeeError] = useState("");

  const deleteEmployee = async (employeeId: string) => {
    try {
      setDeleteEmployeeeIsLoading(true);

      await axiosInstance.delete(`/employees/${employeeId}`);
    } catch (error) {
      setDeleteEmployeeError((error as TypeError).message);
    } finally {
      setDeleteEmployeeeIsLoading(false);
    }
  };

  return {
    deleteEmployee,
    deleteEmployeeError,
    deleteEmployeeIsLoading,
  };
};

export default useDeleteEmployee;
