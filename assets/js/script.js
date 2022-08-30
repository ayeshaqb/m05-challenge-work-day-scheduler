//Display current day at top of calendar
var currentDay = moment();
$('#currentDay').text(currentDay.format(
  'dddd, MMMM Do, YYYY'));

var saveBtnEl = $('.saveBtn');

//When DOM is fully loaded, execute the following functions...
$(document).ready(function () {

  //Save items to local storage when user clicks save button:
  //When save button is clicked...
  saveBtnEl.on('click', function () {
    //...store the hour and text input into variables...
    var hourKey = $(this).parent().attr('id');
    var textValue = $(this).siblings('.description').val();
    //...save this data to local storage.
    localStorage.setItem(hourKey, textValue);
  });

});


