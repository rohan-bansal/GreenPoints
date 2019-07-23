
function buttonStrike() {
if (document.getElementById("buttons").checked == true) {
}
}

function move() {
    var elem = document.getElementById("cprogress");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }