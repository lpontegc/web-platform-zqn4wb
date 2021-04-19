console.log('hello!')

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
} 