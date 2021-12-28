function ExampleConstructor() {

}

console.log('value of ExampleConstructor.prototype', ExampleConstructor.prototype);
console.log('type of ExampleConstructor:', typeof ExampleConstructor);

var newExampleConstructor = new ExampleConstructor();
console.log('value of newExampleConstructor:', newExampleConstructor);
var newExampleConstructorResult = newExampleConstructor instanceof ExampleConstructor;
console.log('value of newExampleConstructor:', newExampleConstructorResult);
