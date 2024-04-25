const Employees = require('./Employees');

class SalesPerson extends Employees {
  _totalSales;
  constructor(name, position, salary, clients) {
    super(name, position, salary);
    this.clients = clients;
    this._totalSales = 0;
  }

  getSalesNumber() {
    return this._totalSales;
  }

  makeSale(amount) {
    this._totalSales += amount;
  }

  findClient(client) {
    return this.clients.find((c) => c === client);
  }
}

module.exports = 
  SalesPerson

