'use strict';

const apiKey = '6a93fc0ceb56dd88e4f84f7a75315a5ec21c7a05'; 
const searchURL = 'https://calendarific.com/api/v2/holidays';

function formatQueryParams(params) {
  const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  return queryItems.join('&');
}

function displayResults(responseJson) {
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
      `<li><h3>Oh no! No holidays to display</h3>
      </li>`
    )};
  $('#results').removeClass('hidden');
};

function getHolidays(country, year, month, day) {
  const params = {
    api_key: apiKey,
    country: country,
    year: year,
    month: month,
    day: day,
  };
  const queryString = formatQueryParams(params)
  const url = searchURL + '?' + queryString;

  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults (responseJson))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}

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