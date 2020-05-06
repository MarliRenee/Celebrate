'use strict';

//AUTOFILL COUNTRIES & COUNTRY CODES
var countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo Democratic Republic",
    "Cook Islands",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Holy See (Vatican City)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Helena",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands",
    "Tuvalu",
    "US Virgin Islands",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietna",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ]
  
  var countryCodes = {
    Afghanistan:	"af",
    Albania:	"al",
    Algeria:	"dz",
    "American Samoa":	"as",
    Andorra:	"ad",
    Angola:	"ao",
    Anguilla:	"ai",
    "Antigua and Barbuda":	"ag",
    Argentina:	"ar",
    Armenia:	"am",
    Aruba:	"aw",
    Australia:	"au",
    Austria:	"at",
    Azerbaijan:	"az",
    Bahrain:	"bh",
    Bangladesh:	"bd",
    Barbados:	"bb",
    Belarus:	"by",
    Belgium:	"be",
    Belize:	"bz",
    Benin:	"bj",
    Bermuda:	"bm",
    Bhutan:	"bt",
    Bolivia:	"bo",
    "Bosnia and Herzegovina":	"ba",
    Botswana:	"bw",
    Brazil:	"br",
    "British Virgin Islands":	"vg",
    Brunei:	"bn",
    Bulgaria:	"bg",
    "Burkina Faso":	"bf",
    Burundi:	"bi",
    Cambodia:	"kh",
    Cameroon:	"cm",
    Canada:	"ca",
    "Cayman Islands":	"ky",
    "Central African Republic":	"cf",
    Chad:	"td",
    Chile:	"cl",
    China:	"cn",
    Colombia:	"co",
    Comoros:	"km",
    Congo:	"cg",
    "Congo Democratic Republic":	"cd",
    "Cook Islands":	"ck",
    "Costa Rica":	"cr",
    "Cote d'Ivoire":	"ci",
    Croatia:	"hr",
    Cuba:	"cu",
    Curaçao:	"cw",
    Cyprus:	"cy",
    "Czech Republic":	"cz",
    Denmark:	"dk",
    Djibouti:	"dj",
    Dominica:	"dm",
    "Dominican Republic":	"do",
    Ecuador:	"ec",
    Egypt:	"eg",
    "El Salvador":	"sv",
    "Equatorial Guinea":	"gq",
    Eritrea:	"er",
    Estonia:	"ee",
    Ethiopia:	"et",
    "Falkland Islands":"fk",
    "Faroe Islands":"fo",
    Fiji:	"fj",
    Finland:	"fi",
    France:	"fr",
    "French Polynesia":	"pf",
    Gabon:	"ga",
    Gambia:	"gm",
    Georgia:"ge",
    Germany:"de",
    Ghana:	"gh",
    Gibraltar:"gi",
    Greece:	"gr",
    Greenland:"gl",
    Grenada:"gd",
    Guam:	"gu",
    Guatemala:"gt",
    Guernsey:	"gg",
    Guinea:	"gn",
    "Guinea-Bissau":"gw",
    Guyana:"gy",
    Haiti:"ht",
    "Holy See (Vatican City)":"va",
    Honduras:	"hn",
    "Hong Kong":"hk",
    Hungary: "hu",
    Iceland: "is",
    India:"in",
    Indonesia:"id",
    Iran:	"ir",
    Iraq:	"iq",
    Ireland:"ie",
    "Isle of Man":"im",
    Israel:"il",
    Italy:"it",
    Jamaica:"jm",
    Japan:"jp",
    Jersey:"je",
    Jordan:"jo",
    Kazakhstan:"kz",
    Kenya:"ke",
    Kiribati:"ki",
    Kuwait:"kw",
    Kyrgyzstan:"kg",
    Laos:"la",
    Latvia:"lv",
    Lebanon:"lb",
    Lesotho:"ls",
    Liberia:"lr",
    Libya:"ly",
    Liechtenstein:"li",
    Lithuania:"lt",
    Luxembourg:"lu",
    Macau:"mo",
    Madagascar:"mg",
    Malawi:"mw",
    Malaysia:"my",
    Maldives:"mv",
    Mali:"ml",
    Malta:"mt",
    "Marshall Islands":"mh",
    Martinique:"mq",
    Mauritania:"mr",
    Mauritius:"mu",
    Mayotte:"yt",
    Mexico:"mx",
    Micronesia:"fm",
    Moldova:"md",
    Monaco:"mc",
    Mongolia:"mn",
    Montenegro:"me",
    Montserrat:"ms",
    Morocco:"ma",
    Mozambique:"mz",
    Myanmar:"mm",
    Namibia:"na",
    Nauru:"nr",
    Nepal:"np",
    Netherlands:"nl",
    "New Caledonia":"nc",
    "New Zealand":"nz",
    Nicaragua:"ni",
    Niger:"ne",
    Nigeria:"ng",
    "Northern Mariana Islands":"mp",
    Norway:"no",
    Oman:"om",
    Pakistan:"pk",
    Palau:"pw",
    Panama:"pa",
    "Papua New Guinea":"pg",
    Paraguay:"py",
    Peru:"pe",
    Philippines:"ph",
    Poland:"pl",
    Portugal:"pt",
    "Puerto Rico":"pr",
    Qatar:"qa",
    Reunion:"re",
    Romania:"ro",
    Russia:"ru",
    Rwanda:"rw",
    "Saint Helena":"sh",
    "Saint Kitts and Nevis":"kn",
    "Saint Lucia":"lc",
    "Saint Martin":"mf",
    "Saint Pierre and Miquelon":"pm",
    "Saint Vincent and the Grenadines":"vc",
    Samoa:"ws",
    "San Marino":	"sm",
    "Sao Tome and Principe":"st",
    "Saudi Arabia":"sa",
    Senegal:"sn",
    Serbia:"rs",
    Seychelles:"sc",
    "Sierra Leone":"sl",
    Singapore:"sg",
    "Sint Maarten":"sx",
    Slovakia:"sk",
    Slovenia:"si",
    "Solomon Islands":"sb",
    Somalia:"so",
    "South Africa":"za",
    "South Korea":"kr",
    "South Sudan":"ss",
    Spain:"es",
    "Sri Lanka":"lk",
    Sudan:"sd",
    Suriname:"sr",
    Sweden:"se",
    Switzerland:"ch",
    Syria:"sy",
    Taiwan:"tw",
    Tajikistan:"tj",
    Tanzania:"tz",
    Thailand:"th",
    Togo:"tg",
    Tonga:"to",
    "Trinidad and Tobago":"tt",
    Tunisia:"tn",
    Turkey:"tr",
    Turkmenistan:"tm",
    "Turks and Caicos Islands":"tc",
    Tuvalu:"tv",
    "US Virgin Islands":"vi",
    Uganda:"ug",
    Ukraine:"ua",
    "United Arab Emirates":"ae",
    "United Kingdom":"gb",
    "United States":"us",
    Uruguay:"uy",
    Uzbekistan:"uz",
    Vanuatu:"vu",
    Venezuela:"ve",
    Vietnam:"vn",
    Yemen:"ye",
    Zambia:"zm",
    Zimbabwe:"zw",
  }
  
  //AUTOFILL FUNCTION
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
  
  //AUTOCOMPLETE WATCH
  autocomplete(document.getElementById("myInput"), countries); 

