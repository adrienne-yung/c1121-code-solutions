var $inputName = document.querySelector('#user-name');
var $inputEmail = document.querySelector('#user-email');
var $textArea = document.querySelector('textarea');

$inputName.addEventListener('focus', handleFocus);
$inputName.addEventListener('blur', handleBlur);
$inputName.addEventListener('input', handleInput);
function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}

$inputEmail.addEventListener('focus', handleFocus);
$inputEmail.addEventListener('blur', handleBlur);
$inputEmail.addEventListener('input', handleInput);
function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}

$textArea.addEventListener('input', handleInput);
$textArea.addEventListener('focus', handleFocus);
$textArea.addEventListener('blur', handleBlur);
function handleInput(event) {
  console.log('value of name:', event.target.value);
}
