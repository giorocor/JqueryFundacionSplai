var textDisplay="";
var resultado=0;
var num1=0;
var num2=0;
var operador; 
var display= $("#display");



function mostrarEnDisplay(valor){
    textDisplay+=valor;
    $("#display").val(textDisplay);
}

$("#display").keypress(function(e){
    console.log(e)
    e.preventDefault();
    let valor =String.fromCharCode(e.which)
    if( valor.match(/^[0-9]+$/)){
       mostrarEnDisplay(valor)
    }
 });

function guardarDigitos(valor){

            if(num1==0){
                if(resultado==0){
                    num1=+valor;
                }else{
                    num1=resultado;
                    num2=+valor;
                    operacion(operador,num1,num2);
                }
                
            }else{
                num2=+valor;
                operacion(operador,num1,num2);
            }
}

function guardarOperador(valor){
    if(resultado==0){
        guardarDigitos($("#display").val())
        operador=valor;
        textDisplay="";
    }else{
        operador=valor;
        textDisplay="";
    }
}

function operacion(operador,num1,num2){
    switch(operador){
        case "+":
             sumar(num1,num2);
             break;
        case "-":
             restar(num1,num2);
        break;
        case "/":
            dividir(num1,num2);
        break;
        case "*":
            multiplicar(num1,num2);
        break;
        case "%":
            modulo(num1,num2);
        break;
    }
}


function result(){
   
    guardarDigitos($("#display").val());
    num1=0;
    num2=0;
    textDisplay="";
}

function sumar(valor1,valor2){
    resultado = valor1+valor2;
    num1=0;
    num2=0;
    textDisplay="";
    return mostrarEnDisplay(resultado);
}

function restar(num1,num2){
    resultado = num1-num2;
    num1=0;
    num2=0;
    textDisplay="";
    return mostrarEnDisplay(resultado);
}

function multiplicar(num1,num2){
    resultado = num1*num2;
    num1=0;
    num2=0;
    textDisplay="";
    return mostrarEnDisplay(resultado);
}

function dividir(num1,num2){
    resultado = num1/num2;
    num1=0;
    num2=0;
    textDisplay="";
    return mostrarEnDisplay(resultado);
}

function modulo(num1,num2){
    resultado = num1%num2;
    num1=0;
    num2=0;
    textDisplay="";
    return mostrarEnDisplay(resultado);
}

function raiz(){
    resultado = Math.sqrt($("#display").val());
    num1=0;
    num2=0;
    textDisplay="";
    return mostrarEnDisplay(resultado);
}

function inverso(){
    resultado = Math.pow($("#display").val(),-1);
    num1=0;
    num2=0;
    textDisplay="";
    return mostrarEnDisplay(resultado);
}
function signo(){
    resultado = ($("#display").val()*-1);
    num1=0;
    num2=0;
    textDisplay="";
    return mostrarEnDisplay(resultado);
}
//Funci??n que coloca la C al presionar dicho bot??n
function darC(){
    num1 = 0;
    num2 = 0;
    resultado=0;
    textDisplay="";
    mostrarEnDisplay(textDisplay);
}

function darCE(){
    num1=0;
    num2 = 0;
    textDisplay="";
    mostrarEnDisplay(resultado);
}
function corregir(){
   let numero=$("#display").val();
   numero=numero.length;
   numero=$("#display").val(substring(0,numero-1));
   textDisplay="";
   mostrarEnDisplay(numero);
}