//WIKIPEDIA BLURB
const searchUrl = 'https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&';

//CORRECTLY FORMATTED URL
//https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=Boxing%20Day&srlimit=1

function formatWikiQueryParams(params) {
  const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  return queryItems.join('&');
}

function displayWikiResults(responseJson) {
    console.log(responseJson);
    $('#wikiBlurb').empty();
    for (let i = 0; i < responseJson.query.search.length; i++){
      $('#wikiBlurb').append(
        `<h2>${responseJson.query.search[i].title}</h2>
        <p>${responseJson.query.search[i].snippet}...</p>
        <button>
            <a href="https://en.wikipedia.org/wiki/${responseJson.query.search[i].title}" target="_blank">Read More</a>
        </button>`
      )}; 
    $('#wikiBlurb').removeClass('hidden');
  };

function getWikipediaBlurb(srsearch, srlimitNumber){
  var params = {
    srsearch: srsearch,
    srlimit: srlimitNumber,
  };
  const queryString = formatWikiQueryParams(params)
  const url = searchUrl + queryString;
  console.log(url);

  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayWikiResults(responseJson))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}

// //CALENDARIFIC API 
const calendarificApiKey = '5931d52bf4f8179042bc5c687edcd6c2e1cd4b4b'; 
const calendarificSearchURL = 'https://calendarific.com/api/v2/holidays';

//FORMAT THE CALENDARIFIC SEARCH PARAMETERS
function formatHolidayQueryParams(params) {
  const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  return queryItems.join('&');
}

// //DISPLAY THE CALENDARIFIC JSON RESULTS & LIST IN HTML
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
  $('#startOver').click(function(){
    $('#results-list').empty();
    $('#wikiBlurb').empty();
  });
};

// //FIND THE CALENDARIFIC PARAMETERS
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

//   //DISPLAY CALENDARIFIC RESULTS OR ERRORS
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
    const country = $('#myInput').val();
    const month = $('#month').val();
    const day = $('#day').val();
    const srsearch = $('#myInput').val();
    const srlimitNumber = 1;
    getHolidays(countryCodes[country], year, month, day);
    getWikipediaBlurb(srsearch, srlimitNumber);
  });
}

$(watchForm);