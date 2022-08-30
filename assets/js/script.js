//Display current day at top of calendar
var currentDay = moment();
$('#currentDay').text(currentDay.format(
  'dddd, MMMM Do, YYYY'));

var saveBtnEl = $('.saveBtn');
var currentTime = moment().hours();
console.log(currentTime);

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


  //return any stored values (text input) from local storage -- pass each key (time-block id). 
  $('#09-am .description').val(localStorage.getItem('09-am'));
  $('#10-am .description').val(localStorage.getItem('10-am'));
  $('#11-am .description').val(localStorage.getItem('11-am'));
  $('#12-pm .description').val(localStorage.getItem('12-pm'));
  $('#01-pm .description').val(localStorage.getItem('01-pm'));
  $('#02-pm .description').val(localStorage.getItem('02-pm'));
  $('#03-pm .description').val(localStorage.getItem('03-pm'));
  $('#04-pm .description').val(localStorage.getItem('04-pm'));
  $('#05-pm .description').val(localStorage.getItem('05-pm'));



});


