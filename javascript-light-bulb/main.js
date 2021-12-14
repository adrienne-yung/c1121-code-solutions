var lightOn = false;
var $onOffSwitch = document.querySelector('button');
var $container = document.querySelector('.container');
$onOffSwitch.addEventListener('click', lightSwitch);

function lightSwitch(event) {
  if (lightOn === true) {
    $onOffSwitch.classList.add('lightOff');
    $container.classList.remove('background-color');
    lightOn = false;
  } else {
    $onOffSwitch.classList.remove('lightOff');
    $container.classList.add('background-color');
    lightOn = true;
  }
}
