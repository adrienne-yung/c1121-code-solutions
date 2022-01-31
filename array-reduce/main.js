const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
});
console.log('value of sum:', sum);

const product = numbers.reduce((previousValue, currentValue) => {
  return previousValue * currentValue;
});
console.log('value of product:', product);

const balance = account.reduce((balanceTotal, transaction) => {
  if (transaction.type === 'deposit') {
    return balanceTotal + transaction.amount;
  }
  return balanceTotal - transaction.amount;
});
console.log('value of balance:', balance);

const composite = traits.reduce((pokemon, trait) => {
  return Object.assign(pokemon, trait);
});
console.log('value of composite:', composite);
