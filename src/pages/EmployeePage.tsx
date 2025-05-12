import { useState } from "react";
import useFetchEmployees from "../api/useFetchEmployees";
import useCreateEmployees from "../api/useCreateEmployee";
import useDeleteEmployee from "../api/useDeleteEmployee";

const EmployeePage = () => {
  const [inputText, setInputText] = useState("");

  const [selectedEmployee, setSelectedEmployee] = useState("")

  const { employees, employeesError, employeesIsLoading, fetchEmployees } =
    useFetchEmployees();

  const { createEmployeesError, createEmployeesIsLoading, createEmployee } =
    useCreateEmployees();

  const { deleteEmployee } = useDeleteEmployee();

  const handleCreateEmployee = async () => {
    await createEmployee(inputText);
    await fetchEmployees();
    setInputText("");
  };

  const handleDeleteEmployee = async (employeeId: string) => {
    await deleteEmployee(employeeId);
    await fetchEmployees();
  };

  return (
    <div className="flex flex-col justify-center items-center mt-12 border py-4">
      <h1 className="font-bold text-2xl">Employee Page</h1>
      <table className="border border-blue-500 border-collapse mt-4">
        <thead>
          <tr>
            <th className="border border-blue-500 p-2">ID</th>
            <th className="border border-blue-500 p-2">Name</th>
            <th className="border border-blue-500 p-2">Action</th>
            <th className="border border-blue-500 p-2">Select Edit</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr key={employee.id}>
                <td className="border border-blue-500 p-2">{employee.id}</td>
                <td className="border border-blue-500 p-2">{employee.name}</td>
                <td className="border border-blue-500 p-2">
                  <button
                    onClick={() => handleDeleteEmployee(employee.id)}
                    className="border cursor-pointer p-1 rounded bg-red-500 text-white"
                  >
                    Delete
                  </button>
                </td>
                <td className="border border-blue-500 p-2 mx-auto">
                  <input onChange={() => setSelectedEmployee(employee.id)} type="radio" name="employee-edit" />
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2} className="border border-blue-500 p-2">
              <input
                onChange={(e) => setInputText(e.target.value)}
                value={inputText}
                type="text"
                className="border rounded m-2 p-0.5"
              />
            </td>
            <td className="border border-blue-500 p-2">
              <button
                className="border rounded flex justify-center items-center mb-2 mx-auto cursor-pointer bg-blue-500 text-white px-2 py-1"
                disabled={createEmployeesIsLoading}
                onClick={handleCreateEmployee}
              >
                Create Employee
              </button>
            </td>
          </tr>
          <tr></tr>
        </tfoot>
      </table>
      <button
        onClick={fetchEmployees}
        className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
      >
        Fetch Employees
      </button>
      
      {selectedEmployee}
      {employeesIsLoading && <span>Loading...</span>}
      {employeesError && <span className="text-red-500">{employeesError}</span>}
      {createEmployeesError && (
        <span className="text-red-500">{createEmployeesError}</span>
      )}
    </div>
  );
};

export default EmployeePage;
