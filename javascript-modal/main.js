var $modalButton = document.querySelector('.modal-button');
var $modalOpen = document.querySelector('.modal-open');
var $noButton = document.querySelector('.no-button');

$modalButton.addEventListener('click', openModal);
function openModal(event) {
  if (event.target.matches('.modal-button')) {
    $modalOpen.className = 'modal-open';
  } else {
    $modalOpen.className = 'modal-open hidden';
  }
}

$noButton.addEventListener('click', noThanks);
function noThanks(event) {
  if (event.target.matches('.no-button')) {
    $modalOpen.className = 'modal-open hidden';
  }
}
