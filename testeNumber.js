const teste = "Ricardo";
console.log(teste + 1);
console.log(teste * 1); //Nan - Not a number;

const valor = 3000;
const horas = 176;
const minhaString = "teste;"

function ganhoPorHora(salario, horasTrabalhadasNoMes) {
    const salarioHora = (salario / horasTrabalhadasNoMes);
    return salarioHora;
  }   

console.log("Divisão:"+ganhoPorHora(valor,horas));
console.log("Math.round:"+ Math.round(ganhoPorHora(valor,horas)));
console.log("ToFixed:"+ ganhoPorHora(valor,horas).toFixed(4));
console.log("ToLocaleString:"+ ganhoPorHora(valor,horas).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));