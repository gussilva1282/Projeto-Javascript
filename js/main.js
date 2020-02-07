//console.error("falha")
let titulo = document.querySelector("#titulo");
titulo.textContent = "ETECIA NUTRIÇÃO E DIETÉTICA";

//pegar o peso
let paciente = document.querySelector(".paciente");
let tdpeso = paciente.querySelector(".info-peso");
let peso = tdpeso.textContent;

//pegar altura
let tdaltura = paciente.querySelector(".info-altura");
let altura = tdaltura.textContent;

let pesovalido = true;
let alturavalida = true;


//validar dados
if (peso <= 0 || peso > 1000 ){
    console.error("peso invalido")
    pesovalido = false;
}
if (altura <= 0 ){
    console.error("altura invalida")
    alturavalida = false;
}
if(pesovalido == true && alturavalida == true){

//calcular IMC
let imc = peso / (altura * altura);
console.log(imc);

//mostrar imc
let tdimc = paciente.querySelector(".info-imc");
tdimc.textContent = imc;
}