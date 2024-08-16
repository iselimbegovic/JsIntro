const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
      //... More employee records can be added here
    ];

function displayEmployees() {
    const allEmployees = employees.map(
        (employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    ).join('')
    document.getElementById('employeeDetails').innerHTML = allEmployees;
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((total, employee) => total + employee.salary, 0);
    alert(`Total salaries:  ${totalSalaries}`)
}

function displayHREmployees() {
    const hrEmployees = employees.filter((employee) => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map(
        (employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    ).join('');
    document.getElementById('employeeDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const employee = employees.find(employee => employee.id === employeeId);
    if (employee) {
        document.getElementById('employeeDetails').innerHTML = `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`;
    } else {
        document.getElementById('employeeDetails').innerHTML = `No one found`;
    }
}