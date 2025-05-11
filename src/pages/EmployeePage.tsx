import useFetchEmployees from "../api/useFetchEmployees";

const EmployeePage = () => {
  const { employees, employeesError, employeesIsLoading, fetchEmployees } =
    useFetchEmployees();

  return (
    <div className="flex flex-col justify-center items-center mt-12 border py-4">
      <h1 className="font-bold text-2xl">Employee Page</h1>
      <table className="border border-blue-500 border-collapse mt-4">
        <thead>
          <tr>
            <th className="border border-blue-500 p-2">ID</th>
            <th className="border border-blue-500 p-2">Name</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr>
                <td className="border border-blue-500 p-2">{employee.id}</td>
                <td className="border border-blue-500 p-2">{employee.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        onClick={fetchEmployees}
        className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
      >
        Fetch Employees
      </button>
      {employeesIsLoading && <span>Loading...</span>}
      {employeesError && <span className="text-red-500">{employeesError}</span>}
    </div>
  );
};

export default EmployeePage;
