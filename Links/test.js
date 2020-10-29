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
}


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
  console.log(stateData["AN"]["dates"][inputtedDate]["total"]["confirmed"]);
  document.getElementById("myTable").rows[0].cells[0].innerHTML=2358;
}
