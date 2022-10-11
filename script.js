let first_number = 0;
let second_number = 0;
let operator = "";
let stats = true;

function on_ce(){
  // var buttonText = document.getElementById("ce");
  document.getElementById("digitDisplay").value = ""; 
  var all = document.querySelectorAll("numberButton");
  for(var i = 0, len = all.length; i<len; i++){
    all[i].disabled = true;
  }

}

function one(num){
 num = document.getElementById("digitDisplay").value += num; 
}

function select_operator(arth){
  operator = arth;
 first_number = document.getElementById("digitDisplay").value;
 document.getElementById("digitDisplay").value = " ";
 
}
function equal(){
 second_number = document.getElementById("digitDisplay").value;

 switch(operator){
   case "+":
    document.getElementById("digitDisplay").value = +first_number + +second_number;
    break;

    case "-":
    document.getElementById("digitDisplay").value = first_number - second_number;
    break;

    case "/":
    document.getElementById("digitDisplay").value = first_number / second_number;
    break;

    case "*":
    document.getElementById("digitDisplay").value = first_number * second_number;
    break;

    case "√":
    var squar = document.getElementById("digitDisplay").value;
    var outp =  Math.sqrt(squar);
    document.getElementById("digitDisplay").value = outp;
    break;

    case "x^2":
    var expo = document.getElementById("digitDisplay").value;
    var outp = expo * expo;
    document.getElementById("digitDisplay").value = outp;
    break;

    case "**":
    document.getElementById("digitDisplay").value = first_number ** second_number;
    break;

    default:
      document.getElementById("digitDisplay").value = "Syntax Error";

 }
}

function select_delet(){
  document.getElementById("digitDisplay").value = " ";
}

function select_clear(){
  var x = document.getElementById("digitDisplay").value;
  x = x.slice(0, -1);
  document.getElementById("digitDisplay").value = x;
}

