class Wallet {
  constructor() {
    this.coins = {};
    this.transactionHistory = [];
  }

  addCoin(coinName, amount = 0) {
    this.coins[coinName] = (this.coins[coinName] || 0) + amount;
  }

  removeCoin(coinName, amount = 0) {
    if (this.coins[coinName] && this.coins[coinName] >= amount) {
      this.coins[coinName] -= amount;
      this.recordTransaction(coinName, -amount);
    } else {
      console.error('Insufficient funds or coin does not exist.');
    }
  }

  getBalance(coinName) {
    return this.coins[coinName] || 0;
  }

  recordTransaction(coinName, amount) {
    const transaction = {
      coinName,
      amount,
      date: new Date().toISOString(),
    };
    this.transactionHistory.push(transaction);
  }

  getTransactionHistory() {
    return this.transactionHistory;
  }
}

module.exports = Wallet;