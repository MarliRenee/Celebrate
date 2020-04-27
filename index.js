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
      <button id="startOver">Start Over</button>
      </li>`
    )};
  if (hol.length === 0) {
      $('#results-list').append(
      `<li><h3>There are no holidays to display today. Let's celebrate your unbirthday instead!</h3>
      <button id="startOver">Start Over</button>
      </li>`
    )};
  $('#results').removeClass('hidden');
  $('#startOver').click(function(){
    $('#results-list').empty();
  });
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

//AUTOFILL TEST

function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
              b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });

  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) { 
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
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
    autocomplete(document.getElementById("myInput"), countries);
  });
}

$(watchForm);