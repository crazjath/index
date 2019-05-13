

var resul = document.getElementById("resultado");
var cero = document.getElementById("numero0");
var uno = document.getElementById("numero1");
var dos = document.getElementById("numero2");
var tres = document.getElementById("numero3");
var cuatro = document.getElementById("numero4");
var cinco = document.getElementById("numero5");
var seis = document.getElementById("numero6");
var siete = document.getElementById("numero7");
var ocho = document.getElementById("numero8");
var nueve = document.getElementById("numero9");
var suma = document.getElementById("suma");
var igual = document.getElementById("igual");
 


    uno.onclick = function(){
        resul.innerHTML = resul.innerHTML + "1";
    }
    suma.onclick = function(){
        resul.innerHTML = resul.innerHTML +  "+";
    }
    igual.onclick = function(){
        resul.innerHTML = eval(resul.innerHTML);
    }

