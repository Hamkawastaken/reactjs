import { useState } from "react";

const useFetchEmployees = () => {
  type Employees = {
    id: number;
    name: string;
  };

  const [employees, setEmployees] = useState<Employees[]>([]);
  const [employeesIsLoading, setEmployeesIsLoading] = useState(false);
  const [employeesError, setEmployeesError] = useState("");

  const fetchEmployees = async () => {
    try {
      setEmployeesIsLoading(true);
      const request = await fetch("http://localhost:2000/employees", {
        method: "GET",
      });
      const responseJson = (await request.json()) as Employees[];

      setEmployees(responseJson);
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
