/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && (amount > 0)) {
    var depositForTransaction = new Transaction('deposit', amount);
    this.transactions.push(depositForTransaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var withdrawForTransaction = new Transaction('withdrawal', amount);
    this.transactions.push(withdrawForTransaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var totalDeposits = 0;
  var totalWithdrawals = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      totalDeposits += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      totalWithdrawals += this.transactions[i].amount;
    }
  }
  var balance = totalDeposits - totalWithdrawals;
  return balance;
};
