// <script>
function calcToday() {
  var today = new Date();
  var dd = today.getDate() - 1;
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd
  }
  if (mm < 10) {
    mm = '0' + mm
  }

  today = yyyy + '-' + mm + '-' + dd;
  document.getElementById("datefield").setAttribute("max", today);
  document.getElementById("datefield").setAttribute("value", today);
  document.getElementById("dateSelected").innerHTML= today;

}


function openNav() {
  document.getElementById("mySidebar").style.width = "70px";
  document.getElementById("main").style.marginLeft = "70px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "5%";
}
// </script>
$(document).ready(function($) {
  $('.grid').masonry({
    itemSelector: '.tp',
    fitWidth: 0,
    originTop: true,
    gutter: 0
  });
});

$('.count').each(function() {
  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  }, {
    duration: 4000,
    easing: 'swing',
    step: function(now) {
      $(this).text(Math.ceil(now));
    }
  });
});

function changePlaceholder() {
  var placeholders = ['Maharashtra', 'Delhi', 'Tamil Nadu'];
  (function cycle() {
    var placeholder = placeholders.shift();
    $('.search').attr('placeholder', placeholder);
    placeholders.push(placeholder);
    setTimeout(cycle, 1000);
  })();
}

function changeOpacity() {
  var element = document.getElementById('main');
  element.style.opacity = "0.7";
}

function revertOpacity() {
  var element = document.getElementById('main');
  element.style.opacity = "1";
}

/*Get Covid 19 Data from official api*/
var xmlhttp = new XMLHttpRequest();
var stateData = null;
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    //Use parse() method to convert JSON string to JSON object
    stateData = JSON.parse(this.responseText);

  }
}
xmlhttp.open("GET", "https://api.covid19india.org/v4/timeseries.json", true);
xmlhttp.send();

function getData() {
  console.log(stateData);
  console.count();
  var inputtedDate = document.getElementById("datefield").value;
  console.log(inputtedDate);

  var totalConfirmed=0,totalActive=0,totalRecovered=0,totalTested=0,totalDeceased=0;

  var stateCodes = ["","AP", "AR", "AS", "BR", "CT", "GA", "GJ", "HR", "HP", "JH",
                    "KA", "KL", "MP", "MH", "MN", "ML", "MZ", "NL", "OR", "PB",
                    "RJ", "SK", "TN", "TG", "TR", "UP", "UT", "WB", "AN", "CH",
                    "DN", "DL", "JK", "LA", "PY"
  ];
  console.log(stateData[stateCodes[9]]["dates"][inputtedDate]["total"]["confirmed"]);
  for (var i = 1; i < 36; i++) {

    var deceased = stateData[stateCodes[i]]["dates"][inputtedDate]["total"]["deceased"];
    var recovered = stateData[stateCodes[i]]["dates"][inputtedDate]["total"]["recovered"];
    var confirmed = stateData[stateCodes[i]]["dates"][inputtedDate]["total"]["confirmed"];
    var tested = stateData[stateCodes[i]]["dates"][inputtedDate]["total"]["tested"];

    if(confirmed==null)
      confirmed = 0;
    if(active==null)
      active=0;
    if(tested==null)
      tested=0;
    if(deceased==null)
      deceased=0;
    if(recovered==null)
      recovered=0;

    var active = confirmed - recovered - deceased;

    totalConfirmed+=confirmed;
    totalActive+=active;
    totalRecovered+=recovered;
    totalDeceased+=deceased;
    totalTested+=tested;

    document.getElementById("myTable").rows[i].cells[1].innerHTML = confirmed;
    document.getElementById("myTable").rows[i].cells[2].innerHTML = active;
    document.getElementById("myTable").rows[i].cells[3].innerHTML = recovered;
    document.getElementById("myTable").rows[i].cells[4].innerHTML = deceased;
    document.getElementById("myTable").rows[i].cells[5].innerHTML = tested;
  }
  document.getElementById("myTable").rows[36].cells[1].innerHTML = totalConfirmed;
  document.getElementById("myTable").rows[36].cells[2].innerHTML = totalActive;
  document.getElementById("myTable").rows[36].cells[3].innerHTML = totalRecovered;
  document.getElementById("myTable").rows[36].cells[4].innerHTML = totalDeceased;
  document.getElementById("myTable").rows[36].cells[5].innerHTML = totalTested;

  document.getElementById("totalConfirmedIndia").innerHTML = totalConfirmed;
  document.getElementById("totalActiveIndia").innerHTML = totalActive;
  document.getElementById("totalRecoveredIndia").innerHTML = totalRecovered;
  document.getElementById("totalDeceasedIndia").innerHTML = totalDeceased;

  document.getElementById("dateSelected").innerHTML= inputtedDate;
  document.getElementById("testedTillDateSelected").innerHTML = totalTested;

  $('.count').each(function() {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 4000,
      easing: 'swing',
      step: function(now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
  console.table(document.getElementById("myTable"));
}
/*Dark Mode Light Mode Toggle*/
// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-light') {
    setTheme('theme-dark');
  } else {
    setTheme('theme-light');
  }
}

// Immediately invoked function to set the theme on initial load
(function() {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-dark');
  } else {
    setTheme('theme-light');
  }
})();
