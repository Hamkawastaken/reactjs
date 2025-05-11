import { useState } from "react";
import { axiosInstance } from "../lib/axios";

const useFetchEmployees = () => {
  type Employees = {
    id: string;
    name: string;
  };

  const [employees, setEmployees] = useState<Employees[]>([]);
  const [employeesIsLoading, setEmployeesIsLoading] = useState(false);
  const [employeesError, setEmployeesError] = useState("");

  const fetchEmployees = async () => {
    try {
      setEmployeesIsLoading(true);

      const response = await axiosInstance.get("/employees")
      setEmployees(response.data);
      
    } catch (error) {
      setEmployeesError((error as TypeError).message);
    } finally {
      setEmployeesIsLoading(false);
    }
  };

  return {
    fetchEmployees,
    employees,
    employeesIsLoading,
    employeesError
  }
};


export default useFetchEmployees
