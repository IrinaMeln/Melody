// code.jquery.com — библиотека jQuery

$(document).ready(function() { /*эта фугкция проверяет, готов ли нащ сайт к манипуляциям */
  var currentFloor = 2; // переменная, где хранится текущий этаж
  var floorPath = $(".home-image path"); // каждый отдельный этаж в svg
  var counterUp = $(".counter-up"); /* кнопка увеличения этажа */
  var counterDown = $(".counter-down"); /* кнопка уменьшения этажа */
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton =$(".view-flats");

  // функция при наведении мышкой на этаж
  floorPath.on('mouseover', function() {
    floorPath.removeClass('current-floor'); /*удвляет подсвеченный этаж, который был выбран при клике на стрелку и подсвечивает при наведении мышкой */
    currentFloor = $(this).attr('data-floor'); // получаем значение текущего этажа
    $(".counter").text(currentFloor); // записываем значение этажа в счётчик справа
  });

  floorPath.on('click', toggleModal); /* при клике на этаж - вызвать окно */
  modalCloseButton.on('click', toggleModal); /* при клике на кнопку закрыть - закрывает окно */
  viewFlatsButton.on('click', toggleModal);

  counterUp.on('click', function() { // отслеживаем клик по кнопке вверх
    if (currentFloor < 18) { // проверяем значение этажа, не должон быть больше 18
          currentFloor++; /* означает, что увеличиваем значение на 1 этаж */
          usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGroupping: false }); /* чтобы впереди был нолик, чтобы было 01, а не 1*/
          $(".counter").text(usCurrentFloor); // записываем значение этажа в счётчик справа
          floorPath.removeClass('current-floor'); // удвляет подсвеченный этаж, который был выбран при клике на стрелку и подсвечивает при наведении мышкой
          $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); /* чтобы подсвечивались текущие этажи */
        }  
      });

  counterDown.on('click', function() {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGroupping: false }); /* чтобы впереди был нолик */
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass('current-floor');
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); /* чтобы подсвечивались текущие этажи */
    }
  });

  //функция открыть-закрыть окно
  function toggleModal() {
      modal.toggleClass('is-open');
  };
});


