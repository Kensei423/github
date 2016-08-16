/////////////// These routes/routes_val are looping below to show up in the console/////////
var routes = ['Aurora,IL','Chicago,IL', 'Dekalb,IL', 'Lombard,IL', 'Villa Park,IL', 'Wheaton, IL'];
var routes_val = ['AUR', 'CHI', 'DKB',  'LMB', 'VP', 'WTN'];


//////// cityCodes////////////////////////////////////////////////////
var cityCodes = {
  'AUR':  ['Aurora, IL'],
  'CHI': ['Chicago,IL'],
  'DKB': ['DeKalb, IL'],
  'LMB': ['Lombard,IL'],
  'VP': ['Villa Park, IL'],
  'WTN': ['Wheaton,IL']
};


/////////ON CHANGE EVENT ///////////////////////
function populateDestinations () {

  var list = document.getElementById("list");
  var list2 = document.getElementById("list2");
  list2.innerHTML  = " ";

  var cityCode = $(list).val()

  var optionArray = getDestinations(cityCode);

  // OK, add in a 'blank' option
  var blankOpt = document.createElement("option");
  blankOpt.value = '';
  blankOpt.innerHTML = 'Select destination';
  list2.options.add(blankOpt);


  for (var option in optionArray) {
    //var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    var option = optionArray[option];
    var cityCode = option.cityCode;
    var displayName = option.displayName;
    newOption.value = cityCode;
    newOption.innerHTML = displayName;
    list2.options.add(newOption);
  }
}




////// Loop to display routes in dropdown and console//////////////////////////
for (var i = 0; i < routes.length; i++) {
  var option = document.createElement('option');
  option.innerHTML = routes[i];
  option.value = routes_val[i];
  $('#list').append(option);
}

routes_val.forEach(function (val) {
  console.log(val, cityCodes[val]);
});
///////////////////////////////////////////////////////////////////////////////



//// SOURCE CITY PICKER LOGIC
//
document.getElementById('list2').disabled=true;



//handle source change function//
function handleSourceChange () {

  var selectedValue = $("#list").val();

  // Determine if destination should be enabled/disabled
  if(selectedValue === "From Location") {
    document.getElementById('list2').disabled=true;
  } else {
    document.getElementById('list2').disabled=false;
  }

  populateDestinations();

  handleDestinationChange();

}
$("#list").change(handleSourceChange)




////////////////////////////////////////////////////////////////////////////////
//// DESTINATION CITY PICKER LOGIC
document.getElementById("date-picker").style.display = 'none';

function handleDestinationChange () {

  var selectedValue = $("#list2").val();

  if(selectedValue === '') {
    document.getElementById("date-picker").style.display = 'none';
  } else {
    document.getElementById("date-picker").style.display = ''; // Show
  }

  let sourceCity = $("#list").val();
  let destCity = $("#list2").val();

  let activeDays = figureOutDays(sourceCity, destCity); // [3, 4, 5]

  /// *****NOT WORKING***/
  datePicker.set('disable', [1,2]);
  datePicker.set('enable', activeDays);
}

function figureOutDays () {
  return [5];
}

$("#list2").change(handleDestinationChange)



//         IS CITY IN ROUTE
var isCityInRoute = function(city){

if(jQuery.inArray(city , routes_val) >= 0){
  console.log('this is in the array');
}else {
  console.log('this is not in the array');
}
};

isCityInRoute('AUR');

//////////GET DESTINATIONS FUNCTION///////////////////////////////////////////////
var getDestinations = function(cityCode) {

  if (cityCode == 'AUR') {
    var optionArray = [{cityCode: 'woo', displayName: 'Woo'}, {cityCode: 'yea', displayName: 'Yea'}];
  }

  if (cityCode == 'CHI') {
    var optionArray = [{cityCode: 'woo', displayName: 'Woo'}, {cityCode: 'yea', displayName: 'Yea'}];
  }

  if(cityCode == 'DKB') {
    var optionArray = [{cityCode: 'woo', displayName: 'Woo'}, {cityCode: 'yea', displayName: 'Yea'}];
  }

  if(cityCode == 'LMB') {
    var optionArray = [{cityCode: 'woo', displayName: 'Woo'}, {cityCode: 'yea', displayName: 'Yea'}];
  }

  if (cityCode == 'VP') {
    var optionArray = [{cityCode: 'woo', displayName: 'Woo'}, {cityCode: 'yea', displayName: 'Yea'}];
  }

  if (cityCode == 'WTN') {
    var optionArray = [{cityCode: 'woo', displayName: 'Woo'}, {cityCode: 'yea', displayName: 'Yea'}];
  }

  return optionArray;

}
