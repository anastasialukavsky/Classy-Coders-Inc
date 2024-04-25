const Employees = require('./Employees');

class SoftwareEngineer extends Employees {
  constructor(name, position, salary, _programmingLanguages) {
    super(name, position, salary);
    this._programmingLanguages = _programmingLanguages;
  }

  getProgrammingLanguages() {
    return this._programmingLanguages;
  }

  setProgrammingLanguages(language) {
    this._programmingLanguages.push(language);
  }
}

module.exports = SoftwareEngineer;
