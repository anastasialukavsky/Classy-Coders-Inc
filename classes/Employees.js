class Employees {
  _salary;
  _isHired;
  static _allEmployees = [];

  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this._salary = salary;
    this._isHired = true;
    Employees._allEmployees.push(this);
  }

  getSalary() {
    return this._salary;
  }

  setSalary(amount) {
    if (amount < 0) {
      throw new Error('Salary cannot be negative');
    }
    this._salary = amount;
  }

  getStatus() {
    return this._isHired;
  }

  setStatus(command) {
    if (command === 'hire') {
      this._isHired = true;
    } else if (command === 'fire') {
      this._isHired = false;
    }
  }

  static getEmployees() {
    return Employees._allEmployees;
  }

  static getTotalPayroll() {
    return Employees._allEmployees.reduce(
      (total, employee) => total + employee._salary,
      0
    );
  }
}

module.exports = Employees;
