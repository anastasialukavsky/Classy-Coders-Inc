const Employees = require('./Employees');

class Manager extends Employees {
  _employeesManaged;
  constructor(name, position, salary, department) {
    super(name, position, salary);
    this.department = department;
    this._employeesManaged = [];
  }

  getEmployeesManaged() {
    return this._employeesManaged;
  }

  setEmployeesManaged(employee) {
    this._employeesManaged.push(employee);
  }
}

module.exports = Manager;
