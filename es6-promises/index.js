const takeAChance = require('./take-a-chance');

const name = takeAChance('Addie');
name.then(resolve => { return console.log(resolve); });
name.catch(reject => { return console.log(reject.message); });
