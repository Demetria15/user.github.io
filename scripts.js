console.log("Hi! Welcome to my portfolio page");

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle' && $(window).width() < 640) {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
