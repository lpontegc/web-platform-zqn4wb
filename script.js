/* Funcionalidad de las pestañas*/

function openTab(evt, tab) {
  // Declare all variables
  var i, tabscontent, tabs;

  // Get all elements with class="tabscontent" and hide them
  tabscontent = document.getElementsByClassName("tabscontent");
  for (i = 0; i < tabscontent.length; i++) {
    tabscontent[i].style.display = "none";
  }

  // Get all elements with class="tabs" and remove the class "active"
  tabs = document.getElementsByClassName("tabs");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tab).style.display = "block";
  evt.currentTarget.className += " active";
  var iframe = document.getElementById('iframe1');
  iframe.src = iframe.src;
  var iframe = document.getElementById('iframe2');
  iframe.src = iframe.src;
  var iframe = document.getElementById('iframe3');
  iframe.src = iframe.src;
  
} 

/* Gráfico 1 con D3*/
d3.csv("https://raw.githubusercontent.com/mwaskom/seaborn-data/master/titanic.csv", 
function(error, data) {
  if(error){
    console.log("Error al leer el fichero titanic.csv");
    }
  else {
    var visualization = d3plus.viz()
    .container("#viz1")
    .data([
      {"year": 1991, "name":"alpha", "value": 15},
      {"year": 1992, "name":"alpha", "value": 20}])
    .type("bar")
    .id("name")
    .x("year")
    .y("value")
    .draw()
  }})
/* Gráfico 2 con D3*/
  var data = [
    {"year": 1991, "name":"alpha", "value": 15},
    {"year": 1991, "name":"beta", "value": 10},
    {"year": 1991, "name":"gamma", "value": 5},
    {"year": 1991, "name":"delta", "value": 50},
    {"year": 1992, "name":"alpha", "value": 20},
    {"year": 1992, "name":"beta", "value": 10},
    {"year": 1992, "name":"gamma", "value": 10},
    {"year": 1992, "name":"delta", "value": 43},
    {"year": 1993, "name":"alpha", "value": 30},
    {"year": 1993, "name":"beta", "value": 40},
    {"year": 1993, "name":"gamma", "value": 20},
    {"year": 1993, "name":"delta", "value": 17},
    {"year": 1994, "name":"alpha", "value": 60},
    {"year": 1994, "name":"beta", "value": 60},
    {"year": 1994, "name":"gamma", "value": 25},
    {"year": 1994, "name":"delta", "value": 32}
  ]
  var visualization2 = d3plus.viz()
    .container("#viz2")
    .data(data)
    .type("bar")
    .id("name")
    .x("year")
    .y("value")
    .draw();
  

    /* Gráfico 3 con D3*/
    var data = [
    {"year": 1991, "name":"alpha", "value": 15},
    {"year": 1992, "name":"alpha", "value": 34},
    {"year": 1991, "name":"alpha2", "value": 17},
    {"year": 1992, "name":"alpha2", "value": 65},
    {"year": 1991, "name":"beta", "value": 10},
    {"year": 1992, "name":"beta", "value": 10},
    {"year": 1991, "name":"beta2", "value": 40},
    {"year": 1992, "name":"beta2", "value": 38},
    {"year": 1991, "name":"gamma", "value": 5},
    {"year": 1992, "name":"gamma", "value": 10},
    {"year": 1991, "name":"gamma2", "value": 20},
    {"year": 1992, "name":"gamma2", "value": 34},
    {"year": 1991, "name":"delta", "value": 50},
    {"year": 1992, "name":"delta", "value": 43},
    {"year": 1991, "name":"delta2", "value": 17},
    {"year": 1992, "name":"delta2", "value": 35}
  ]

    var visualization3 = d3plus.viz()
    .container("#viz3")
    .data(data)
    .type("box")
    .id("name")
    .x("year")
    .y("value")
    .draw();
