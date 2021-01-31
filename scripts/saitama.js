$("#navigation").mouseenter(function() {
  $("#left_navbar").fadeIn(1000, function() {
    var x = document.getElementById("left_navbar");
    if (x.style.display == "none") {
      x.style.display = "block";
    }
  });
});

function leftBar() {
  $("#left_navbar").fadeOut(1000, function() {
    var y = document.getElementById("left_navbar");
    if (y.style.display == "block") {
      y.style.display = "none";
    }
  });
}
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


function openNav() {
  document.getElementById("mySidebar").style.width = "70px";
  // document.getElementById("main").style.marginLeft = "70px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  // document.getElementById("main").style.marginLeft = "5%";
}
