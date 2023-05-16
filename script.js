
$(function () {

  var saveButton = $('.btn');
  console.log(saveButton)
  
  saveButton.on('click', function (event) {
    var storedText = (this.previousElementSibling.value)
    console.log(event)
    localStorage.setItem(this.parentElement.id, storedText)
  });
  

  function displayTime() {
    var rightnow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    $('#currentDay').text(rightnow);
  }
  displayTime();
  setInterval(displayTime, 1000);


  var hour = dayjs().hour();
  console.log (hour)
  var scheduleHour = document.querySelectorAll('.hour');
  var scheduleRow = document.querySelectorAll('.row');
  var textArea = document.querySelectorAll('.description');

  console.log(scheduleHour.textContent);
  console.log(scheduleRow);
  
  for (i=0; i < scheduleHour.length; i++) {
    var blockCounter = i+9
    textArea[i].value = localStorage.getItem(`hour-${blockCounter}`)
  if (hour > i+9) {
    scheduleRow[i].classList.add('past')
  } else if (hour < i+9 ) {
    scheduleRow[i].classList.add('future')
  } else {
    scheduleRow[i].classList.add('present')
  };
  }

});
