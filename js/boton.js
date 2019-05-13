

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
var resta = document.getElementById("resta");
var multi = document.getElementById("multiplicacion");
var div = document.getElementById("division");
var limp = document.getElementById("reset");
var pro = document.getElementById("pro");
var contador = document.getElementById("contador");
var restador = document.getElementById("restador");
var boton = document.getElementById("punto")

    cero.onclick = function(){
        resul.innerHTML = resul.innerHTML + "0";
    }
    uno.onclick = function(){
        resul.innerHTML = resul.innerHTML + "1";
    }
    dos.onclick = function(){
        resul.innerHTML = resul.innerHTML + "2";
    }
    tres.onclick = function(){
        resul.innerHTML = resul.innerHTML + "3";
    }
    cuatro.onclick = function(){
        resul.innerHTML = resul.innerHTML + "4";
    }
    cinco.onclick = function(){
        resul.innerHTML = resul.innerHTML + "5";
    }
    seis.onclick = function(){
        resul.innerHTML = resul.innerHTML + "6";
    }
    siete.onclick = function(){
        resul.innerHTML = resul.innerHTML + "7";
    }
    ocho.onclick = function(){
        resul.innerHTML = resul.innerHTML + "8";
    }
    nueve.onclick = function(){
        resul.innerHTML = resul.innerHTML + "9";
    }
    suma.onclick = function(){
        resul.innerHTML = resul.innerHTML +  "+";
    }
    resta.onclick = function(){
        resul.innerHTML = resul.innerHTML + "-";
    }
    multi.onclick = function(){
        resul.innerHTML = resul.innerHTML + "*";
    }
    div.onclick = function(){
        resul.innerHTML = resul.innerHTML + "/";
    }
    igual.onclick = function(){
        resul.innerHTML = eval(resul.innerHTML);
    }
    limp.onclick = function(){
        resul.innerHTML = "";
    }
    pro.onclick = function(){        
        resul.innerHTML = resul.innerHTML + "%";
    }
    contador.onclick = function(){
        resul.innerHTML = eval(resul.innerHTML) + 1;
    }
    restador.onclick = function(){
        resul.innerHTML = eval(resul.innerHTML) -1;
    }
boton.onclick = function(){
    resul.innerHTML = resul.innerHTML + ".";
}

