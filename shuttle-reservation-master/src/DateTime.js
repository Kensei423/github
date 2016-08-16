
var $input = $('.datepicker').pickadate();
// Use the picker object directly.
let datePicker = window.datePicker = $input.pickadate('picker');

var $inputDate = $( '.datepicker' ).pickadate({
  formatSubmit: 'yyyy/mm/dd',
  // min: [2015, 7, 14],
  container: '#container',
  // editable: true,
  closeOnSelect: false,
  closeOnClear: false,
});
