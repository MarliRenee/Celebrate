'use strict';

//CALENDARIFIC API INFO
const calendarificApiKey = '6a93fc0ceb56dd88e4f84f7a75315a5ec21c7a05'; 
const calendarificSearchURL = 'https://calendarific.com/api/v2/holidays';

//FORMAT THE CALENDARIFIC SEARCH PARAMETERS
function formatHolidayQueryParams(params) {
  const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  return queryItems.join('&');
}

//DISPLAY THE CALENDARIFIC JSON RESULTS & LIST IN HTML
function displayCalendarificResults(responseJson) {
  console.log(responseJson.response.holidays);
  const hol = responseJson.response.holidays;
  $('#results-list').empty();
  for (let i = 0; i < hol.length; i++){
    $('#results-list').append(
      `<li><h3>${hol[i].name}</h3>
      <p>${hol[i].description}</p>
      </li>`
    )};
  if (hol.length === 0) {
      $('#results-list').append(
      `<li><h3>There are no holidays to display today. Let's celebrate your unbirthday instead!</h3>
      </li>`
    )};
  $('#results').removeClass('hidden');
};

//FIND THE CALENDARIFIC PARAMETERS
function getHolidays(country, year, month, day) {
  const params = {
    api_key: calendarificApiKey,
    country: country,
    year: year,
    month: month,
    day: day,
  };
  const queryString = formatHolidayQueryParams(params)
  const url = calendarificSearchURL + '?' + queryString;

  //DISPLAY CALENDARIFIC RESULTS OR ERRORS
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayCalendarificResults (responseJson))
    .catch(err => {
      $('#calendarific-js-error-message').text(`Something went wrong: ${err.message}`);
    });
}

//RUN!
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const year = $('#year').val();
    const country = $('#country').val();
    const month = $('#month').val();
    const day = $('#day').val();
    getHolidays(country, year, month, day);
  });
}

$(watchForm);