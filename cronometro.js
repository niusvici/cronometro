var hh = 00;
var mm = 00;
var ss = 00;
var tempo = 1000;
var cron;
var temporizador;
let button = document.querySelector('.botaoiniciar');
button.disabled=false;
var marcarvoltas = 0;


function doisdigitos(digito){
    if(digito<10){
         return ('0'+digito)
    }else{
        return digito
    }
}
 
function iniciar() {
    cron = setInterval(() => { timer(); }, tempo)
    button.disabled =  true;
}
function parar() {
    clearInterval(cron);
    button.disabled = false
}
function zerar() {
    clearInterval(cron)
    hh = 00;
    mm = 00;
    ss = 00;
    
   

    document.getElementById('relogio'). innerHTML = "00:00:00";
    document.getElementById('marcarvoltas'). innerHTML = "Voltas";
    document.getElementById('umavolta'). innerHTML = "";
    document.getElementById('duasvolta'). innerHTML = "";
    document.getElementById('tresvolta'). innerHTML = "";
    document.getElementById('quatrovolta'). innerHTML = "";
    document.getElementById('cincovolta'). innerHTML = "";
    button.disabled = false;
    marcarvoltas=0;

}
function timer() {
    ss++
    if(ss==60){
        ss=0;
        mm++
    }if(mm==60){
        mm=0;
        hh++
    }
    temporizador =  doisdigitos(hh) + ":" + doisdigitos(mm) + ":" +  doisdigitos(ss);

    document.getElementById('relogio'). innerHTML =  temporizador
}
function imprimirvolta(){
      
    if(marcarvoltas == 0){
        document.getElementById('umavolta'). innerHTML = "1ª" + doisdigitos(hh) + ":" + doisdigitos(mm) + ":" +  doisdigitos(ss);
        marcarvoltas++
        
    }else if(marcarvoltas == 1){
        document.getElementById('duasvolta'). innerHTML = "2ª" + doisdigitos(hh) + ":" + doisdigitos(mm) + ":" +  doisdigitos(ss);
        marcarvoltas++
    }else if(marcarvoltas == 2){
    document.getElementById('tresvolta'). innerHTML = "3ª" + doisdigitos(hh) + ":" + doisdigitos(mm) + ":" +  doisdigitos(ss);
    marcarvoltas++
    }else if(marcarvoltas == 3){
    document.getElementById('quatrovolta'). innerHTML = "4ª" + doisdigitos(hh) + ":" + doisdigitos(mm) + ":" +  doisdigitos(ss);
    marcarvoltas++
    }else if(marcarvoltas == 4){
    document.getElementById('cincovolta'). innerHTML = "5ª" + doisdigitos(hh) + ":" + doisdigitos(mm) + ":" +  doisdigitos(ss);
    marcarvoltas++
    }else{
    alert("Apenas 5 voltas por enquanto")
    }

}
 
 

