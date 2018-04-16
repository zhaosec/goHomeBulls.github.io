var width = 100;
var flag = 0
 function move() {
    var elem = document.getElementById("stamina");   
    var id = frame(); //decrease by second
    function frame() {
        if (width <= 0) {
        document.getElementById("stamina").innerHTML = staminaAlertBox();
        document.getElementById("stamina").innerHTML = "Lack of STAMINA";
        elem.style.width = 100+'%';
        elem.style.backgroundColor = "gray";
        flag = 1;
      } else { //decreasing
        width = document.getElementById("demo").innerHTML - 1; 
        elem.style.width = width + '%'; 
        var num = width;
        num = num.toFixed(0);
        document.getElementById("demo").innerHTML = num;
      } 
    }
}
function resetStamina(){
  width = 100;
}
function staminaAlertBox() {
    alert('You cannot move any more : Lack of Stamina');
  }
function checkstamina(){
  return flag;
}
function noKey() {
  try {event.keyCode = 0; }catch(e) { }
  event.cancelBubble = true;
  event.returnValue = false;
 
  return false;
 }
 